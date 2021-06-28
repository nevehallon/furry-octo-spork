import { GOP } from "../../interfaces/genericObjectProps";
import MenuItem from "./MenuItem";
import styles from "./styles/InnerSideMenu.module.scss";
import TableOfContents from "./TableOfContents";

const {
  innerSideMenu,
  collapsed,
  shrink,
  group446,
  frame2,
  pageTitle,
  menuItem,
  myProperties,
  ellipse68,
} = styles;

interface Props {
  hide: boolean;
  passThru: boolean;
}

export default ({ hide, passThru, currentStep }: Props & GOP): JSX.Element => {
  const hidden = hide && passThru;

  return (
    <div
      className={`${innerSideMenu} ${hidden && collapsed} ${hide && shrink}`}
    >
      <div className={group446}>
        <div className={frame2}>
          <p className={pageTitle}>Contract Builder</p>
        </div>
        <div className={menuItem}>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/c8c5b21a-eef7-4b6f-a46b-4438a69818bf.svg"
          />
          <span className={myProperties}>Create new tenancy contract</span>
          <div className={ellipse68} />
        </div>
        <MenuItem bgColor="#d78f24" text="Active tenancy contracts" />
        <MenuItem bgColor="#8f39b7" text="Draft tenancy contracts" />
        <MenuItem bgColor="#51b64f" text="Signed tenancy contracts" />
      </div>
      {!!currentStep && <TableOfContents />}
    </div>
  );
};
