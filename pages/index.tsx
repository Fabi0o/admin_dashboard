import Nav from "@/components/Nav";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";
import { Product, Cart, Props } from "@/types/carts";

export default function Home({ data }: Props) {
  const [allCarts, setAllCarts] = useState(data.carts);
  return (
    <div className={styles.container}>
      <Nav allCarts={allCarts} />
      <div className={styles.content}></div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/carts");
  const data = await res.json();

  return { props: { data } };
}
