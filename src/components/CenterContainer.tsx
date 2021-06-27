import { GOP } from "../interfaces/genericObjectProps";
import Image from "./common/Image";
import { Form } from "./forms/Form";
import styles from "./styles/CenterContainer.module.scss";

export default ({ currentStep, setStep }: GOP): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.headerBar}>
      <Image
        {...{
          alt: "icon",
          cName: "",
          cName2: "logoutBlack24dp2",
          imgClass: "vector",
          src: "https://static.overlay-tech.com/assets/b65fa062-21e0-40ad-8956-d7f44f134518.svg",
        }}
      />
      <Image
        {...{
          alt: "icon",
          cName: "",
          cName2: "logoutBlack24dp2",
          imgClass: "vector",
          src: "https://static.overlay-tech.com/assets/1ed05ffb-d587-4789-b7f1-48a7c7d4f3ef.svg",
        }}
      />
    </div>
    <div className={styles.operationsScreen}>
      <Form {...{ currentStep, setStep }} />
    </div>
  </div>
);
