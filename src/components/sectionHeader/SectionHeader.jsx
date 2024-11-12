import styles from "./sectionHeader.module.css";

const SectionHeader = ({ title }) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
    </header>
  );
};

export default SectionHeader;
