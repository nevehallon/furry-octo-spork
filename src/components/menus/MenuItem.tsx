import styles from "./styles/MenuItem.module.scss";

const MenuItem = ({
  text,
  bgColor,
}: {
  text: string;
  bgColor: string;
}): JSX.Element => (
  <div className={styles.menuItem}>
    <div className={styles.group13}>
      <div className={styles.frame4}>
        <div className={styles.active}>
          <div
            className={styles.ellipse66}
            style={{ backgroundColor: bgColor }}
          />
        </div>
      </div>
      <div className={styles.frame3}>
        <p className={styles.myProperties}>{text}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
