export interface TransformerData {
  imageUrl: string;
  name: string;
  velocity: number;
  resistence: number;
}

export interface TransformerStructure extends TransformerData {
  id: string;
}

export interface TransformersRepository {
  getTransformers: () => Promise<TransformerStructure[]>;
  addTransformer: (
    transformer: TransformerData,
  ) => Promise<TransformerStructure>;
}
