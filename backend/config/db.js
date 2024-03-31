import { Sequelize } from "sequelize";

const db = new Sequelize("tugasmku", "root", "", {
  host: process.env.HOST,
  dialect: "mysql",
});

export default db;
