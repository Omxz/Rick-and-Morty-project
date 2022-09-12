const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log('voice is activated, you can use microphone');
}

recognition.onresult = function(event) {
const current = event.resultIndex;

const transcript = event.results[current][0].transcript;
content.textContent = transcript;
}

// add the listener to the btn

btn.addEventListener('click', () => {
  recognition.start();
});