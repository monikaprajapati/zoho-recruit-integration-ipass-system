import * as React from "react";
import { Modal } from "antd";
import "./Modal.less";
import LinkButton from "../../widgets/LinkButton";
import { useTranslation } from "react-i18next";

type ModalProps = {
  isModalOpened: boolean;
  modalTitle: String;
  onCloseModel: Function;
};

const CModal: React.FC<ModalProps> = (props: any) => {
  const { isModalOpened, modalTitle, onCloseModel } = props;
  const { t } = useTranslation();

  const onModelClose = () => {
    onCloseModel();
  };

  return (
    <Modal
      className="rounded-[8px]"
      footer={null}
      maskStyle={{ backgroundColor: "#0B1037", opacity: "0.7" }}
      closable={false}
      title={modalTitle}
      visible={isModalOpened}
    >
      {props.children}
      <div className="flex justify-center">
        <LinkButton
          label={t("uav.action.archieveCancel")}
          onClick={onModelClose}
        ></LinkButton>
      </div>
    </Modal>
  );
};

export default CModal;
