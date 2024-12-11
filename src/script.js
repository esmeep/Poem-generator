function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The poem",
    autoStart: true,
    delay: 1,
  });
}

let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);
