import Transformer from "../../models/Transformer.js";
import {
  type TransformerData,
  type TransformerStructure,
  type TransformersRepository,
} from "../types.js";

class TransformersMongooseRepository implements TransformersRepository {
  public async getTransformers(): Promise<TransformerStructure[]> {
    const transformers = await Transformer.find();

    return transformers;
  }

  public async addTransformer(
    transformer: TransformerData,
  ): Promise<TransformerStructure> {
    try {
      const addedTransformer = await Transformer.create(transformer);
      return addedTransformer;
    } catch (error) {
      throw new Error(
        "Error creating new transformer" + (error as Error).message,
      );
    }
  }
}

export default TransformersMongooseRepository;
