import { GOP } from "../../../interfaces/genericObjectProps";
import styles from "../styles/NextStep.module.scss";

const { section, step2, section1, section2, Emphasis0, Emphasis2, Emphasis1 } =
  styles;

export default ({ billState, currentStep }: GOP): JSX.Element => {
  const billArr = Object.keys(billState).filter((key) => billState[key] && key);
  return (
    <div className={`${section} ${currentStep > 1 && step2}`}>
      <p className={`${section1} ${section2}`}>
        <strong className={Emphasis0}>Section 2:</strong>

        <strong className={Emphasis2}>Bills included:</strong>
        {billArr.map((x) => (
          <strong className={Emphasis1} key={x}>
            {x === "tv" ? "TV License" : x}
          </strong>
        ))}
      </p>
    </div>
  );
};
