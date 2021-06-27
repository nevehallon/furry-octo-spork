import React from "react";
import styles from "./styles/TableOfContents.module.scss";

interface Props {}

export const TableOfContents = (props: Props) => {
  return (
    <div className={`${styles.top}`}>
      <div className={styles.divider}></div>
      <div>
        <div className={`${styles.container} ${styles.scrollbar}`}>
          <p className={styles.tableOfContents}>Table of Contents</p>
          {Array(10)
            .fill("")
            .map((x, i) => {
              return (
                <div key={i} className={styles.group}>
                  <p className={styles.sectionTOC}>Section {i + 1}: Table of Contents</p>
                  <p className={styles.text}>{i + 1}.1: Part A</p>
                  <p className={styles.text}>{i + 1}.2: Part B</p>
                  <p className={styles.text}>{i + 1}.3: Part C</p>
                  <p className={styles.text}>{i + 1}.4: Part D</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
