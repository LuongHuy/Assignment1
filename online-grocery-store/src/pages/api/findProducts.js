import { Product } from "@/models/Product";
import { Op } from "sequelize";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const products = await Product.findAll({
      where: {
        [Op.or]: [
          {
            product_name: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      },
    });
    return res.json(products);
  } catch (error) {
    return res.send(error);
  }
}
