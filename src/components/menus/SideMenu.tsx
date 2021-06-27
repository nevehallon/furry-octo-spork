import React, { useState } from "react";
import styles from "./styles/SideMenu.module.scss";

interface Props {
  hide: boolean;
  passThru: boolean;
  setPassThru: (bool: boolean) => void;
}

export const SideMenu = ({ hide, passThru, setPassThru }: Props) => {
  const hidden = hide && passThru;
  return (
    <div className={[styles.sideMenu, hidden && styles.collapsed, hide && styles.shrink].join(" ")}>
      <div className={styles.icon}>
        <img alt="" src="https://static.overlay-tech.com/assets/75f7c1aa-f1dd-4146-9f3d-f472a5ee6f29.svg" />
      </div>

      <div className={styles.btnContainer}>
        <div>
          <div className={styles.marketplaceButton}>
            <div className={styles.group}>
              <img
                className={styles.vector}
                alt=""
                src="https://static.overlay-tech.com/assets/442dd0e5-ed4d-493e-97bd-29b08825da4b.svg"
              />
            </div>
          </div>
          <p className={styles.bottomText}>OmniCheck</p>
        </div>
        <div>
          <div className={styles.marketplaceButtonTwo}>
            <div className={styles.group}>
              <img
                className={styles.vector}
                alt=""
                src="https://static.overlay-tech.com/assets/6b17bd3b-e5cd-47c4-8480-d33d4bb74850.svg"
              />
            </div>
          </div>
          <p className={styles.bottomText}>Contract Builder</p>
        </div>
        <div>
          <div className={styles.marketplaceButtonThree}>
            <div className={styles.group}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/5ae0c1dc-5fe3-4e91-888b-a40fa8c2ff56.svg"
              />
            </div>
          </div>
          <p className={styles.bottomText}>OmniNews</p>
        </div>
        <div>
          <div className={styles.marketplaceButtonThree}>
            <div className={styles.group}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/b2591967-e124-480e-bf0e-8930f53dfc10.svg"
              />
            </div>
          </div>
          <p className={styles.bottomText}>OmniScan</p>
        </div>
      </div>
      <div className={styles.bottomBox}>
        <img
          alt=""
          className={styles.homeButtonIcon}
          src="https://static.overlay-tech.com/assets/ca9201fa-5b25-4bfc-8f16-30ef8cf37247.svg"
        />
        {hide && (
          <button className={styles.collapseBtn} onClick={() => setPassThru(!passThru)}>
            <img
              alt=""
              className={styles.btnImg + " " + (!hidden && styles.flip)}
              src="https://static.overlay-tech.com/assets/5348597a-95a2-4c80-811b-f869edf64d97.svg"
            ></img>
          </button>
        )}
      </div>
    </div>
  );
};
