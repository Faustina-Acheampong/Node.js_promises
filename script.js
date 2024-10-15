document.addEventListener('DOMContentLoaded', () => {

    const fetchJokeById = () => {
        const jokeId = document.getElementById('jokeIdInput').value;
        console.log(`Fetching joke with ID: ${jokeId}`);
        
        if (!jokeId) {
            alert('Please enter a valid joke ID.');
            return;
        }

        fetch(`https://official-joke-api.appspot.com/jokes/${jokeId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Invalid joke ID. Please enter a valid ID between 1 and 1000.');
            }
            return response.json();
        })
        .then((data) => {
                const joke = `${data.setup} \n ${data.punchline}`;
                document.getElementById('jokeDisplay').textContent = joke;
            })
            .catch((error) => {
                console.error('Error fetching joke:', error);
                document.getElementById('jokeDisplay').textContent = 'Error fetching joke.';
            });
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
 
});
