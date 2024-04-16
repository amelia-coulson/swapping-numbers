// Prompt user to enter string
let askUserNum = prompt(`Please enter 3 or more numbers`);

// convert into an array
let numArray = askUserNum.split(``);

// check if array is less than 3
if (numArray.length < 3) {
    console.log(`You must enter at least 3 numbers`);
} else {
    // declare variblaes pointing out 2nd and last nums in array
    let secondNum = numArray[1]
    let lastNum = numArray[numArray.length - 1];
    // checks until i = 1 and instructions begin 
    for (i = 0; i < numArray.length; i++) {
        if (i === 1) {
            // swap 2nd and last num
            numArray.splice(1, 1, lastNum);
            numArray.splice(-1, 1, secondNum);
            // output original user input and new swapped num
            console.log(`Original Number: ${askUserNum}`);
            console.log('New number: ' + numArray.join(''));
        }
    }
}