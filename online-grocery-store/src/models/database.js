import {
  NEXT_PUBLIC_DB_HOST,
  NEXT_PUBLIC_DB_NAME,
  NEXT_PUBLIC_DB_PASSWORD,
  NEXT_PUBLIC_DB_PORT,
} from "@/env/env";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "assignment1",
  NEXT_PUBLIC_DB_NAME,
  NEXT_PUBLIC_DB_PASSWORD,
  {
    host: NEXT_PUBLIC_DB_HOST,
    port: NEXT_PUBLIC_DB_PORT,
    dialect: "mysql",
  },
);
