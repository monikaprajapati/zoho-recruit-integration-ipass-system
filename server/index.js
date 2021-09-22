const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const localStorage = require("localStorage");
let cors = require("cors");
let con = require("./db_connection");

const PORT = process.env.PORT || 3001;
const app = express();
const nodeUrl = "http://8d83-49-34-100-214.ngrok.io";

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Login application
app.post("/login", (req, res) => {
  if (req.body.username === "demo@gmail.com" && req.body.password === "demo") {
    res.format({
      "application/json": function () {
        res.status(200).json({
          success: "Logged in successfully!",
          username: req.body.username,
          password: req.body.password,
        });
      },
    });
  } else {
    res.format({
      "application/json": function () {
        res.status(401).json({ error: "Invalid login credentials!" });
      },
    });
  }
});

// Subscribe event of zoho recruit module
app.post("/setNotificationWatch", (req, res) => {
  const accessToken = req.query.access_token;
  let event = req.body.module + "." + req.body.event;
  let channelId = randomNumber(1, 10000000);
  let token = "TOKEN_FOR_VERIFICATION_OF_" + channelId;
  let expiryDate = formatExpiryDate() + "T11:59:00+05:30";

  axios({
    method: "post",
    url: `https://recruit.zoho.in/recruit/v2/actions/watch`,
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      accept: "application/json",
    },
    data: {
      watch: [
        {
          channel_id: channelId,
          events: [event],
          channel_expiry: expiryDate,
          token: token,
          notify_url: nodeUrl + "/checkNotification",
        },
      ],
    },
  }).then((response) => {
    if (response.data.watch[0].status == "success") {
      console.log("=========== SUCCESS =========== ", response.data.watch);
      // Insert data into integration table in mysql
      let integration = {
        id: channelId,
        channelId: channelId,
        channel_expiry: expiryDate,
        token: token,
        eventType: req.body.event,
        notify_url: req.body.url,
        module: req.body.module,
      };
      con.query(
        "INSERT INTO integration SET ?",
        integration,
        function (err, result) {
          if (err) {
            console.log("error integration -- ", err);
          } else {
            console.log("success integration -- ");
          }
        }
      );
      res.format({
        "application/json": function () {
          res.status(200).json({
            success: response.data.watch[0].code,
            response: response.data.watch[0],
          });
        },
      });
    } else {
      console.log("=========== Failure =========== ");
      res.format({
        "application/json": function () {
          res.status(401).json({
            error: response.data.watch[0].code,
            response: response.data.watch[0],
          });
        },
      });
    }
  });
});

// zoho recruit login
app.get("/oauth/redirect", (req, res) => {
  const clientID = "1000.3K4KZ1OECK5V5PNMT0UZKSU4KZP73H";
  const clientSecret = "2ad4cc5bb3e6511efb3f994fe6e75ec7a3fd570172";
  const requestToken = req.query.code;

  axios({
    method: "post",
    url: `https://accounts.zoho.in/oauth/v2/token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}&grant_type=authorization_code&redirect_uri=${nodeUrl}/oauth/redirect`,
    headers: {
      accept: "application/json",
    },
  }).then((response) => {
    const accessToken = response.data.access_token;
    const refreshToken = response.data.refresh_token;
    const expires_in = response.data.expires_in;
    let login = {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
    insertDataInDB(login);
    res.redirect(
      `http://localhost:3000/home/integration?access_token=${accessToken}&refresh_token=${refreshToken}&expires_in=${expires_in}`
    );
  });
});

// refresh zoho recruit api

app.get("/refreshToken", (req, res) => {
  let refreshAccessToken = req.query.token;
  const clientID = "1000.3K4KZ1OECK5V5PNMT0UZKSU4KZP73H";
  const clientSecret = "2ad4cc5bb3e6511efb3f994fe6e75ec7a3fd570172";
  const refreshToken = refreshAccessToken;
  const grantType = "refresh_token";

  axios({
    method: "post",
    url: `https://accounts.zoho.in/oauth/v2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=${grantType}&refresh_token=${refreshToken}`,
    headers: {
      accept: "application/json",
    },
  }).then((response) => {
    console.log("Refresh token :: ", response.data);
    insertDataInDB(response.data);
    res.format({
      "application/json": function () {
        res.status(200).json({
          response: response.data,
        });
      },
    });
  });
});

// get zoho recruit modules
app.get("/getModules", (req, res) => {
  const accessToken = req.query.access_token;
  axios({
    method: "get",
    url: `https://recruit.zoho.in/recruit/private/json/Info/getModules?authtoken=${accessToken}&version=2`,
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      accept: "application/json",
    },
  }).then((response) => {
    const data = response.data.response.result.row;
    res.format({
      "application/json": function () {
        res.status(200).json({
          success: "fetched module successfully!",
          response: data,
        });
      },
    });
  });
});

// when action performed in module then call this function
app.post("/checkNotification", (req, res) => {
  let accessTokenFromDB;
  let DetailArray = [];
  let channelID = req.body.channel_id;
  console.log(
    "check notifications ====== ",
    req.body,
    "check notifications query ====== ",
    req.query
  );
  let integration = {
    ids: req.body.ids.join(","),
  };

  con.query(
    "UPDATE integration SET ? WHERE id = " + channelID,
    integration,
    function (err, result) {
      if (err) {
        console.log("error in updation -- ", err);
      } else {
        console.log("success updation -- ");
      }
    }
  );

  getLoginData(function (err, data) {
    if (err) {
      console.log("ERROR : ", err);
    } else {
      accessTokenFromDB = data[0].access_token;
      let module = req.body.module.replace(/_/g, '');
      console.log("module ====== ", module);
      // get candidate data
      axios({
        method: "get",
        url: `https://recruit.zoho.in/recruit/private/json/${module}/getRecordById?scope=recruitapi&version=2&id=${req.body.ids[0]}&authtoken=${accessTokenFromDB}`,
        headers: {
          Authorization: `Zoho-oauthtoken ${accessTokenFromDB}`,
          accept: "application/json",
        },
      }).then((response) => {
        console.log("response after fetching module data :: ",response.data.response);
        let responseData = response.data.response.result;
        let moduleName = Object.keys(responseData)[0];
        moduleName.replace(/_/g, '');
        let details = responseData[moduleName].row.FL;
        details.forEach((values) => {
          DetailArray.push(values);
        });
        console.log("array data :: ",DetailArray);
        getNofifyUrl(channelID, function (err, notifyUrl) {
          if (err) {
            console.log("ERROR : ", err);
          } else {
            console.log("notify url data :: ", notifyUrl);
            axios({
              method: "post",
              url: notifyUrl,
              headers: {
                accept: "application/json",
              },
              data: {
                DetailArray,
              },
            });
          }
        });
      });
    }
  });
});

// notification list
app.get("/notificationList", (req, res) => {
  const accessToken = req.query.access_token;
  axios({
    method: "get",
    url: `https://recruit.zoho.in/recruit/v2/actions/watch`,
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      accept: "application/json",
    },
  }).then((response) => {
    const data = response.data.watch;
    console.log(data.length);
  });
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const insertDataInDB = (data) => {
  getLoginData(function (err, response) {
    if (err) {
      console.log("ERROR in insert data ::: ", err);
    } else {
      console.log("there is login data exist === ", response);
      if (response.length > 0) {
        console.log("update :: ", response[0].id);
        con.query(
          `UPDATE login SET ? WHERE id= ${response[0].id}`,
          data,
          function (err, result) {
            if (err) {
              console.log("error login -- ", err);
            } else {
              console.log("success login -- ");
            }
          }
        );
      } else {
        console.log("insert login data -= ");
        con.query("INSERT INTO login SET ?", data, function (err, result) {
          if (err) {
            console.log("error insert -- ", err);
          } else {
            console.log("success insert -- ", result);
          }
        });
      }
    }
  });
};

function getLoginData(callback) {
  console.log("::::::::::::::::::: GET LOGIN DATA ::::::::::::::::::: ");
  con.query("SELECT * FROM login", function (err, data) {
    if (err) throw callback(err, null);
    callback(null, data);
  });
}

function getNofifyUrl(channelId, callback) {
  con.query(
    `SELECT notify_url FROM integration WHERE channelId='${channelId}'`,
    function (err, data) {
      if (err) throw callback(err, null);
      callback(null, data[0].notify_url);
    }
  );
}

function formatExpiryDate() {
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();

  return year + "-" + month + "-" + date;
}

app.listen(PORT, () => {
  console.log(
    `server listening on ${PORT}, ${localStorage.getItem("access_token")}`
  );
});
