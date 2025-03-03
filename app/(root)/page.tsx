import Searchbar from "@/components/Searchbar";
import IdeaCard, { IdeaCardType } from "@/components/IdeaCard";
import { idea_query } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = (await searchParams).search || "";
  const params = { search : query || null};
  const {data : posts} = await sanityFetch({query : idea_query, params});

  return (
    <>
      <section className="heading">
        <h1 className="header">
          Your <span className="line-through decoration-rose-500">Horrible</span> <span className="text-rose-500">Fantastic</span> Business Ideas,
          All in One Platform.
        </h1>
        <p className="hidden sm:block">
          YFBI. is an all-in-one platform designed for creative thinkers <br />
          to have a public space to journal random business ideas that pop up in
          their head
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 my-5">
          <button className="buttonPrimary"><a href="#ideas-container">Browse Ideas</a></button>
          <button className="buttonSecondary">Share Ideas</button>
        </div>
      </section>

      <section id="ideas-container" className="ideas-container">
        <div className="flex flex-col sm:flex-row-reverse items-center gap-10 mb-16">
          <Searchbar query={query} />
          <p className="text-lg flex-1">
            {query ? `Showing search results for "${query}"` : "Browse Ideas"}
          </p>
        </div>

        <ul className="card-grid mt-7">
          {posts?.length > 0 ? (
            posts?.map((post : IdeaCardType) => (
              <IdeaCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No posts found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
};

export default Home;
