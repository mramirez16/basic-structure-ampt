import dotenv from "dotenv";
dotenv.config();

const config = {
  server: {
    port: process.env.PORT || 4000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret-crypto",
  },
  mongo: {
    /*host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "admin",
    pass: process.env.MYSQL_PASS || "Marco12345.",
    db: process.env.MYSQL_DB || "almanaque",
    port: process.env.MYSQL_PORT || 3306,*/
  },
};

export default config;
