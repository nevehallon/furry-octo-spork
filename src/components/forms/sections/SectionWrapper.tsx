import { GOP } from "../../../interfaces/genericObjectProps";
import styles from "../styles/NextStep.module.scss";
import Section from "./Section";
import Section2 from "./Section2";

const { wrapper, editBtn, vector } = styles;

export default ({ formData, currentStep, action, display, sectionNum, billState }: GOP): JSX.Element => (
  <div className={wrapper}>
    {sectionNum !== 2 ? (
      <Section {...formData} {...{ currentStep, sectionNum }} />
    ) : (
      <Section2 {...{ billState, currentStep }} />
    )}
    <button className={editBtn} onClick={action} type="button">
      {display && (
        <img
          alt="edit icon"
          className={vector}
          src="https://static.overlay-tech.com/assets/4bf987bf-cc08-4eb4-994f-baa1196c8a3c.svg"
        />
      )}
    </button>
  </div>
);
