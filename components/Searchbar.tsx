import React from "react";
import Form from "next/form";
import { Search } from "lucide-react";

const Searchbar = ({ query }: { query?: string | string[] | undefined }) => {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        name="search"
        defaultValue={query}
        className="search-input"
        placeholder="Another ChatGPT Wrapper..."
      />

      <button type="submit" className="search-btn">
        <Search className="size-5" />
      </button>
    </Form>
  );
};

export default Searchbar;
