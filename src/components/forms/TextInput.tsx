import React, { useState } from "react";
import styles from "./styles/Form.module.scss";

export default function TextInput({
  placeholder,
  num,
  setValue,
  inputVal,
}: {
  placeholder: string;
  num: string;
  setValue: (val: string) => void;
  inputVal: string;
}) {
  const handleChange = ({ target: { value } }: any) => {
    const val = value.trim();
    setValue(val);
  };
  return (
    <div className={styles.dropDownMenu}>
      <div className={styles.rectangle518} />
      <div className={styles.labelTwo}>
        <input
          style={{ background: "transparent", border: "none" }}
          type="text"
          placeholder={placeholder}
          className={styles.label}
          onChange={(e) => handleChange(e)}
          value={inputVal}
        />
      </div>
    </div>
  );
}
