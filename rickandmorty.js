
document.addEventListener("DOMContentLoaded", (event) => {
  
  function fetchRnM() {
    fetch("https://rickandmortyapi.com/api", {
      headers: {
        Accept: "application/json",
      },
    })
  function fetchCharacters() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
        console.log(data.results[0])
      });
  }
  function fetchEpisodes() {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0])
      });
  }
  function fetchLocations() {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0])
      });
  }

  fetchCharacters()
  fetchEpisodes()
  fetchLocations()


  fetchRnM()
}});