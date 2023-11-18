export interface TransformerStructure {
  id: string;
  imageUrl: string;
  name: string;
  velocity: number;
  resistence: number;
}

export interface TransformersRepository {
  getTransformers: () => Promise<TransformerStructure[]>;
}
