import { CartProps } from "@/types/carts";
import styles from "@/styles/Header.module.scss";

const Header: React.FC<CartProps> = ({ allCarts }) => {
  return (
    <header className={styles.header}>
      <h1>Hello Admin! There are {allCarts.length} carts</h1>
    </header>
  );
};

export default Header;
