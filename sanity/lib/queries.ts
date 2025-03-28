import { defineQuery } from "next-sanity";

export const idea_query =
  defineQuery(` *[_type == "idea" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt, desc) { 
    _id, 
    title, 
    slug, 
    _createdAt, 
    likes, 
    description, 
    category, 
    image, 
    author -> { _id, username, image }
  }`);

export const idea_by_id_query =
  defineQuery(`*[_type == "idea" && _id == $id ][0] { 
    _id, 
    title, 
    slug, 
    _createdAt, 
    likes, 
    description, 
    pitch, 
    category, 
    image, 
    author -> { _id, name, username, image }
}`);

export const likes_by_id = defineQuery(`*[_type == "idea" && _id == $id ][0] { 
    likes
}`);

export const author_by_github_id = defineQuery(`
  *[_type == "author" && id == $id][0] {
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }
`);

export const author_by_id = defineQuery(`
  *[_type == "author" && _id == $id][0] {
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }
`);

export const idea_by_author_query =
  defineQuery(` *[_type == "idea" && author._ref == $id] | order(_createdAt, desc) { _id, title, slug, _createdAt, likes, description, pitch, category, image, author -> { _id, name, username, image }} 

    `);

export const ideas_by_author = defineQuery(
  `count(*[_type == "idea" && author._ref == $id])`,
);
