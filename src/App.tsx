/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import CenterContainer from "./components/CenterContainer";
import InnerSideMenu from "./components/menus/InnerSideMenu";
import SideMenu from "./components/menus/SideMenu";
import { Size, useWindowSize } from "./hooks/useWindowSize";
import styles from "./styles/App.module.scss";

function App(): JSX.Element {
  const { width }: { width: Size["width"] } = useWindowSize();
  const hide = (width || 0) < 340 + 416;
  const [addClass, setAddClass] = useState(hide);
  const [passThru, setPassThru] = useState(true);
  const [currentStep, setStep] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => (pathname === "/" ? setStep(0) : pathname === "/step" ? setStep(1) : setStep(2)), [pathname]);

  useEffect(() => {
    if (hide) {
      setAddClass(hide);
    } else {
      setAddClass(hide);
    }
  }, [width, currentStep, hide]);

  return (
    <div className={styles.App}>
      <div className={[styles.menuContainer, hide && styles.collapsed].join(" ")}>
        <SideMenu hide={addClass} passThru={passThru} setPassThru={(bool: boolean) => setPassThru(bool)} />
        <InnerSideMenu
          {...{ currentStep, setStep }}
          hide={addClass}
          passThru={passThru}
          setPassThru={(bool: boolean) => setPassThru(bool)}
        />
      </div>
      <CenterContainer {...{ currentStep, setStep }} />
    </div>
  );
}

export default App;
