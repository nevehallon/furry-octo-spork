/* eslint-disable react/no-array-index-key */
import styles from "./styles/TableOfContents.module.scss";

const {
  top,
  divider,
  container,
  scrollbar,
  tableOfContents,
  group,
  sectionTOC,
  text,
} = styles;

export default (): JSX.Element => (
  <div className={`${top}`}>
    <div className={divider} />
    <div>
      <div className={`${container} ${scrollbar}`}>
        <p className={tableOfContents}>Table of Contents</p>
        {Array(10)
          .fill("")
          .map((x, i) => (
            <div className={group} key={i}>
              <p className={sectionTOC}>Section {i + 1}: Table of Contents</p>
              <p className={text}>{i + 1}.1: Part A</p>
              <p className={text}>{i + 1}.2: Part B</p>
              <p className={text}>{i + 1}.3: Part C</p>
              <p className={text}>{i + 1}.4: Part D</p>
            </div>
          ))}
      </div>
    </div>
  </div>
);
