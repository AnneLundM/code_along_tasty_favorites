import { useState } from "react";
import styles from "./newsletter.module.css";
import Modal from "../modal/Modal";
import Loading from "../loading/Loading";
import Button from "../button/Button";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api-medieskolerne.vercel.app/emails",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: inputValue }),
        }
      );
      const result = await response.json();
      console.log(result);
      openModal();
      setInputValue("");
      setIsLoading(false);
    } catch (error) {
      console.error("Fejl ved tilmelding:", error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Din email:</label>
          <input
            type='email'
            value={inputValue}
            onChange={handleInputChange}
            required
          />
          <Button buttonText='Tilmeld' type='submit' />
        </form>
      )}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Tak for din tilmelding!</h2>
          <p>Vi sender dig en bekræftelsesmail på {inputValue}</p>
        </Modal>
      )}
    </>
  );
};

export default Newsletter;