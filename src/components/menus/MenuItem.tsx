import styles from "./styles/MenuItem.module.scss";

const { menuItem, group13, frame4, active, ellipse66, frame3, myProperties } =
  styles;

const MenuItem = ({
  text,
  bgColor,
}: {
  text: string;
  bgColor: string;
}): JSX.Element => (
  <div className={menuItem}>
    <div className={group13}>
      <div className={frame4}>
        <div className={active}>
          <div className={ellipse66} style={{ backgroundColor: bgColor }} />
        </div>
      </div>
      <div className={frame3}>
        <p className={myProperties}>{text}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
