import { Schema, model } from "mongoose";
import { type TransformerStructure } from "../transformer/types.js";

const transformerSchema = new Schema<TransformerStructure>({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    requiered: true,
  },
  velocity: {
    type: String,
    required: true,
  },
  resistence: {
    type: String,
    required: true,
  },
});

const Transformer = model("Transformer", transformerSchema, "transformers");

export default Transformer;
