import { useState } from "react";

import { GOP } from "../../interfaces/genericObjectProps";
import { NextStepProps } from "../../interfaces/NextStepProps";
import { SectionWrapper } from "./sections";
import styles from "./styles/NextStep.module.scss";

const { header, sectionContainer, scrollbar, step2 } = styles;

export default ({ formData, setStep, billState, setHL, billEl, currentStep }: NextStepProps & GOP): JSX.Element => {
  const [TO, setTO] = useState(0);
  const scroll = () => (billEl?.current as HTMLElement)?.scrollIntoView({ behavior: "smooth" });
  const display = currentStep < 2;
  return (
    <>
      <h3 className={header}>{display ? "Preview & Edit Terms of Contract" : "Preview Contract"}</h3>
      <div className={`${sectionContainer}  ${scrollbar} ${currentStep > 1 && step2}`}>
        <SectionWrapper
          {...{
            formData,
            currentStep,
            action: () => setStep(0),
            display,
            sectionNum: 1,
          }}
        />
        <SectionWrapper
          {...{
            currentStep,
            action: () => {
              clearTimeout(TO);
              setHL(true);
              scroll();
              setTO(setTimeout(() => setHL(false), 2000));
            },
            display,
            sectionNum: 2,
            billState,
          }}
        />
        <SectionWrapper {...{ formData, currentStep, display, sectionNum: 3 }} />
        <SectionWrapper {...{ formData, currentStep, display, sectionNum: 4 }} />
      </div>
    </>
  );
};
