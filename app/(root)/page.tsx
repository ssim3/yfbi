import Searchbar from "@/components/Searchbar";
import IdeaCard from "@/components/IdeaCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = (await searchParams).search;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Jonathan",
        profile_img:
          "https://cdn.prod.website-files.com/6320c9d25c243e328157e175/6320c9d25c243e17dc57e8a6_Tim%20Photo%20square.jpg",
      },
      description:
        "The craziest fat cat you will EVER see in your life. This cat is so fucking fat that your mind will be blown.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dN075GSE1cYS7lwLbaOH0g_WN7bVOJ8wTg&s",
      category: "Tech",
      title: "Fat Robot Cats",
    },
    {
      _id: 2,
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Jonathan" },
      description: "This is a description.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dN075GSE1cYS7lwLbaOH0g_WN7bVOJ8wTg&s",
      category: "Tech",
      title: "Fat Robot Cats",
    },
    {
      _id: 3,
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Jonathan" },
      description: "This is a description.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dN075GSE1cYS7lwLbaOH0g_WN7bVOJ8wTg&s",
      category: "Tech",
      title: "Fat Robot Cats",
    },
    {
      _id: 4,
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Jonathan" },
      description: "This is a description.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dN075GSE1cYS7lwLbaOH0g_WN7bVOJ8wTg&s",
      category: "Tech",
      title: "Fat Robot Cats",
    },
  ];

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
