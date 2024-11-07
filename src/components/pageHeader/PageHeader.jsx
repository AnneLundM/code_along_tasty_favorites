import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subTitle, headerImg }) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}>
      <h1>{title}</h1>
      {subTitle && <h4>{subTitle}</h4>}
    </header>
  );
};

export default PageHeader;
