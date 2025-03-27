// Elements
const chatbotIcon = document.getElementById('chatbot-icon'); // Chatbot Icon
const chatbox = document.getElementById('chatbox'); // Chatbox Container
const closeChatbox = document.getElementById('close-chatbox'); // Close Button

// Show Chatbox on Click
chatbotIcon.addEventListener('click', () => {
  chatbox.style.display = 'flex'; // Open the chatbox
});

// Close Chatbox on Click
closeChatbox.addEventListener('click', () => {
  chatbox.style.display = 'none'; // Hide the chatbox
});

// Show/Hide Answers
function showAnswer(questionElement) {
  const answerElement = questionElement.nextElementSibling;
  // Toggle visibility of the answer
  answerElement.style.display = 
    answerElement.style.display === 'block' ? 'none' : 'block';
}
chatbotIcon.addEventListener('click', () => {
  console.log("Chatbot Icon Clicked");
  chatbox.style.display = 'flex'; // Open the chatbox
});

closeChatbox.addEventListener('click', () => {
  console.log("Chatbox Close Clicked");
  chatbox.style.display = 'none'; // Hide the chatbox
});

function showAnswer(questionElement) {
  console.log("Question Clicked:", questionElement.textContent);
  const answerElement = questionElement.nextElementSibling;
  answerElement.style.display = 
    answerElement.style.display === 'block' ? 'none' : 'block';
}
