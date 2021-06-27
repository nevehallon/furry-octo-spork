/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-children-prop */

import Image from "../common/Image";
import styles from "./styles/SideMenu.module.scss";

const { sideMenu, collapsed, shrink, icon, btnContainer, selected, bottomBox, collapseBtn } = styles;

interface Props {
  hide: boolean;
  passThru: boolean;
  setPassThru: (bool: boolean) => void;
}

export default ({ hide, passThru, setPassThru }: Props): JSX.Element => {
  const hidden = hide && passThru;
  return (
    <div className={[sideMenu, hidden && collapsed, hide && shrink].join(" ")}>
      <div className={icon}>
        <img alt="" src="https://static.overlay-tech.com/assets/75f7c1aa-f1dd-4146-9f3d-f472a5ee6f29.svg" />
      </div>

      <div className={btnContainer}>
        <div>
          <Image
            alt="icon"
            children={[
              <p className="bottomText" key="p">
                OmniCheck
              </p>,
            ]}
            cName="marketplaceButton"
            cName2="group"
            imgClass="vector2"
            src="https://static.overlay-tech.com/assets/442dd0e5-ed4d-493e-97bd-29b08825da4b.svg"
          />
        </div>
        <div className={selected}>
          <Image
            alt="icon"
            children={[
              <p className="bottomText" key="p">
                Contract Builder
              </p>,
            ]}
            cName="marketplaceButtonTwo "
            cName2="group"
            imgClass="vector2"
            src="https://static.overlay-tech.com/assets/6b17bd3b-e5cd-47c4-8480-d33d4bb74850.svg"
          />
        </div>
        <div>
          <Image
            alt="icon"
            children={[
              <p className="bottomText" key="p">
                OmniNews
              </p>,
            ]}
            cName="marketplaceButtonThree "
            cName2="group"
            imgClass="vector2"
            src="https://static.overlay-tech.com/assets/5ae0c1dc-5fe3-4e91-888b-a40fa8c2ff56.svg"
          />
        </div>
        <div>
          <Image
            alt="icon"
            children={[
              <p className="bottomText" key="p">
                OmniScan
              </p>,
            ]}
            cName="marketplaceButtonThree "
            cName2="group"
            imgClass="vector2"
            src="https://static.overlay-tech.com/assets/b2591967-e124-480e-bf0e-8930f53dfc10.svg"
          />
        </div>
      </div>
      <div className={bottomBox}>
        <Image alt="icon" src="https://static.overlay-tech.com/assets/ca9201fa-5b25-4bfc-8f16-30ef8cf37247.svg" />
        {hide && (
          <button className={collapseBtn} onClick={() => setPassThru(!passThru)} type="button">
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
