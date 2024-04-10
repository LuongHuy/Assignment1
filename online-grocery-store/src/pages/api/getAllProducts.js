import { Product } from "@/models/Product";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (e) {
    return res.send(e);
  }
}
