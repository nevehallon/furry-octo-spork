import React from "react";
import styles from "./styles/CenterContainer.module.scss";
import { Form } from "./forms/Form";
import { GOP } from "../interfaces/genericObjectProps";

export const CenterContainer = ({ currentStep, setStep }: GOP) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerBar}>
        <div className={styles.logoutBlack24dp2}>
          <img
            alt=""
            className={styles.vector}
            src="https://static.overlay-tech.com/assets/b65fa062-21e0-40ad-8956-d7f44f134518.svg"
          />
        </div>
        <div className={styles.logoutBlack24dp2}>
          <img
            alt=""
            className={styles.vector}
            src="https://static.overlay-tech.com/assets/1ed05ffb-d587-4789-b7f1-48a7c7d4f3ef.svg"
          />
        </div>
      </div>
      <div className={styles.operationsScreen}>
        <Form {...{ currentStep, setStep }} />
      </div>
    </div>
  );
};
