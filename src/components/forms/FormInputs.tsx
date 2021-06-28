import { Props } from "../../interfaces/InputsProps";
import styles from "./styles/Inputs.module.scss";
import TextInput from "./TextInput";

const {
  trackerPc,
  frame224,
  rectangle254,
  frame480,
  p,
  form,
  btnContainer,
  nextButtonTwo,
  nextButton,
  frame12,
  next,
  frame13,
  nextTwo,
  vector,
} = styles;

export default ({
  error,
  handleSubmit,
  fName,
  setFName,
  mName,
  setMName,
  lName,
  setLName,
  compName,
  setCompName,
}: Props): JSX.Element => (
  <>
    <div className={trackerPc}>
      <div className={frame224}>
        <div className={rectangle254} />
      </div>
    </div>
    <div className={frame480}>
      <p className={p}>
        Enter your full name and/or the company name that the tenant(s) is entering the agreement with
      </p>
    </div>
    {error && <span style={{ color: "red", textAlign: "center", fontSize: "26px" }}>*{error}*</span>}

    <form className={form} onSubmit={(e) => handleSubmit(e)}>
      <TextInput inputVal={fName} placeholder="First name" setValue={setFName} />
      <TextInput inputVal={mName} placeholder="Middle name(s)" setValue={setMName} />
      <TextInput inputVal={lName} placeholder="Surname" setValue={setLName} />
      <TextInput inputVal={compName} placeholder="Company name" setValue={setCompName} />

      <div className={btnContainer}>
        <button className={nextButtonTwo} type="submit">
          <div className={nextButton}>
            <div className={frame12}>
              <p className={next}>NEXT</p>
            </div>
            <div className={frame13}>
              <div className={nextTwo}>
                <img
                  alt=""
                  className={vector}
                  src="https://static.overlay-tech.com/assets/5348597a-95a2-4c80-811b-f869edf64d97.svg"
                />
              </div>
            </div>
          </div>
        </button>
      </div>
    </form>
  </>
);
