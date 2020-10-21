const talk = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ['Why do you want!', "I don't care", "get Lost", "You better don't talk", "See you never", "Hi, Zaryab", "What is that"]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('voice is activated')   // You can start talking
}

recognition.onresult = (event) => { // When you stop talking this function gets called
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript)
}

talk.addEventListener('click', () => {
    recognition.start();
});

const readOutLoud = message => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = greetings[Math.floor(Math.random() * greetings.length)]
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech);
}