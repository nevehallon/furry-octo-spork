import { GOP } from "../../../interfaces/genericObjectProps";
import styles from "../styles/NextSteps.module.scss";

const { section, finalStep, section1, section2, emphasis0, emphasis2, emphasis1 } = styles;

export default ({ billState, currentStep }: GOP): JSX.Element => {
  const billArr = Object.keys(billState).filter((key) => billState[key] && key);
  return (
    <div className={`${section} ${currentStep > 1 && finalStep}`}>
      <p className={`${section1} ${section2}`}>
        <strong className={emphasis0}>Section 2:</strong>

        <strong className={emphasis2}>Bills included:</strong>
        {billArr.map((x) => (
          <strong className={emphasis1} key={x}>
            {x === "tv" ? "TV License" : x}
          </strong>
        ))}
      </p>
    </div>
  );
};
