import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "assignment1",
  process.env.NEXT_PUBLIC_DB_NAME,
  process.env.NEXT_PUBLIC_DB_PASSWORD,
  {
    host: process.env.NEXT_PUBLIC_DB_HOST,
    port: process.env.NEXT_PUBLIC_DB_PORT,
    dialect: "mysql",
  },
);
