import morgan from "morgan";
import app from "./app.js";
import endpointNotFound from "./middlewares/errors/endPointNotFound.js";
import pingRouter from "../features/ping/router/pingRouter.js";

app.use(morgan("dev"));
app.use("/", pingRouter);
app.use(endpointNotFound);
