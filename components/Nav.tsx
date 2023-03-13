import { Cart } from "@/types/carts";

interface Props {
  allCarts: Cart[];
}

const Nav: React.FC<Props> = ({ allCarts }: Props) => {
  return <nav>Hello Admin! There are {allCarts.length} carts</nav>;
};

export default Nav;
