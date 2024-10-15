
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
        return new Promise((resolve, reject) => {
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            document.getElementById('diceResult').textContent = `You rolled a ${diceRoll}`;

        if (diceRoll === 6) {
            console.log('Yay, you got a six! Fetching a joke...');
            resolve('Yay, you rolled a six!');
        } else {
            reject('Try again! No joke this time.');
        }
    });
}; 

//handle dice roll with async/await and fetch a joke if the dice roll is 6
    const handleDiceRoll = async () => {
        try {
            const result = await rollDice();
            console.log(result);

            const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
            const data = response.json();
            const joke = `${data.setup} \n ${data.punchline}`;
        document.getElementById('jokeDisplay').textContent = `Yay, you rolled a six! Here's a joke: ${joke}`;

    } catch (error) {
            console.error(error);
            document.getElementById('jokeDisplay').textContent = error;
        }
};

document.getElementById('fetchJokeButton').addEventListener('click', fetchJokeById);
document.getElementById('rollDiceButton').addEventListener('click', rollDice);


