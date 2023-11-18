import transformersMock from "../../mocks/transformersMock";
import { type Request, type Response } from "express";
import {
  type TransformersRepository,
  type TransformerStructure,
} from "../../types";
import TransformersController from "../TransformersController";

describe("Given a TransformersController's getTransformers method", () => {
  describe("When it receives a response", () => {
    const transformers: TransformerStructure[] = transformersMock;

    const transformersRepository: TransformersRepository = {
      getTransformers: jest.fn().mockResolvedValue(transformers),
    };

    const transformersController = new TransformersController(
      transformersRepository,
    );

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call its method status with 200", async () => {
      const expectedStatusCode = 200;

      await transformersController.getTransformers(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with xxxxx", async () => {
      const expectedTransformers = transformers;

      await transformersController.getTransformers(
        req as Request,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({
        transformers: expectedTransformers,
      });
    });
  });
});
