import styles from "@/styles/Chart.module.scss";
import { CurrentCartProps } from "@/types/carts";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Chart: React.FC<CurrentCartProps> = ({ currentCart }) => {
  const data = [
    {
      name: `${currentCart.products[0].id}`,
      RegularPrice: currentCart.products[0].price,
      DiscountedPrice:
        currentCart.products[0].discountedPrice /
        currentCart.products[0].quantity,
      amt: 2400,
    },
    {
      name: `${currentCart.products[1].id}`,
      RegularPrice: currentCart.products[1].price,
      DiscountedPrice:
        currentCart.products[1].discountedPrice /
        currentCart.products[1].quantity,
      amt: 2400,
    },
    {
      name: `${currentCart.products[2].id}`,
      RegularPrice: currentCart.products[2].price,
      DiscountedPrice:
        currentCart.products[2].discountedPrice /
        currentCart.products[2].quantity,
      amt: 2400,
    },
    {
      name: `${currentCart.products[3].id}`,
      RegularPrice: currentCart.products[3].price,
      DiscountedPrice:
        currentCart.products[3].discountedPrice /
        currentCart.products[3].quantity,
      amt: 2400,
    },
    {
      name: `${currentCart.products[4].id}`,
      RegularPrice: currentCart.products[4].price,
      DiscountedPrice:
        currentCart.products[4].discountedPrice /
        currentCart.products[4].quantity,
      amt: 2400,
    },
  ];

  return (
    <div className={styles.container}>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="RegularPrice" stroke="#8884d8" />
        <Line type="monotone" dataKey="DiscountedPrice" stroke="#37ff2c" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Chart;
