import IdeaForm from "@/components/IdeaForm";
import React from "react";

const Create = () => {
  return (
    <>
      <section className="m-auto my-10 flex max-w-screen-xl flex-col gap-10 p-10">
        <div id="heading" className="flex flex-col gap-5 text-center">
          <h1 className="text-5xl text-rose-500">Submit Your Idea</h1>
          <p>
            Let's see what your <span className="italic">goofy</span> brain's
            got this time
          </p>
        </div>
        <IdeaForm />
      </section>
    </>
  );
};

export default Create;
