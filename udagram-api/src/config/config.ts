import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}` || "postgres",
  password: process.env.POSTGRES_PASSWORD || "01001314657",
  database: process.env.POSTGRES_DB || "postgres",
  db_port: Number(process.env.DB_PORT) || 5432,
  port: Number(process.env.PORT) || 3000,
  host: process.env.POSTGRES_HOST || "database-1.cdhpj0a6tb8z.eu-west-3.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: process.env.AWS_REGION || "us-west-3",
  aws_profile: process.env.AWS_PROFILE || "default",
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
