import "dotenv/config";
import helmet from "helmet";
import chalk from "chalk";
import express from "express";

const app = express();
app.use(helmet());

export const startServer = (port: number) => {
  app.listen(+port, () => {
    console.log(chalk.green(`Server is listening on PORT ${port}`));
  });
};

export default app;
