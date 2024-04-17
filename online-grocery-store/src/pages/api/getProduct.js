import { Product } from "@/models/Product";
import { Op } from "sequelize";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { product_id } = req.query;
  try {
    const product = await Product.findByPk(product_id);

    return res.json(product);
  } catch (error) {
    return res.send(error);
  }
}
