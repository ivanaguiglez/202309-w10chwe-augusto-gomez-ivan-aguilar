import helmet from "helmet";
import app from "./app.js";
import endpointNotFound from "./middlewares/errors/endPointNotFound.js";
import morgan from "morgan";
import pingRouter from "../features/ping/router/pingRouter.js";

app.use(helmet());
app.use(morgan("dev"));
app.use("/", pingRouter);
app.use(endpointNotFound);
