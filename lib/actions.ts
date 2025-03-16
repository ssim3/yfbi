"use server";

import { auth } from "@/auth";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createIdea = async (state: any, form: FormData, pitch: string) => {
  const session = await auth();

  if (!session)
    return JSON.parse(
      JSON.stringify({ error: "Not signed in!", status: "ERROR" }),
    );

  const fields = Object.fromEntries(
    Array.from(form).filter(([key]) => key != "pitch"),
  );

  console.log(fields);

  const { title, description, category, link } = fields;

  console.log(title as string);

  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const idea = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      pitch,
    };

    const result = await writeClient.create({ _type: "idea", ...idea });

    return JSON.parse(
      JSON.stringify({
        ...result,
        error: "",
        status: "SUCCESS",
      }),
    );
  } catch (error) {
    console.log(error);
    return JSON.parse(
      JSON.stringify({ error: JSON.stringify(error), status: "ERROR" }),
    );
  }
};
