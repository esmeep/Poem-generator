function displayPoem(response) {
  console.log("Poem generatated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userinstrutionsInput = document.querySelector("#user-instrutions");

  let apiKey = "b7be44o389tb973131c1a0565c1f67ad";
  let prompt = `User instructions: Generate a Dutch poam about ${userinstrutionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to genarate a 4 line poen in basic HTML and separat ea h line with a <br />. Make sure to follow the user instructions. Show only the poem not the HTML. Sign the poem with 'Dutch AI By Esmee Peters😘' inside a <strong> element at the and of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Genarating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);
