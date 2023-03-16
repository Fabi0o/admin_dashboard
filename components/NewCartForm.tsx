import styles from "@/styles/NewCartForm.module.scss";
import { useEffect } from "react";

interface Props {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewCartForm: React.FC<Props> = ({ setDisplayForm }) => {
  const chart = document.querySelector(".recharts-wrapper");
  let container: HTMLElement;

  useEffect(() => {
    container = document.querySelector(`.${styles.container}`)!;
    chart?.classList.add(`${styles.isHidden}`);
  });

  const closeForm = () => {
    chart?.classList.remove(`${styles.isHidden}`);
    setDisplayForm(false);
  };

  return (
    <div
      className={styles.container}
      onClick={(e) => {
        if (e.target == container) closeForm();
      }}
    >
      <form className={styles.form}>
        <div className={styles.closeButton}>
          <button onClick={closeForm}>X</button>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="userID">User ID</label>
          <input type="number" id="userID" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="productID">Product ID</label>
          <input type="number" />
        </div>
        <button type="button" className={styles.actionButton}>
          Add Product
        </button>
        <button type="submit" className={styles.actionButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCartForm;
