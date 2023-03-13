import { CartProps } from "@/types/carts";

const Nav: React.FC<CartProps> = ({ allCarts }: CartProps) => {
  return <nav>Hello Admin! There are {allCarts.length} carts</nav>;
};

export default Nav;
