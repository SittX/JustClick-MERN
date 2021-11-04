const Welcome = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="introBg"></div>
        <div
          className="container"
          style={{ marginTop: "15px", lineHeight: "1.5rem" }}
        >
          <div
            className="container"
            style={{ lineHeight: "2.5rem", fontSize: "25px" }}
          >
            <h2 style={{ textAlign: "center" }}>
              What is <span className="text-primary">Just</span>
              <span style={{ color: "red" }}>Click</span> ?
            </h2>
            <p>
              JustClick is a website for those who want to find informations of
              a movie or a TV show with just a few
              <span style={{ color: "red" }}>"Clicks"</span>. We arranged all of
              the different movies and TV shows data that are available on the
              internet in one place. So, that you don't have to go to any
              trouble of finding it from a ton of websites. We believe that it
              would save up a ton of your time.
            </p>
          </div>
          <div
            className="container"
            style={{
              marginTop: "20px",
              border: "1px black",
              borderRadius: "20px",
              boxShadow: " 15px 10px 2px #333",
              backgroundColor: "black",
            }}
          >
            <p>There are pages for different genres and categories.</p>
            <p>
              If you are searching for international movies and TV series, you
              can find it at <span style={{ color: "red" }}>"Movie"</span>
              page.
            </p>
            <p>
              If that is not what you are looking for, then you can look up at
              <span style={{ color: "red" }}>"Anime"</span> page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
