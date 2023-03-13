import styles from "@/styles/Home.module.scss";
import { useState } from "react";

export default function Home({ data }: any) {
  const [allCarts, setAllCarts] = useState(data.carts);
  return <div className={styles.container}></div>;
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/carts");
  const data = await res.json();

  return { props: { data } };
}
