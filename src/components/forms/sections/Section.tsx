import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GOP } from "../../../interfaces/genericObjectProps";
import { NextStepProps } from "../../../interfaces/NextStepProps";
import styles from "../styles/NextStep.module.scss";

const { section, step2, section1, Emphasis0, Emphasis2, Emphasis1 } = styles;

export default ({ fName, mName, lName, sectionNum, currentStep }: NextStepProps["formData"] & GOP): JSX.Element => {
  const { push } = useHistory();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    sectionNum < 2 && (!fName || !mName || !lName) && push("/");
  }, [fName, lName, mName, push, sectionNum]);

  return (
    <div className={`${section} ${currentStep > 1 && step2}`}>
      <p className={section1}>
        <strong className={Emphasis0}>Section {sectionNum}:</strong>
        <strong className={Emphasis2}>AGREEMENT</strong>
        <strong className={Emphasis1}>in name of</strong>
        {`${fName.toUpperCase()} ${mName.toUpperCase()} ${lName.toUpperCase()}`}
      </p>
    </div>
  );
};
