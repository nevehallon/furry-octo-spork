import styles from "./styles/Form.module.scss";

export default function TextInput({
  placeholder,
  setValue,
  inputVal,
}: {
  placeholder: string;
  setValue: (val: string) => void;
  inputVal: string;
}): JSX.Element {
  const handleChange = ({ target: { value } }: any) => {
    const val = value.trim();
    setValue(val);
  };
  return (
    <div className={styles.dropDownMenu}>
      <div className={styles.rectangle518} />
      <div className={styles.labelTwo}>
        <input
          className={styles.label}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          style={{ background: "transparent", border: "none" }}
          type="text"
          value={inputVal}
        />
      </div>
    </div>
  );
}
