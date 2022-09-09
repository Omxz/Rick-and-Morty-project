document.addEventListener("DOMContentLoaded", (event) => {
  let buttonChar = document.querySelector(".search-char");

  buttonChar.addEventListener("click", () => {
    fetchCharacters;
  });

  let input = "ric"

  function fetchCharacters() {
    for (let i = 1; i <= 42; i++) {

      fetch("https://rickandmortyapi.com/api/character/?page=" + i)
        .then((res) => res.json())
        .then((data) => {

          let name = toString(data.results.name)
          if (name.includes(input)){
            console.log(name)
          }


        });
    }
  }

  fetchCharacters();
});
