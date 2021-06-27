import styles from "./styles/Form.module.scss";

const { dropDownMenu, rectangle518, labelTwo, label } = styles;

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
    <div className={dropDownMenu}>
      <div className={rectangle518} />
      <div className={labelTwo}>
        <input
          className={label}
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
