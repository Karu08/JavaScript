const chatBox = document.getElementById('chat-box');
const input = document.getElementById('message-input');

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function addMessage(content, sender = 'user') {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.innerHTML = `
    <div>${content}</div>
    <div class="timestamp">${getCurrentTime()}</div>`;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

window.onload = () => {
  addMessage("Hello! How can I help you today?", 'bot');
};

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  input.value = '';

  // Simulating a response after 1.5 seconds
  setTimeout(() => {
    const responses = [
      "That's interesting!",
      "Can you tell me more?",
      "I see!",
      "Hmm, good point.",
      "Let's talk more about that."
    ];
    const randomReply = responses[Math.floor(Math.random() * responses.length)];
    addMessage(randomReply, 'bot');
  }, 1500);
}
