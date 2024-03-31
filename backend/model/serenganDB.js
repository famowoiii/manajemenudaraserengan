import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Serengan = db.define(
  "Serengan",
  {
    CO: {
      type: DataTypes.FLOAT, // atau DataTypes.DOUBLE
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Serengan;

(async () => {
  await db.sync();
})();
