function firstChar(text) {
  // Remove extra spaces at start and end
  let string = text.trim();
  
  // Return the first character
  return string.charAt(0);
}

// Uncomment to get user input
const text = prompt("Enter text:");

// Show the first character
alert(firstChar(text));
