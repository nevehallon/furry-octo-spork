import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GOP } from "../../../interfaces/genericObjectProps";
import { NextStepsProps } from "../../../interfaces/NextStepsProps";
import styles from "../styles/NextSteps.module.scss";

const { section, finalStep, section1, emphasis0, emphasis2, emphasis1 } = styles;

export default ({ fName, mName, lName, sectionNum, currentStep }: NextStepsProps["formData"] & GOP): JSX.Element => {
  const { push } = useHistory();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    sectionNum < 2 && (!fName || !mName || !lName) && push("/");
  }, [fName, lName, mName, push, sectionNum]);

  return (
    <div className={`${section} ${currentStep > 1 && finalStep}`}>
      <p className={section1}>
        <strong className={emphasis0}>Section {sectionNum}:</strong>
        <strong className={emphasis2}>AGREEMENT</strong>
        <strong className={emphasis1}>in name of</strong>
        {`${fName.toUpperCase()} ${mName.toUpperCase()} ${lName.toUpperCase()}`}
      </p>
    </div>
  );
};
