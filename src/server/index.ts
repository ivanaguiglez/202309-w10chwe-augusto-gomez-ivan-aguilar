import morgan from "morgan";
import app from "./app.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import transformersRouter from "../features/transformer/router/transformersRouter.js";
import endpointNotFound from "./middlewares/errors/endPointNotFound.js";
import express from "express";

app.use(morgan("dev"));
app.use(express.json());
app.use("/", transformersRouter);
app.use("/", pingRouter);
app.use(endpointNotFound);
