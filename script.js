// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Highlight active section
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    const fromTop = window.scrollY;
  
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (
        section.offsetTop <= fromTop + 50 &&
        section.offsetTop + section.offsetHeight > fromTop + 50
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  <script>
  document.querySelectorAll('a[href^="#"]').forEach(anchor = {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    })
  });
</script>


Swal.fire({
  icon: 'success',
  title: 'Message Sent',
  text: 'Thank you for your message! We will get back to you shortly.',
  confirmButtonColor: '#6a5acd'
});

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

