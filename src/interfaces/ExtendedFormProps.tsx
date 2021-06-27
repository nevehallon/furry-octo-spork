import { GOP } from "./genericObjectProps";

export interface Props {
  currentStep: number;
  highlighted: boolean;
  stepTwo: boolean;
  billEl: React.MutableRefObject<any>;
  electric: boolean;
  handleSet: (val: GOP) => void;
  gas: boolean;
  water: boolean;
  internet: boolean;
  tv: boolean;
  other: boolean;
  push: { (location: string): void };
}
