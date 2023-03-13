import styles from "@/styles/Table.module.scss";
import { CartProps } from "@/types/carts";

const Table: React.FC<CartProps> = ({ allCarts }: CartProps) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tr className={styles.headRow}>
          <th>Cart ID</th>
          <th>User ID</th>
          <th>Number of products</th>
          <th>Total Cost</th>
        </tr>
        {allCarts.map((cart) => {
          return (
            <tr key={cart.id} className={styles.bodyRow}>
              <td>{cart.id}</td>
              <td>{cart.userId}</td>
              <td>{cart.totalProducts}</td>
              <td>{cart.total}$</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
