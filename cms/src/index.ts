import "reflect-metadata";
import { useContainer } from "typeorm";
import { Container } from "typedi";
import { createExpressServer } from "routing-controllers";

import { AppDataSource } from "./data-source";
import { allControllers } from "./utils";

useContainer(Container);
AppDataSource.initialize()
  .then(async () => {
    createExpressServer({
      controllers: allControllers,
    }).listen(3000);
    console.log("Server is up and running on port 3000. Now send requests to check if everything works.");
  })
  .catch((error) => console.error("Error: ", error));
