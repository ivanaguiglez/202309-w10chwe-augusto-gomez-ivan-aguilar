export interface TransformerData {
  imageUrl: string;
  name: string;
  velocity: string;
  resistence: string;
}

export interface TransformerStructure extends TransformerData {
  _id: string;
}

export interface TransformersRepository {
  getTransformers: () => Promise<TransformerStructure[]>;
  addTransformer: (
    transformer: TransformerData,
  ) => Promise<TransformerStructure>;
}
