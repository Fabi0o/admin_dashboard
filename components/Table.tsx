import styles from "@/styles/Table.module.scss";
import { CartProps } from "@/types/carts";

const Table: React.FC<CartProps> = ({
  allCarts,
  setAllCarts,
  currentCart,
  setCurrentCart,
}) => {
  const changeCurrentCart = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.target! as HTMLElement;

    setCurrentCart!(allCarts[Number(event.parentElement!.id)]);
  };

  const deleteCurrentCart = () => {
    const index = allCarts.indexOf(currentCart!);
    allCarts.splice(index, 1);
    setAllCarts!(allCarts);
    setCurrentCart!(allCarts[0]);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={deleteCurrentCart}>
        Delete Cart
      </button>
      <button className={styles.button}>Add Cart</button>

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
            return (
              <tr
                key={cart.id}
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
    </div>
  );
};

export default Table;
