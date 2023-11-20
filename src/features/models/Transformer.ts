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
    type: Number,
    required: true,
  },
  resistence: {
    type: Number,
    required: true,
  },
});

const Transformer = model("Transformer", transformerSchema, "transformers");

export default Transformer;
