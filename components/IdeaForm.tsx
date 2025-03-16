"use client";

import React, { useState, useActionState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createIdea } from "@/lib/actions";

const IdeaForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [pitch, setPitch] = React.useState("");

  const router = useRouter();

  const handleSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      const result = await createIdea(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
        toast("Success", {
          description: "Idea created successfully!",
        });
      }

      router.push(`/idea/${result._id}`);

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);

        toast.error("Error", {
          description: "Please check your inputs and try again.",
        });

        return { ...prevState, error: "Validation failed", status: "ERROR " };
      }

      return {
        ...prevState,
        error: "An unexpected error has occured",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form
      className="flex flex-col items-center justify-center gap-16"
      action={formAction}
    >
      <div className="flex w-full max-w-5xl flex-col gap-5">
        <label className="text-2xl" htmlFor="title">
          Title
        </label>
        <input
          className="rounded-3xl border border-gray-500 bg-transparent p-5"
          id="title"
          name="title"
          required
          placeholder="Enter Idea Title"
        />

        {errors.title && <p className="text-rose-500">{errors.title}</p>}
      </div>

      <div className="flex w-full max-w-5xl flex-col gap-5">
        <label className="text-2xl" htmlFor="description">
          Description
        </label>
        <textarea
          className="min-h-32 rounded-3xl border border-gray-500 bg-transparent p-5"
          id="description"
          name="description"
          required
          placeholder="Enter Idea Description"
        />

        {errors.description && (
          <p className="text-rose-500">{errors.description}</p>
        )}
      </div>

      <div className="flex w-full max-w-5xl flex-col gap-5">
        <label className="text-2xl" htmlFor="category">
          Category
        </label>
        <input
          className="rounded-3xl border border-gray-500 bg-transparent p-5"
          id="category"
          name="category"
          required
          placeholder="Enter Idea Category (e.g. Tech, Social, Life)"
        />

        {errors.category && <p className="text-rose-500">{errors.category}</p>}
      </div>

      <div className="flex w-full max-w-5xl flex-col gap-5">
        <label className="text-2xl" htmlFor="link">
          Image URL
        </label>
        <input
          className="rounded-3xl border border-gray-500 bg-transparent p-5"
          id="link"
          name="link"
          required
          placeholder="Enter Idea Image URL"
        />

        {errors.link && <p className="text-rose-500">{errors.link}</p>}
      </div>

      <div className="flex w-full max-w-5xl flex-col gap-5">
        <label className="text-2xl" htmlFor="pitch">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={setPitch}
          id="pitch"
          preview="edit"
          height={300}
          style={{
            borderRadius: "1.5rem",
            background: "transparent",
            color: "white",
            border: "solid 1px #6b7280",
            padding: "5px",
          }}
          textareaProps={{
            placeholder:
              "Describe your idea in depth, what problem it solves, current efforts and etc.",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
        {errors.pitch && <p className="text-rose-500">{errors.pitch}</p>}
      </div>

      <button
        disabled={isPending}
        type="submit"
        className="flex w-2/3 items-center justify-center gap-5 rounded-3xl border border-black-100 bg-rose-500 p-3 text-2xl text-black transition-all hover:scale-105 hover:text-white"
      >
        {isPending ? "Submitting..." : "Submit Your Idea"}
        <Send className="size-8" />
      </button>
    </form>
  );
};

export default IdeaForm;
