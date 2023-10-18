// Create a function to write thank you cards for an array of names
function writeCards(names, eventName) {
    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouCards;
  }
  
  // Create a function to count down from a positive integer to zero
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage
  writeCards(["Charlie", "Samip", "Ali"], "birthday");
  countDown(10);
  
