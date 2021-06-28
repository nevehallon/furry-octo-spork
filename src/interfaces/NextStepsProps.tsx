import { GOP } from "./genericObjectProps";

export interface NextStepsProps {
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
