import styles from "@/styles/Table.module.scss";
import { CartProps } from "@/types/carts";

const Table: React.FC<CartProps> = ({
  allCarts,
  currentCart,
  setCurrentCart,
}: CartProps) => {
  const changeCurrentCart = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.target! as HTMLElement;

    setCurrentCart!(allCarts[Number(event.parentElement!.id)]);
  };

  return (
    <div className={styles.container}>
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
