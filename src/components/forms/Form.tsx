import {
  FormEvent,
  FormEventHandler,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./styles/Form.module.scss";
import TextInput from "./TextInput";
import { NextStep } from "./NextStep";
import BillBtn from "./BillBtn";
import { GOP } from "../../interfaces/genericObjectProps";
import { useHistory } from "react-router-dom";

interface Props {}

const DEV_VAR = false;

export const Form = ({ currentStep, setStep }: Props & GOP) => {
  const { push } = useHistory();
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [compName, setCompName] = useState("");
  const [highlight, setHL] = useState(false);
  const [billState, setBillState] = useState({
    electric: false,
    gas: true,
    water: false,
    internet: true,
    tv: false,
    other: false,
  });

  const { electric, gas, water, internet, tv, other } = billState;

  const [error, setError] = useState("");

  const billEl = useRef<any>(null);

  useEffect(() => {
    return () => {
      setError("");
    };
  }, [currentStep]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    (fName && mName && lName && compName && push("/step")) ||
      setError("Please fill out all fields to proceed.");
  };
  const handleSet = (val: GOP) => {
    setBillState({ ...billState, ...val });
  };

  return (
    <div
      className={`${styles.topWrapper} ${
        (currentStep === 1 || DEV_VAR) && styles.nextPart
      } ${(currentStep > 1 || DEV_VAR) && styles.nextPart2}`}
    >
      <div
        className={`${styles.formContainer} ${
          (currentStep || DEV_VAR) && styles.nextPart
        } ${(currentStep > 1 || DEV_VAR) && styles.nextPart2}`}
      >
        {!currentStep && !DEV_VAR && (
          <>
            <div className={styles.trackerPc}>
              <div className={styles.frame224}>
                <div className={styles.rectangle254} />
              </div>
            </div>
            <div className={styles.frame480}>
              <p className={styles.p}>
                Enter your full name and/or the company name that the tenant(s)
                is entering the agreement with
              </p>
            </div>
            {error && (
              <span
                style={{ color: "red", textAlign: "center", fontSize: "26px" }}
              >
                *{error}*
              </span>
            )}

            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <TextInput
                inputVal={fName}
                setValue={(val: string) => setFName(val)}
                placeholder="First name"
              />
              <TextInput
                inputVal={mName}
                setValue={(val: string) => setMName(val)}
                placeholder="Middle name(s)"
              />
              <TextInput
                inputVal={lName}
                setValue={(val: string) => setLName(val)}
                placeholder="Surname"
              />
              <TextInput
                inputVal={compName}
                setValue={(val: string) => setCompName(val)}
                placeholder="Company name"
              />

              <div className={styles.btnContainer}>
                <button className={styles.nextButtonTwo}>
                  <div className={styles.nextButton}>
                    <div className={styles.frame12}>
                      <p className={styles.next}>NEXT</p>
                    </div>
                    <div className={styles.frame13}>
                      <div className={styles.nextTwo}>
                        <img
                          alt=""
                          className={styles.vector}
                          src="https://static.overlay-tech.com/assets/5348597a-95a2-4c80-811b-f869edf64d97.svg"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </>
        )}
        {!!currentStep && !DEV_VAR && (
          <NextStep
            setStep={(val: number) => push(val > 1 ? "/step2" : "step")}
            formData={{ fName, mName, lName, compName }}
            {...{ billState, setHL, billEl, currentStep }}
          />
        )}
      </div>
      {currentStep > 1 && (
        <button
          className={`${styles["btn-danger"]} ${styles.btn}`}
          onClick={() => alert("Thank you!")}
        >
          Confirm Contract
          <img
            alt=""
            className={styles.vectorTwo}
            src="https://static.overlay-tech.com/assets/34ffbf7b-cbc6-4af9-8f8a-b266b23ef2c1.svg"
          />
        </button>
      )}
      {currentStep === 1 && !DEV_VAR && (
        <div className={styles.extendedForm}>
          <div
            className={`${styles.formContainer} ${styles.formContainer2} ${
              (!!currentStep || DEV_VAR) && styles.nextPart
            } ${highlight && styles.highlight}`}
          >
            <h3
              ref={billEl}
              className={`${styles.header} ${
                highlight && styles["highlight-text"]
              }`}
            >
              Which bills are included?
            </h3>
            <BillBtn
              billType={"electric"}
              setSelected={(val: GOP) => handleSet(val)}
              isSelected={electric}
            />
            <BillBtn
              billType={"gas"}
              setSelected={(val: GOP) => handleSet(val)}
              isSelected={gas}
            />
            <BillBtn
              billType={"water"}
              setSelected={(val: GOP) => handleSet(val)}
              isSelected={water}
            />
            <BillBtn
              billType={"internet"}
              setSelected={(val: GOP) => handleSet(val)}
              isSelected={internet}
            />
            <BillBtn
              billType={"tv"}
              setSelected={(val: GOP) => handleSet(val)}
              isSelected={tv}
            />
            <BillBtn
              billType={"other"}
              setSelected={(val: GOP) => handleSet(val)}
              isSelected={other}
            />
          </div>
          <button
            className={`${styles["btn-danger"]} ${styles.btn}`}
            onClick={() => push("/step2")}
          >
            <span>Sign and Send Contract to Tenant(s)</span>
            <img
              alt=""
              className={styles.vectorTwo}
              src="https://static.overlay-tech.com/assets/34ffbf7b-cbc6-4af9-8f8a-b266b23ef2c1.svg"
            />
          </button>
        </div>
      )}
    </div>
  );
};
