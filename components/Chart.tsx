import styles from "@/styles/Chart.module.scss";
import { CurrentCartProps } from "@/types/carts";
import ChartData from "@/types/chartData";
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
  const data = currentCart.products.map((data) => {
    let newdata = new ChartData(
      `Product ID ${data.id}`,
      data.price,
      Math.floor((data.discountedPrice / data.quantity) * 100) / 100
    );

    return newdata;
  });

  return (
    <div className={styles.container}>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="RegularPrice" stroke="#8884d8" />
        <Line type="monotone" dataKey="DiscountedPrice" stroke="#37ff2c" />

        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="name"
          padding={{ left: 30, right: 30 }}
          fontSize={"12px"}
        />
        <YAxis />
        <Tooltip />

        <Legend />
      </LineChart>
    </div>
  );
};

export default Chart;
