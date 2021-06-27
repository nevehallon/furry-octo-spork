import { Props } from "../../interfaces/ExtendedFormProps";
import BillBtn from "./BillBtn";
import styles from "./styles/Form.module.scss";

const { extendedForm, formContainer, formContainer2, nextPart, highlight, nextPart2, header, btn, vectorTwo } = styles;

export default ({
  currentStep,
  highlighted,
  stepTwo,
  billEl,
  electric,
  handleSet,
  gas,
  water,
  internet,
  tv,
  other,
  push,
}: Props): JSX.Element => (
  <div className={extendedForm}>
    <div
      className={`${formContainer} ${formContainer2} ${!!currentStep && nextPart} ${highlighted && highlight} ${
        stepTwo && nextPart2
      }`}
    >
      <h3 className={`${header} ${highlighted && styles["highlight-text"]}`} ref={billEl}>
        Which bills are included?
      </h3>
      <BillBtn billType="electric" isSelected={electric} setSelected={handleSet} />
      <BillBtn billType="gas" isSelected={gas} setSelected={handleSet} />
      <BillBtn billType="water" isSelected={water} setSelected={handleSet} />
      <BillBtn billType="internet" isSelected={internet} setSelected={handleSet} />
      <BillBtn billType="tv" isSelected={tv} setSelected={handleSet} />
      <BillBtn billType="other" isSelected={other} setSelected={handleSet} />
    </div>
    <button className={`${styles["btn-danger"]} ${btn}`} onClick={() => push("/step2")} type="button">
      <span>Sign and Send Contract to Tenant(s)</span>
      <img
        alt=""
        className={vectorTwo}
        src="https://static.overlay-tech.com/assets/34ffbf7b-cbc6-4af9-8f8a-b266b23ef2c1.svg"
      />
    </button>
  </div>
);
