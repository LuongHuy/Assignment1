import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("assignment1", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
