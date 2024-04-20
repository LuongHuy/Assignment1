import { Product } from "@/models/Product";
import { Op } from "sequelize";

export default async function handler(req, res) {
  const ids = JSON.parse(req.body);

  try {
    const products = await Product.findAll({
      where: {
        product_id: {
          [Op.in]: ids,
        },
      },
    });
    return res.json(products);
  } catch (e) {
    return res.send(e);
  }
}
