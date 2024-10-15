 document.getElementById('jokeButton').addEventListener('click', fetchJokeById);
 document.getElementById('diceButton').addEventListener('click', rollDice);

const fetchJokeById = () => {
    const jokeId = document.getElementById('jokeIdInput').value;
    
    if (!jokeId) {
        alert('Please enter a valid joke ID');
        return;
    }
    fetch('https://official-joke-api.appspot.com/jokes/1')
    
       .then((response) => response.json())
       .then((data) => {
            const joke = data.setup + '\n' + data.punchline;
            document.getElementById('jokeDisplay').textContent = joke;
        })
        .catch((error) => {
            console.error('Error fetching joke:', error);
            document.getElementById('jokeDisplay').textContent = 'Error fetching joke.';
        });
    
    
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceRollDisplay').textContent = `You rolled a ${diceRoll}`;

    if (diceRoll === 6) {
        console.log('Yay, you got a six! Fetching a joke...');

        fetch('https://official-joke-api.appspot.com/jokes/1')   
       .then((response) => response.json()) 
       .then((data) => {
         const joke = data.setup + '\n' + data.punchline;
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
