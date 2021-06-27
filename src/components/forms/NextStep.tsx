import { useRef, useState } from "react";
import { GOP } from "../../interfaces/genericObjectProps";
import styles from "./styles/NextStep.module.scss";

export interface NextStepProps {
  formData: {
    fName: string;
    mName: string;
    lName: string;
    compName: string;
  };
  currentStep: number;
  setStep: (val: number) => void;
  setHL: (val: boolean) => void;
  billState: GOP;
}

export function EditIcon() {
  return (
    <>
      <img
        alt=""
        className={styles.vector}
        src="https://static.overlay-tech.com/assets/4bf987bf-cc08-4eb4-994f-baa1196c8a3c.svg"
      />
    </>
  );
}
export function Section({
  fName,
  mName,
  lName,
  compName,
  sectionNum,
  currentStep,
}: NextStepProps["formData"] & GOP) {
  return (
    <div className={`${styles.section} ${currentStep > 1 && styles.step2}`}>
      <p className={styles.section1}>
        <strong className={styles.Emphasis0}>Section {sectionNum}:</strong>
        <strong className={styles.Emphasis2}>AGREEMENT</strong>
        <strong className={styles.Emphasis1}>in name of</strong>
        {`${fName.toUpperCase()} ${mName.toUpperCase()} ${lName.toUpperCase()}`}
      </p>
    </div>
  );
}
export function Section2({ billState, currentStep }: GOP) {
  const billArr = Object.keys(billState).filter(
    (key, i, arr) => billState[key] && key
  );
  return (
    <div className={`${styles.section} ${currentStep > 1 && styles.step2}`}>
      <p className={`${styles.section1} ${styles.section2}`}>
        <strong className={styles.Emphasis0}>Section 2:</strong>

        <strong className={styles.Emphasis2}>Bills included:</strong>
        {billArr.map((x) => (
          <strong key={x} className={styles.Emphasis1}>
            {x === "tv" ? "TV License" : x}
          </strong>
        ))}
      </p>
    </div>
  );
}

export function NextStep({
  formData,
  setStep,
  billState,
  setHL,
  billEl,
  currentStep,
}: NextStepProps & GOP) {
  const [TO, setTO] = useState(0);
  const scroll = () =>
    (billEl?.current as HTMLElement)?.scrollIntoView({ behavior: "smooth" });
  const display = currentStep < 2;
  return (
    <>
      <h3 className={styles.header}>
        {display ? "Preview & Edit Terms of Contract" : "Preview Contract"}
      </h3>
      <div
        className={`${styles.sectionContainer}  ${styles.scrollbar} ${
          currentStep > 1 && styles.step2
        }`}
      >
        <div className={styles.wrapper}>
          <Section {...formData} {...{ currentStep }} sectionNum={1} />
          <button className={styles.editBtn} onClick={() => setStep(0)}>
            {display && <EditIcon />}
          </button>
        </div>
        <div className={`${styles.wrapper} `}>
          <Section2 {...{ billState, currentStep }} />
          <button
            className={`${styles.editBtn}`}
            onClick={() => {
              clearTimeout(TO);
              setHL(true);
              scroll();
              setTO(setTimeout(() => setHL(false), 2000));
            }}
          >
            {display && <EditIcon />}
          </button>
        </div>
        <div className={styles.wrapper}>
          <Section {...formData} {...{ currentStep }} sectionNum={3} />
          <button className={styles.editBtn}>{display && <EditIcon />}</button>
        </div>
        <div className={styles.wrapper}>
          <Section {...formData} {...{ currentStep }} sectionNum={4} />
          <button className={styles.editBtn}>{display && <EditIcon />}</button>
        </div>
      </div>
    </>
  );
}
