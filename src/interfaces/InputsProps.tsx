import { FormEvent } from "react";

export interface Props {
  error: string;
  handleSubmit: (e: FormEvent) => void;
  fName: string;
  setFName: (val: string) => void;
  mName: string;
  setMName: (val: string) => void;
  lName: string;
  setLName: (val: string) => void;
  compName: string;
  setCompName: (val: string) => void;
}
