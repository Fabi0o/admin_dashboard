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
        <button onClick={closeForm}>X</button>
        <label htmlFor="userID">User ID</label>
        <input type="number" id="userID" />
        <label htmlFor="productID">Product ID</label>
        <input type="number" />
        <button type="button">Add Product</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCartForm;
