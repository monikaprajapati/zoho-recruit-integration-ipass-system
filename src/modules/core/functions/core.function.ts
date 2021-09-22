const checkEndDateTimeOfAccessToken =  (endDateTimeOfAccessTokenAsString: any) => {
    let endDateTimeOfAccessTokenAsDate: Date;
    let currentDateTime = new Date();
    endDateTimeOfAccessTokenAsDate = new Date(endDateTimeOfAccessTokenAsString);
    if(currentDateTime > endDateTimeOfAccessTokenAsDate) return true;
    return false;
}

export default checkEndDateTimeOfAccessToken;