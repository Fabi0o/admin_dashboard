import Nav from "@/components/Nav";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";
import { Product, Cart, DataProps } from "@/types/carts";
import Chart from "@/components/Chart";
import Table from "@/components/Table";

export default function Home({ data }: DataProps) {
  const [allCarts, setAllCarts] = useState(data.carts);
  const [currentCart, setCurrentCart] = useState(data.carts[0]);
  return (
    <div className={styles.container}>
      <Nav allCarts={allCarts} />
      <div className={styles.content}>
        <Table
          allCarts={allCarts}
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}
        />
        <Chart />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/carts");
  const data = await res.json();

  return { props: { data } };
}
