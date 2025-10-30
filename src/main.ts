// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const incrementButton = "increment",
  counterButton = "counter",
  headerName = "CMPM 121 Project",
  decrementButton = "decrement",
  resetButton = "reset";

//function to update the background color of the website and the counter element
function updateUI() {
  const counterElement = document.getElementById(counterButton);
  if (counterElement) {
    counterElement.textContent = counter.toString();
  }
  document.title = "CLICKED " + counter;
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${headerName}</h1>
    <p>Counter: <span id="${counterButton}">0</span></p>
    <div id="buttonController">
      <button id="${incrementButton}">Click Me!</button>
      <button id="${decrementButton}">Decrement</button>
      <button id="${resetButton}">Reset</button>
    </div>
  `;

  /* // Get the increment button element from the document
  const incrementButtonElement = document.getElementById(incrementButton);
  // Get the decrement button element from the document
  const decrementButtonElement = document.getElementById(decrementButton);
  // Get the reset button element from the document
  const resetButtonElement = document.getElementById(resetButton);
  // Get the counter span element from the document
  const counterButtonElement = document.getElementById(counterButton);

  // Check if any element is missing, then exit the function
  if (
    !incrementButtonElement || !decrementButtonElement || !resetButtonElement ||
    !counterButtonElement
  ) {
    return;
  }*/

  // Get div id as an html getElementById
  const controls = document.getElementById("buttonController");

  // Add click event for all the buttons in one listener
  controls?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement) {
      const clickedElementId = event.target.id;
      switch (clickedElementId) {
        case incrementButton:
          counter++;
          break;
        case decrementButton:
          counter--;
          break;
        case resetButton:
          counter = 0;
          break;
      }
      updateUI();
    }
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
