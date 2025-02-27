import { type SchemaTypeDefinition } from "sanity";
import { author } from "@/sanity/schemaTypes/author";
import { idea } from "./idea";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, idea],
};
