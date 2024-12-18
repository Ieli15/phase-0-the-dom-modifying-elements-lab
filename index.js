// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');

// Set the id of the new <h1> to 'victory'
newHeader.id = 'victory';

// Set the innerHTML of the new <h1> to "YOUR-NAME is the champion"
newHeader.innerHTML = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name
