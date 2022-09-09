document.addEventListener("DOMContentLoaded", (event) => {
  let buttonChar = document.querySelector(".search-char");
  let cards = document.querySelector(".cards");

  let input = "Hitler";

  function fetchCharacters() {
    for (let i = 1; i <= 42; i++) {
      fetch("https://rickandmortyapi.com/api/character/?page=" + i)
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i <= 20; i++) {
            let person = data.results[i];
            let nameOfPerson = data.results[i].name;

            let b = 0;

            if (nameOfPerson.includes(input) && b < 6) {
              let rmName = person.name;
              let rmGender = person.gender
              let rmImg = person.image;
              let rmStatus = person.status;
              let rmDiv = document.createElement("article");

              rmDiv.classList.add("card-holder");
              rmDiv.innerHTML = `
              <h2>${rmName}</h2> 
              <p>${rmGender}</p> 
              <p>${rmStatus}</p> 
              <img src="${rmImg}" />`;

              cards.appendChild(rmDiv)

            } 

            // if (name.includes(input)){
            //   console.log(name)
            // }
          }
        });
    }
  }

  fetchCharacters();
});
