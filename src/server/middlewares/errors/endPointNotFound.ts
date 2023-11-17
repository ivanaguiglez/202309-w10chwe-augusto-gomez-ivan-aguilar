import { type Request, type Response } from "express";

const endpointNotFound = (_req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
};

export default endpointNotFound;
