const Support = () => {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <p>
        This website is written in Node.js following the design pattern of MVC
        architecture.
      </p>
      <p>
        As for the APIs, we used <span>'Omdb'</span> for the movie API and{" "}
        <span>'Jiken Moe'</span> for the anime API.
      </p>
      <p>
        There are some functionalities and features which ain't available right
        now.But we are trying to add them ASAP.
      </p>
      <h3>Omdb API</h3>
      <a
        href="https://www.omdbapi.com/"
        rel="noreferrer"
        target="_blank"
        style={{ color: " cryon" }}
      >
        https://www.omdbapi.com/
      </a>
      <h3>Jiken Moe</h3>
      <a
        href="https://jikan.moe"
        rel="noreferrer"
        target="_blank"
        style={{ color: "cryon" }}
      >
        https://jikan.moe
      </a>
      <p>
        If you want to modified or use it within your project, we have a public
        repository that you can clone into your project.
      </p>
      <a
        href="https://github.com/Kev-prog-debug/JustClick"
        target="_blank"
        rel="noreferrer"
        style={{ color: "cryon" }}
      >
        https://github.com/Kev-prog-debug/JustClick
      </a>
    </div>
  );
};
export default Support;
