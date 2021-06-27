import { GOP } from "../../interfaces/genericObjectProps";
import styles from "./styles/BillBtn.module.scss";

interface Props {
  billType: string;
  isSelected: boolean;
  setSelected: (val: GOP) => void;
}

export default ({ billType, isSelected, setSelected }: Props): JSX.Element => (
  <button
    className={`${styles.btnStatus} ${isSelected && styles.btnSelected} ${
      styles.btn
    }`}
    onClick={() => setSelected({ [billType]: !isSelected })}
    type="button"
  >
    {billType === "tv" ? "TV License" : billType}
  </button>
);
