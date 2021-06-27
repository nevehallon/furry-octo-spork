import React from "react";
import styles from "./styles/InnerSideMenu.module.scss";
import MenuItem from "./MenuItem";
import { GOP } from "../../interfaces/genericObjectProps";
import { TableOfContents } from "./TableOfContents";

interface Props {
  hide: boolean;
  passThru: boolean;
  setPassThru: (bool: boolean) => void;
}

export const InnerSideMenu = ({ hide, passThru, setPassThru, currentStep }: Props & GOP) => {
  const hidden = hide && passThru;

  return (
    <div className={[styles.innerSideMenu, hidden && styles.collapsed, hide && styles.shrink].join(" ")}>
      <div className={styles.group446}>
        <div className={styles.frame2}>
          <p className={styles.pageTitle}>Contract Builder</p>
        </div>
        <div className={styles.menuItem}>
          <img alt="" src="https://static.overlay-tech.com/assets/c8c5b21a-eef7-4b6f-a46b-4438a69818bf.svg" />
          <span className={styles.myProperties}>Create new tenancy contract</span>
          <div className={styles.ellipse68} />
        </div>
        <MenuItem text="Active tenancy contracts" bgColor="#d78f24" />
        <MenuItem text="Draft tenancy contracts" bgColor="#8f39b7" />
        <MenuItem text="Signed tenancy contracts" bgColor="#51b64f" />
      </div>
      {!!currentStep && <TableOfContents />}
    </div>
  );
};
