import Transformer from "../../model/Transformer.js";
import {
  type TransformerStructure,
  type TransformersRepository,
} from "../types.js";

class TransformersMongooseRepository implements TransformersRepository {
  public async getTransformers(): Promise<TransformerStructure[]> {
    const transformers = await Transformer.find();

    return transformers;
  }

  public async addTransformer(
    transformer: TransformerStructure,
  ): Promise<TransformerStructure> {
    const addedTransformer = await Transformer.create(transformer);
    return addedTransformer;
  }
}

export default TransformersMongooseRepository;
