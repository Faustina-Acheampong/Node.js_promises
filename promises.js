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
    console.log(response);
   });

};



fetchAdviceById(185);