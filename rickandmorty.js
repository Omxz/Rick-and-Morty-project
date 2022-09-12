document.addEventListener("DOMContentLoaded", (event) => {
  let buttonChar = document.querySelector(".search-char");
  let cards = document.querySelector(".cards");

  let input = "Morty";

  function fetchCharacters() {
    let b = 1;
    const maxCount = 6;
    for (let j = 1; j <= 42; j++) {
      fetch("https://rickandmortyapi.com/api/character/?page=" + j)
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i <= 20; i++) {
            let person = data.results[i];

            if (!person) {
              // continue;
              break;
            }

            let nameOfPerson = data.results[i].name;

            console.log("bbbbb", b);
            if (nameOfPerson.includes(input) && b < maxCount) {
              b++;
              let rmName = person.name;
              let rmGender = person.gender;
              let rmImg = person.image;
              let rmStatus = person.status;
              let rmSpecies = person.species;
              let rmDiv = document.createElement("article");
              let imgDiv = document.createElement("div")
              imgDiv.classList.add("image-holder")
              let wrapper = document.createElement("div")
              let nameText = document.createElement("div") 
              let genderText = document.createElement("div")
              let statusText = document.createElement("div")
              let speciesText = document.createElement("div")
              wrapper.classList.add("wrapper")
              rmDiv.classList.add("card-holder");
              rmDiv.appendChild(imgDiv)
              wrapper.appendChild(nameText)
              wrapper.appendChild(genderText)
              wrapper.appendChild(statusText)
              wrapper.appendChild(speciesText)
              rmDiv.appendChild(wrapper)
              imgDiv.innerHTML = `
              <img src="${rmImg}" />`;
              nameText.innerHTML =`<h2>${rmName}</h2>  `
              genderText.innerHTML = `<p>Gender: ${rmGender}</p> ` 
              statusText.innerHTML = `<p>Status: ${rmStatus}</p>  `
              speciesText.innerHTML = `<p>Species: ${rmSpecies}</p>½` 
              console.log(person)

              cards.appendChild(rmDiv);
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
