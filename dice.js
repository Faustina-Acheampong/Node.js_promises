const rollDiceAndJoke = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${diceRoll}`); 

    if (diceRoll === 6) {
        console.log('Yay, you got a six! Fetching a joke...');
        fetch('https://official-joke-api.appspot.com/jokes/1')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            return response.json();
       })
       .then((data) => {
        const joke = data.contents.jokes[0].joke.text;
            console.log(joke);
        })
        .catch((error) => {
            console.error('Error fetching a joke:', error);
        });
    } else {
        console.log('Try again! No joke this time.');
    }
}

rollDiceAndJoke();