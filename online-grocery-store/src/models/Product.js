import { DataTypes } from "sequelize";
import { sequelize } from "./database";

export const Product = sequelize.define(
  "products",
  {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: DataTypes.STRING,
    unit_price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    unit_quantity: DataTypes.STRING,
    in_stock: DataTypes.NUMBER,
    description: DataTypes.STRING,
  },
  { timestamps: false },
);
