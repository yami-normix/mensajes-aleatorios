const messages = [
    "I love you!",
    "I miss you!!",
    "I adore you!!",
    "I want you!!",
    "You are my love!!",
    "I need you!!!",
];


const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };