import { Product } from "@/models/Product";
import { Op } from "sequelize";

export default async function handler(req, res) {
  const data = JSON.parse(req.body);
  const ids = data.map((product) => product.product_id);

  try {
    const products = await Product.findAll({
      where: {
        product_id: {
          [Op.in]: ids,
        },
      },
    });

    const queries = [];
    products.forEach((product) => {
      const quantity = data.find(
        (item) => item.product_id === product.product_id,
      ).quantity;
      queries.push(
        Product.update(
          {
            in_stock: product.in_stock - quantity,
          },
          {
            where: {
              product_id: product.product_id,
            },
          },
        ),
      );
    });
    Promise.all(queries);
    return res.send("ok");
  } catch (e) {
    return res.send(e);
  }
}
