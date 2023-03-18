import styles from "@/styles/NewCartForm.module.scss";
import { Cart } from "@/types/carts";
import { useEffect, useState } from "react";

interface Props {
  setDisplayForm: React.Dispatch<React.SetStateAction<boolean>>;
  allCarts: Cart[];
  setAllCarts: React.Dispatch<React.SetStateAction<Cart[]>>;
}

const NewCartForm: React.FC<Props> = ({
  setDisplayForm,
  allCarts,
  setAllCarts,
}) => {
  const chart = document.querySelector(".recharts-wrapper");
  let container: HTMLElement;

  const [userID, setUserID] = useState<number>();
  const [productID, setProductID] = useState<number>();
  const [products, setProducts] = useState<number[]>([]);

  useEffect(() => {
    container = document.querySelector(`.${styles.container}`)!;
    chart?.classList.add(`${styles.isHidden}`);
  });

  const closeForm = () => {
    chart?.classList.remove(`${styles.isHidden}`);
    setDisplayForm(false);
  };

  const addProducts = () => {
    const error = document.querySelector("#errorMess")!;
    const input = document.querySelector("#productID") as HTMLInputElement;

    if (!productID) {
      error.textContent = "Fill product ID field!";
      return;
    }
    if (products.includes(productID)) {
      error.textContent = "You can't add the same product twice!";
      return;
    }
    if (products.length >= 5) {
      error.textContent = "You can't add more than 5 products to 1 cart!";
      input.value = "";
      input.disabled = true;
      return;
    }

    if (error.textContent) error.textContent = "";
    setProducts(products ? [...products!, productID] : [productID]);
    setProductID(undefined);

    input.value = "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!products[0]) {
      document.querySelector("#errorMess")!.textContent =
        "You can't add empty cart!";
      return;
    }

    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userID,
        products: products.map((product) => {
          return {
            id: product,
            quantity: 1,
          };
        }),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.id = allCarts.length + 1;
        console.log(data);
        allCarts ? setAllCarts([...allCarts, data]) : setAllCarts([data]);
        closeForm();
      });
  };

  return (
    <div
      className={styles.container}
      onClick={(e) => {
        if (e.target == container) closeForm();
      }}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.closeButton}>
          <button onClick={closeForm}>X</button>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="userID">User ID</label>
          <input
            type="number"
            id="userID"
            onChange={(e) => {
              if (Number(e.target.value) < 0) e.target.value = "0";
              if (Number(e.target.value) > 100) e.target.value = "100";

              setUserID(Number(e.target.value));
            }}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="productID">Product ID</label>
          <input
            type="number"
            id="productID"
            onChange={(e) => {
              if (Number(e.target.value) < 0) e.target.value = "0";
              if (Number(e.target.value) > 100) e.target.value = "100";

              setProductID(Number(e.target.value));
            }}
          />
          <div id="errorMess" className={styles.error}></div>
        </div>

        {products && (
          <div>
            {products.map((product) => (
              <div key={products.indexOf(product)}>
                Product {products.indexOf(product) + 1}: ID {product}
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          className={styles.actionButton}
          onClick={addProducts}
        >
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
