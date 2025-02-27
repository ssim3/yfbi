import Searchbar from "@/components/Searchbar";
import IdeaCard from "@/components/IdeaCard";
import { client } from "@/sanity/lib/client";
import { idea_query } from "@/sanity/lib/queries";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = (await searchParams).search;
  const posts = await client.fetch(idea_query);

  console.log(JSON.stringify(posts, null, 2));

  return (
    <>
      <section className="heading">
        <h1 className="header">
          Your Fantastic Business Ideas, <br />
          All in One Platform.
        </h1>
        <p>
          YFBI. is an all-in-one platform designed for creative thinkers <br />
          to have a public space to journal random business ideas that pop up in
          their head
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Searchbar query={query} />
          <button className="buttonPrimary">Share Idea</button>
        </div>
      </section>

      <section className="ideas-container">
        <p className="text-lg">
          {query ? `Showing search results for "${query}"` : "Browse Ideas"}
        </p>

        <ul className="card-grid mt-7">
          {posts?.length > 0 ? (
            posts?.map((post: IdeaCardType, index) => (
              <IdeaCard key={post._id} post={post} />
            ))
          ) : (
            <p>No posts found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
