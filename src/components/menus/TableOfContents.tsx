/* eslint-disable react/no-array-index-key */
import styles from "./styles/TableOfContents.module.scss";

export default (): JSX.Element => (
  <div className={`${styles.top}`}>
    <div className={styles.divider} />
    <div>
      <div className={`${styles.container} ${styles.scrollbar}`}>
        <p className={styles.tableOfContents}>Table of Contents</p>
        {Array(10)
          .fill("")
          .map((x, i) => (
            <div className={styles.group} key={i}>
              <p className={styles.sectionTOC}>
                Section {i + 1}: Table of Contents
              </p>
              <p className={styles.text}>{i + 1}.1: Part A</p>
              <p className={styles.text}>{i + 1}.2: Part B</p>
              <p className={styles.text}>{i + 1}.3: Part C</p>
              <p className={styles.text}>{i + 1}.4: Part D</p>
            </div>
          ))}
      </div>
    </div>
  </div>
);
