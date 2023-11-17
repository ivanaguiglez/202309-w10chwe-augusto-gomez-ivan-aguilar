import { type Request, type Response } from "express";
import PingController from "./pingController";

describe("Given a PingController", () => {
  describe("When it receives a response", () => {
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call a status method with a 200", () => {
      const expectedStatusCode = 200;

      const pingController = new PingController();
      pingController.getPong(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method with a message '🏓'", () => {
      const expectedMessage = { message: "🏓" };
      const pingController = new PingController();
      pingController.getPong(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
