import { useCart } from "@/store/store";
import { Button } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/getAllProducts");
  const products = await res.json();

  return { props: { products } };
};

export default function Home(props) {
  const { products } = props;

  const { addProduct, subtractProduct, emptyCart } = useCart((state) => state);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button onClick={() => addProduct({ id: 1 })}>Add P1</Button>
        <Button onClick={() => subtractProduct(1)}>Subtract P1</Button>
        <Button onClick={() => addProduct({ id: 2 })}>Add P2</Button>
        <Button onClick={() => subtractProduct(2)}>Subtract P2</Button>
        <Button onClick={() => emptyCart()}>Empty</Button>
      </main>
    </>
  );
}
