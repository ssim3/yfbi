const Home = () => {
  return (
    <>
      <section className="heading">
        <h1 className="header">
          Your Fantastic Business Ideas, <br />
          All in One Platform.
        </h1>
        <p>
          YFBI. is an all-in-one platform designed for creative thinkers <br />
          to have a public space to journal random business ideas that pop up in their head
        </p>
        <div className="flex justify-between gap-5">
          <button className="buttonPrimary">Share Idea</button>
          <button className="buttonSecondary">Browse Ideas</button>
        </div>
      </section>
    </>
  );
}

export default Home;