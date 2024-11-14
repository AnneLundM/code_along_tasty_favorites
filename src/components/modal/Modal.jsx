import styles from "./modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.content}>
        <button onClick={onClose}>Luk</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
