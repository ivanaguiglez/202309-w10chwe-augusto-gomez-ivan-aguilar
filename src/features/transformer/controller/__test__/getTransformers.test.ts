import transformersMock from "../../mocks/transformersMock";
import { type Request, type Response } from "express";
import { type TransformerData, type TransformersRepository } from "../../types";
import TransformersController from "../TransformersController";

describe("Given a TransformersController's getTransformers method", () => {
  describe("When it receives a response", () => {
    const transformers: TransformerData[] = transformersMock;

    const transformersRepository: TransformersRepository = {
      getTransformers: jest.fn().mockResolvedValue(transformers),
      addTransformer: jest.fn(),
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
