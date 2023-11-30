function clickM() {
  const Title = document.getElementById("title").value;
  const Year = document.getElementById("year").value;
  fetch(`http://www.omdbapi.com/?s=${Title}&y=${Year}&apikey=e0414938`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.Search.map((data) => {
        const movieData = document.createElement("div");
        movieData.innerHTML = `
       <h2 id="title">${data.Title}</h2>
        <p id="year">${data.Year}</p>
        <img src="${data.Poster}" alt="" id="img" />
      `;

        const movie = document.querySelector(".movie-list");
        movie.appendChild(movieData);
      });
    })

    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
