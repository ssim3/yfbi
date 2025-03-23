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
  const params = { search: query || null };

  // Get posts with Sanity Live
  const { data: posts } = await sanityFetch({ query: idea_query, params });

  return (
    <>
      <section className="heading">
        <h1 className="font-gagalin-sans text-6xl transition-transform sm:w-full sm:text-7xl md:w-4/5">
          Your{" "}
          <span className="line-through decoration-rose-500">Horrible</span>{" "}
          <span className="text-rose-500">Fantastic</span>
          <br></br> Business Ideas
        </h1>
        <p className="max-w-full sm:block sm:max-w-[60%]">
          YFBI. is an all-in-one platform designed for creative thinkers to have
          a public space to journal random business ideas that pop up in their
          head
        </p>
        <div className="my-2 flex flex-wrap items-center justify-center gap-10">
          <button className="buttonPrimary">
            <a href="#ideas-container">Browse Ideas</a>
          </button>
          <button className="buttonSecondary">Share Ideas</button>
        </div>
      </section>

      <section id="ideas-container" className="ideas-container">
        <div className="mb-16 flex flex-col-reverse items-center gap-10 sm:flex-row-reverse">
          <Searchbar query={query} />
          <p className="flex-1 text-lg">
            {query ? `Showing search results for "${query}"` : "Browse Ideas"}
          </p>
        </div>

        <ul className="mt-7 columns-2 break-inside-avoid gap-5 space-y-5 md:columns-3 xl:columns-4">
          {posts?.length > 0 ? (
            posts?.map((post: IdeaCardType) => (
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
