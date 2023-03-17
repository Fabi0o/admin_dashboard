import { CartProps } from "@/types/carts";

const Header: React.FC<CartProps> = ({ allCarts }) => {
  return (
    <header>
      <h1>Hello Admin! There are {allCarts.length} carts</h1>
    </header>
  );
};

export default Header;
