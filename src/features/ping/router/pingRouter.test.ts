import request from "supertest";
import app from "../../../server/app";
import "../../../server/index";

describe("Given a /GET endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a 200 status and a message containing '🏓'", async () => {
      const path = "/";
      const expectedStatus = 200;
      const expectedMessage = "🏓";

      const response = await request(app).get(path).expect(expectedStatus);

      expect(response.body).toHaveProperty("message", expectedMessage);
    });
  });
});
