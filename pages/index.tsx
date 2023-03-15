import Nav from "@/components/Nav";
import styles from "@/styles/Home.module.scss";
import dynamic from "next/dynamic";
import { useState } from "react";
import { DataProps } from "@/types/carts";
import Table from "@/components/Table";
const Chart = dynamic(() => import("@/components/Chart"), { ssr: false });

export default function Home({ data }: DataProps) {
  const [allCarts, setAllCarts] = useState(data.carts);
  const [currentCart, setCurrentCart] = useState(data.carts[0]);
  return (
    <div className={styles.container}>
      <Nav allCarts={allCarts} />
      <div className={styles.content}>
        <Table
          allCarts={allCarts}
          setAllCarts={setAllCarts}
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}
        />
        {currentCart && <Chart currentCart={currentCart} />}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/carts");
  const data = await res.json();

  return { props: { data } };
}
