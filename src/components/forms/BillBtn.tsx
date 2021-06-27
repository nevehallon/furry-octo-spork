import React from "react";
import { GOP } from "../../interfaces/genericObjectProps";
import styles from "./styles/BillBtn.module.scss";

interface Props {
  billType: string;
  isSelected: boolean;
  setSelected: (val: GOP) => void;
}

export const BillBtn = ({ billType, isSelected, setSelected }: Props) => {
  return (
    <button
      className={`${styles.btnStatus} ${isSelected && styles.btnSelected} ${styles.btn}`}
      onClick={() => setSelected({ [billType]: !isSelected })}
    >
      {billType === "tv" ? "TV License" : billType}
    </button>
  );
};
