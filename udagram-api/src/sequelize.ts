import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";


console.log("DB USERNAME =>",config.username);

export const sequelize = new Sequelize({
  username: "postgres",
  password: "01001314657",
  database:  "postgres",
  host: config.host || "database-1.cdhpj0a6tb8z.eu-west-3.rds.amazonaws.com",
  port: config.db_port || 5432,

  dialect: "postgres",
  storage: ":memory:",
});
