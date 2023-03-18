import styles from "@/styles/Table.module.scss";
import { Cart, CartProps } from "@/types/carts";
import { useState } from "react";
import NewCartForm from "./NewCartForm";

const Table: React.FC<CartProps> = ({
  allCarts,
  setAllCarts,
  currentCart,
  setCurrentCart,
}) => {
  const [displayForm, setDisplayForm] = useState<boolean>(false);

  const changeCurrentCart = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.target! as HTMLElement;

    setCurrentCart!(allCarts[Number(event.parentElement!.id)]);
  };

  const deleteCurrentCart = () => {
    const index = allCarts.indexOf(currentCart!);

    if (currentCart!.id > 20) {
      allCarts[index].isDeleted = true;
      setAllCarts!(allCarts);
      setCurrentCart!(allCarts.find((cart) => !cart.isDeleted)!);
      return;
    }

    fetch(`https://dummyjson.com/carts/${currentCart?.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data: Cart) => {
        allCarts[index] = data;
        setAllCarts!(allCarts);
        setCurrentCart!(allCarts.find((cart) => !cart.isDeleted)!);
      });
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={deleteCurrentCart}>
        Delete Cart
      </button>

      <button className={styles.button} onClick={() => setDisplayForm(true)}>
        Add Cart
      </button>

      <table className={styles.table}>
        <thead>
          <tr className={styles.headRow}>
            <th>Cart ID</th>
            <th>User ID</th>
            <th>Number of products</th>
            <th>Total Cost</th>
          </tr>
        </thead>

        <tbody>
          {allCarts!.map((cart) => {
            if (cart.isDeleted) return;
            return (
              <tr
                key={allCarts.indexOf(cart)}
                id={`${allCarts.indexOf(cart)}`}
                className={`${styles.bodyRow} ${
                  currentCart == cart ? styles.currentCart : ""
                }`}
                onClick={changeCurrentCart}
              >
                <td>{cart.id}</td>
                <td>{cart.userId}</td>
                <td>{cart.totalProducts}</td>
                <td>{cart.total}$</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {displayForm && (
        <NewCartForm
          setDisplayForm={setDisplayForm}
          allCarts={allCarts}
          setAllCarts={setAllCarts!}
        />
      )}
    </div>
  );
};

export default Table;
