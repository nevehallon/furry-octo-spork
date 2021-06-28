/* eslint-disable no-alert */
import { FormEvent, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { GOP } from "../../interfaces/genericObjectProps";
import ExtendedForm from "./ExtendedForm";
import FormInputs from "./FormInputs";
import NextStep from "./NextStep";
import styles from "./styles/Form.module.scss";

const { topWrapper, formContainer, nextPart, nextPart2, btn, vectorTwo } =
  styles;

export default ({ currentStep }: GOP): JSX.Element => {
  const { push } = useHistory();
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [compName, setCompName] = useState("");
  const [highlighted, setHL] = useState(false);
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

  useEffect(
    () => () => {
      setError("");
    },
    [currentStep]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (fName && mName && lName && compName && push("/step")) ||
      setError("Please fill out all fields to proceed.");
  };
  const handleSet = (val: GOP) => {
    setBillState({ ...billState, ...val });
  };

  const stepZero = !currentStep;
  const stepOne = currentStep === 1;
  const stepTwo = currentStep > 1;

  return (
    <div
      className={`${topWrapper} ${stepOne && nextPart} ${stepTwo && nextPart2}`}
    >
      <div
        className={`${formContainer} ${currentStep && nextPart} ${
          stepTwo && nextPart2
        }`}
      >
        {stepZero && (
          <FormInputs
            {...{
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
            }}
          />
        )}

        {!stepZero && (
          <NextStep
            formData={{ fName, mName, lName, compName }}
            setStep={(val: number) =>
              push(!val ? "/" : `/step${val > 1 && "2"}`)
            }
            {...{ billState, setHL, billEl, currentStep }}
          />
        )}
      </div>

      {stepTwo && (
        <button
          className={`${styles["btn-danger"]} ${btn}`}
          onClick={() => alert("Thank you!")}
          type="button"
        >
          Confirm Contract
          <img
            alt=""
            className={vectorTwo}
            src="https://static.overlay-tech.com/assets/34ffbf7b-cbc6-4af9-8f8a-b266b23ef2c1.svg"
          />
        </button>
      )}

      {stepOne && (
        <ExtendedForm
          {...{
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
          }}
        />
      )}
    </div>
  );
};
