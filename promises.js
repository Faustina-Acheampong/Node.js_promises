const checkNumber = (number) => {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number' || number % 1 !== 0) {
            reject('Invalid input. Please enter a whole number.');
        } else if (number < 1 || number > 1000) {
            reject('Number must be between 1 and 1000.');
        } else {
            resolve(number);
        }
    });
}
checkNumber(1002)
    .then((message) => {
        console.log(message);     
    })
    .catch((error) => {
        console.error(error);
    });


// Function to fetch random advice  
const fetchAdviceById = (id) => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
   .then((response) => {
    //console.log(response);
    if (!response.ok) {
      throw new Error('Failed to fetch advice');
   }
    return response.json();
})
   .then((data) => {
    const advice = data.slip.advice;
    console.log(`Advice (ID: ${id}): ${advice}`);      
   })
   .catch((error) => {
    console.error('Error fetching advice:', error); 
   });
}

fetchAdviceById(15);

const rollDiceAndJoke = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${diceRoll}`); 

    if (diceRoll === 6) {
        console.log('Yay, you got a six! Fetching a joke...');
        fetch('https://official-joke-api.appspot.com/jokes/random')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            return response.json();
       })
       .then((data) => {
            console.log(`Joke: ${data.setup}...${data.punchline}`);
        })
    }
}

rollDiceAndJoke();