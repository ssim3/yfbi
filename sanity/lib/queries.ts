import { defineQuery } from "next-sanity";

export const idea_query =
  defineQuery(` *[_type == "idea" && defined(slug.current)] | order(_createdAt, desc) { _id, title, slug, _createdAt, likes, description, pitch, image, author -> { _id, name, image }} 

    `);
