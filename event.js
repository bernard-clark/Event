// Function to handle the button click event
function handleButtonClick() {
    // Display an alert when the button is clicked
    alert('Button was clicked!');
}

// Function to handle the mouse hover event over the div
function handleMouseHover() {
    // Log a message to the console when the mouse hovers over the div
    console.log('Mouse is hovering over the div!');
}

// Function to handle the keypress event in the input field
function handleKeyPress(event) {
    // Log the key that was pressed to the console
    // The 'event' object contains details about the event, including the key pressed
    console.log(`Key pressed: ${event.key}`);
}

// Get the button element by its ID and set up an event listener
document.getElementById('clickMeButton').addEventListener('click', handleButtonClick);
// This means when the button with ID 'clickMeButton' is clicked, the handleButtonClick function will be called

// Get the div element by its ID and set up an event listener
document.getElementById('hoverMeDiv').addEventListener('mouseover', handleMouseHover);
// This means when the mouse pointer moves over the div with ID 'hoverMeDiv', the handleMouseHover function will be called

// Get the input element by its ID and set up an event listener
document.getElementById('keyPressInput').addEventListener('keypress', handleKeyPress);
// This means when a key is pressed while the input field with ID 'keyPressInput' is focused, the handleKeyPress function will be called
