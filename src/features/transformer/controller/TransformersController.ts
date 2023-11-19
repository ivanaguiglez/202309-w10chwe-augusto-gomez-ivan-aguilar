import { type Request, type Response } from "express";
import { type TransformerData, type TransformersRepository } from "../types";

class TransformersController {
  constructor(
    private readonly transformersRepository: TransformersRepository,
  ) {}

  public getTransformers = async (
    _req: Request,
    res: Response,
  ): Promise<void> => {
    const transformers = await this.transformersRepository.getTransformers();
    res.status(200).json({ transformers });
  };

  public addTransformer = async (req: Request, res: Response) => {
    const responseBody = req.body as TransformerData;
    const addedTransformer =
      await this.transformersRepository.addTransformer(responseBody);
    res.status(200).json({ transformer: addedTransformer });
  };
}

export default TransformersController;
