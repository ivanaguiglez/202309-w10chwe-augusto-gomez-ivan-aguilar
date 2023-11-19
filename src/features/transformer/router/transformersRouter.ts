import { Router } from "express";
import TransformersMongooseRepository from "../repository/TransformersMongooseRepository.js";
import TransformersController from "../controller/TransformersController.js";

const transformersRouter = Router();

const transformersRepository = new TransformersMongooseRepository();
const transformersController = new TransformersController(
  transformersRepository,
);

transformersRouter.get("/robots", transformersController.getTransformers);
transformersRouter.post("/", transformersController.addTransformer);

export default transformersRouter;
