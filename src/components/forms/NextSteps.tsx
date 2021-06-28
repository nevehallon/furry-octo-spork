import { useState } from "react";

import { GOP } from "../../interfaces/genericObjectProps";
import { NextStepsProps } from "../../interfaces/NextStepsProps";
import { SectionWrapper } from "./sections";
import styles from "./styles/NextSteps.module.scss";

const { secondaryHeader, sectionContainer, scrollbar, finalStep } = styles;

export default ({
  formData,
  setStep,
  billState,
  highlighted,
  setHL,
  billEl,
  currentStep,
}: NextStepsProps & GOP): JSX.Element => {
  const [TO, setTO] = useState<any>(0);
  const scroll = () =>
    (billEl?.current as HTMLElement)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  const display = currentStep < 2;
  return (
    <>
      <h3 className={secondaryHeader}>{display ? "Preview & Edit Terms of Contract" : "Preview Contract"}</h3>
      <div className={`${sectionContainer}  ${scrollbar} ${currentStep > 1 && finalStep}`}>
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
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              if (highlighted) return;
              clearTimeout(TO);
              setHL(true);
              scroll();

              setTO(setTimeout(() => setHL(false), 3500));
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
