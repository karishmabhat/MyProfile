// Get references to the DOM elements
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

// Function to send message from the user
function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim();
  if (!userInput) return;

  addMessage(userInput, "user");

  const response = getBotResponse(userInput.toLowerCase());
  setTimeout(() => addMessage(response, "bot"), 500);

  document.getElementById("userInput").value = "";
}

function addMessage(message, sender) {
  const chatbox = document.getElementById("chatbox");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("chat-message", `${sender}-message`);
  messageDiv.textContent = message;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
  const date = new Date();

  if (input.includes("who are you")) {
    return "I’m Karishma’s personal chatbot assistant!";
  }

  if (input.includes("your name")) {
    return "My name is KarishmaBot 🤖.";
  }

  if (input.includes("what is today") || input.includes("date")) {
    return `Today's date is ${date.toLocaleDateString()}.`;
  }

  if (input.includes("time")) {
    return `The current time is ${date.toLocaleTimeString()}.`;
  }

  if (input.includes("how are you")) {
    return "I'm just a bot, but I'm functioning perfectly! 😊";
  }

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you today?";
  }

  return "I'm not sure how to respond to that. Try asking about the date, time, or who I am!";
}
