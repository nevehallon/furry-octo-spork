/* eslint-disable react/no-children-prop */
import Image from "../common/Image";
import styles from "./styles/SideMenu.module.scss";

interface Props {
  hide: boolean;
  passThru: boolean;
  setPassThru: (bool: boolean) => void;
}

export default ({ hide, passThru, setPassThru }: Props): JSX.Element => {
  const hidden = hide && passThru;
  return (
    <div className={[styles.sideMenu, hidden && styles.collapsed, hide && styles.shrink].join(" ")}>
      <div className={styles.icon}>
        <img alt="" src="https://static.overlay-tech.com/assets/75f7c1aa-f1dd-4146-9f3d-f472a5ee6f29.svg" />
      </div>

      <div className={styles.btnContainer}>
        <div>
          <Image
            {...{
              alt: "icon",
              cName: "marketplaceButton",
              cName2: "group",
              imgClass: "vector2",
              src: "https://static.overlay-tech.com/assets/442dd0e5-ed4d-493e-97bd-29b08825da4b.svg",
            }}
            children={[<p className="bottomText">OmniCheck</p>]}
          />
        </div>
        <div className={styles.selected}>
          <Image
            {...{
              alt: "icon",
              cName: "marketplaceButtonTwo ",
              cName2: "group",
              imgClass: "vector2",
              src: "https://static.overlay-tech.com/assets/6b17bd3b-e5cd-47c4-8480-d33d4bb74850.svg",
            }}
            children={[<p className="bottomText">Contract Builder</p>]}
          />
        </div>
        <div>
          <Image
            {...{
              alt: "icon",
              cName: "marketplaceButtonThree ",
              cName2: "group",
              imgClass: "vector2",
              src: "https://static.overlay-tech.com/assets/5ae0c1dc-5fe3-4e91-888b-a40fa8c2ff56.svg",
            }}
            children={[<p className="bottomText">OmniNews</p>]}
          />
        </div>
        <div>
          <Image
            {...{
              alt: "icon",
              cName: "marketplaceButtonThree ",
              cName2: "group",
              imgClass: "vector2",
              src: "https://static.overlay-tech.com/assets/b2591967-e124-480e-bf0e-8930f53dfc10.svg",
            }}
            children={[<p className="bottomText">OmniScan</p>]}
          />
        </div>
      </div>
      <div className={styles.bottomBox}>
        <Image alt="icon" src="https://static.overlay-tech.com/assets/ca9201fa-5b25-4bfc-8f16-30ef8cf37247.svg" />
        {hide && (
          <button className={styles.collapseBtn} onClick={() => setPassThru(!passThru)} type="button">
            <Image
              alt="icon"
              imgClass={`btnImg ${!hidden && "flip"}`}
              src="https://static.overlay-tech.com/assets/5348597a-95a2-4c80-811b-f869edf64d97.svg"
            />
          </button>
        )}
      </div>
    </div>
  );
};
