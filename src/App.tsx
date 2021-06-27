import React, { useEffect, useState } from "react";
import styles from "./styles/App.module.scss";
import { SideMenu } from "./components/menus/SideMenu";
import { InnerSideMenu } from "./components/menus/InnerSideMenu";
import { CenterContainer } from "./components/CenterContainer";
import { Size, useWindowSize } from "./hooks/useWindowSize";

import { useLocation } from "react-router-dom";

function App() {
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
  }, [width, currentStep]);

  return (
    <div className={styles.App}>
      <div className={[styles.menuContainer, hide && styles.collapsed].join(" ")}>
        <SideMenu passThru={passThru} setPassThru={(bool: boolean) => setPassThru(bool)} hide={addClass} />
        <InnerSideMenu
          {...{ currentStep, setStep }}
          passThru={passThru}
          setPassThru={(bool: boolean) => setPassThru(bool)}
          hide={addClass}
        />
      </div>
      <CenterContainer {...{ currentStep, setStep }} />
    </div>
  );
}

export default App;
