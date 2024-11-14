import styles from "./button.module.css";

const Button = ({ buttonText, onClick, className, type = "button" }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}>
      {buttonText}
    </button>
  );
};

export default Button;
