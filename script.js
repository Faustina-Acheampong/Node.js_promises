
const fetchJokeById = async () => {
    const jokeId = document.getElementById('jokeIdInput').value;
    
    if (!jokeId) {
        alert('Please enter a valid joke ID.');
        return;
    }

    try {
        const response = await fetch(`https://official-joke-api.appspot.com/jokes/${jokeId}`)
        const data = await response.json();
        const joke = `${data.setup} \n ${data.punchline}`;
        document.getElementById('jokeDisplay').textContent = joke;

    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('jokeDisplay').textContent = 'Error fetching joke.';
    }
};

    const rollDice = () => {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        document.getElementById('diceResult').textContent = `You rolled a ${diceRoll}`;

    if (diceRoll === 6) {
        console.log('Yay, you got a six! Fetching a joke...');

    fetch('https://official-joke-api.appspot.com/jokes/random')   
    .then((response) => response.json()) 
    .then((data) => {
        const joke = `${data.setup} \n ${data.punchline}`;
        document.getElementById('jokeDisplay').textContent = `Yay, you got a six! Here's a joke: ${joke}`;
        })

        .catch((error) => {
            console.error('Error fetching a joke:', error);
            document.getElementById('jokeDisplay').textContent = 'Failed to fetch joke.';
        });
    } else {
        console.log('Try again! No joke this time.');
        document.getElementById('jokeDisplay').textContent = 'Try again! No joke this time.';

    }
};

document.getElementById('fetchJokeButton').addEventListener('click', fetchJokeById);
document.getElementById('rollDiceButton').addEventListener('click', rollDice);


