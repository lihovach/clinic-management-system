import "reflect-metadata";
import { DataSource } from "typeorm";
import { allEntities } from "./utils";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "hanalihovac",
  database: "cms",
  synchronize: true,
  logging: false,
  entities: allEntities,
});
