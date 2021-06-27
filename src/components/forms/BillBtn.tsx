import { GOP } from "../../interfaces/genericObjectProps";
import styles from "./styles/BillBtn.module.scss";

const { btnStatus, btnSelected, btn } = styles;

interface Props {
  billType: string;
  isSelected: boolean;
  setSelected: (val: GOP) => void;
}

export default ({ billType, isSelected, setSelected }: Props): JSX.Element => (
  <button
    className={`${btnStatus} ${isSelected && btnSelected} ${btn}`}
    onClick={() => setSelected({ [billType]: !isSelected })}
    type="button"
  >
    {billType === "tv" ? "TV License" : billType}
  </button>
);
