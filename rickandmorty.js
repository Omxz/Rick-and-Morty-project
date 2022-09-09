document.addEventListener("DOMContentLoaded", (event) => {
let cards = document.querySelector(".content-area")

  
  
  function fetchRnM() {
    fetch("https://rickandmortyapi.com/api", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getImg.src = data.img;
        getH1.innerHTML = data.title;
        getImg.alt = data.alt;
      });
  }
});
