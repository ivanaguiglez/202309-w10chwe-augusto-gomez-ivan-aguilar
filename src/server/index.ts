import helmet from "helmet";
import app from "./app.js";
import endpointNotFound from "./middlewares/errors/endPointNotFound.js";
import morgan from "morgan";

app.use(helmet());
app.use(morgan("dev"));
app.use(endpointNotFound);
