
let prevVal = '';

function calculator(value) {
    console.log(value);

    
    let currentval = prevVal + value;
    prevVal = currentval;
    

    value = value + value;

    if (value === 'c') {
        value = 0;
    }







    return currentval;
}

export {calculator};