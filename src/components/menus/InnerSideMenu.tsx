import { GOP } from "../../interfaces/genericObjectProps";
import MenuItem from "./MenuItem";
import styles from "./styles/InnerSideMenu.module.scss";
import TableOfContents from "./TableOfContents";

interface Props {
  hide: boolean;
  passThru: boolean;
}

export default ({ hide, passThru, currentStep }: Props & GOP): JSX.Element => {
  const hidden = hide && passThru;

  return (
    <div
      className={[
        styles.innerSideMenu,
        hidden && styles.collapsed,
        hide && styles.shrink,
      ].join(" ")}
    >
      <div className={styles.group446}>
        <div className={styles.frame2}>
          <p className={styles.pageTitle}>Contract Builder</p>
        </div>
        <div className={styles.menuItem}>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/c8c5b21a-eef7-4b6f-a46b-4438a69818bf.svg"
          />
          <span className={styles.myProperties}>
            Create new tenancy contract
          </span>
          <div className={styles.ellipse68} />
        </div>
        <MenuItem bgColor="#d78f24" text="Active tenancy contracts" />
        <MenuItem bgColor="#8f39b7" text="Draft tenancy contracts" />
        <MenuItem bgColor="#51b64f" text="Signed tenancy contracts" />
      </div>
      {!!currentStep && <TableOfContents />}
    </div>
  );
};
