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
    //products.forEach((product)=> await product.decrement("in_stock",{by:(data.find(item=>item.product_id===product.product_id)).quantity}))
    // products.forEach((product) => {
    //  await product.decrement("in_stock",{by:data.find(item =>item.product_id===product.product_id).quantity})
    // })
  } catch (e) {
    return res.send(e);
  }
}
