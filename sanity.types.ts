/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type Idea = {
  _id: string;
  _type: "idea";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  slug?: Slug;
  title?: string;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  likes?: number;
  description?: string;
  category?: string;
  image?: string;
  pitch?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  image?: string;
  bio?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityImageHotspot
  | SanityImageCrop
  | SanityFileAsset
  | SanityImageAsset
  | SanityImageMetadata
  | Geopoint
  | SanityAssetSourceData
  | Idea
  | Slug
  | Author
  | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: idea_query
// Query: *[_type == "idea" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt, desc) { _id, title, slug, _createdAt, likes, description, pitch, category, image, author -> { _id, name, image }}
export type Idea_queryResult = Array<
  | {
      _id: string;
      title: null;
      slug: null;
      _createdAt: string;
      likes: null;
      description: null;
      pitch: null;
      category: null;
      image: string | null;
      author: null;
    }
  | {
      _id: string;
      title: string | null;
      slug: null;
      _createdAt: string;
      likes: null;
      description: string | null;
      pitch: null;
      category: null;
      image: null;
      author: null;
    }
  | {
      _id: string;
      title: string | null;
      slug: Slug | null;
      _createdAt: string;
      likes: number | null;
      description: string | null;
      pitch: string | null;
      category: string | null;
      image: string | null;
      author: {
        _id: string;
        name: string | null;
        image: string | null;
      } | null;
    }
>;
// Variable: idea_by_id_query
// Query: *[_type == "idea" && _id == $id ][0] {     _id,     title,     slug,     _createdAt,     likes,     description,     pitch,     category,     image,     author -> { _id, name, image }}
export type Idea_by_id_queryResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  _createdAt: string;
  likes: number | null;
  description: string | null;
  pitch: string | null;
  category: string | null;
  image: string | null;
  author: {
    _id: string;
    name: string | null;
    image: string | null;
  } | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    ' *[_type == "idea" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt, desc) { _id, title, slug, _createdAt, likes, description, pitch, category, image, author -> { _id, name, image }} \n\n    ': Idea_queryResult;
    '*[_type == "idea" && _id == $id ][0] { \n    _id, \n    title, \n    slug, \n    _createdAt, \n    likes, \n    description, \n    pitch, \n    category, \n    image, \n    author -> { _id, name, image }\n}': Idea_by_id_queryResult;
  }
}
