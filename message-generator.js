// messageGenerator.js

// Data components
const moods = ["happy", "productive", "relaxed", "confident", "curious"];
const advice = [
  "take a deep breath and move forward.",
  "trust your instincts.",
  "try something new today.",
  "reflect on your recent achievements.",
  "step outside your comfort zone."
];
const quotes = [
  "“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill",
  "“Believe you can and you're halfway there.” – Theodore Roosevelt",
  "“Don't watch the clock; do what it does. Keep going.” – Sam Levenson",
  "“Your time is limited, so don’t waste it living someone else’s life.” – Steve Jobs",
  "“Great things never came from comfort zones.” – Unknown"
];

// Function to pick a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate the message
function generateMessage() {
  const mood = getRandom(moods);
  const tip = getRandom(advice);
  const quote = getRandom(quotes);

  console.log(`🌟 Today you're feeling ${mood}. Here's your tip: ${tip}`);
  console.log(`💬 Inspiration for you: ${quote}`);
}

// Run the message generator
generateMessage();
