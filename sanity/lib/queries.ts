import { defineQuery } from "next-sanity";

export const idea_query =
  defineQuery(` *[_type == "idea" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt, desc) { _id, title, slug, _createdAt, likes, description, pitch, category, image, author -> { _id, name, image }} 

    `);
