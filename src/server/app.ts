import "dotenv/config";
import chalk from "chalk";
import express from "express";

const app = express();

export const startServer = (port: number) => {
  app.listen(+port, () => {
    console.log(chalk.green(`Server is listening on PORT ${port}`));
  });
};

export default app;
