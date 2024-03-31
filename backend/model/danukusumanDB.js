import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Danukusuman = db.define(
  "Danukusuman",
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

export default Danukusuman;

(async () => {
  await db.sync();
})();
