import { CartProps } from "@/types/carts";
import styles from "@/styles/Header.module.scss";

const Header: React.FC<CartProps> = ({ allCarts }) => {
  return (
    <header className={styles.header}>
      {allCarts.length > 1 && (
        <h1>
          Hello Admin! There are{" "}
          {allCarts.filter((cart) => !cart.isDeleted).length} carts
        </h1>
      )}
      {allCarts.length == 1 && <h1>Hello Admin! There is 1 cart</h1>}
      {!allCarts[0] && <h1>Hello Admin! There are 0 carts</h1>}
    </header>
  );
};

export default Header;
