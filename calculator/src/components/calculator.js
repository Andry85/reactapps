function calculator(prev, value) {

    let index;
    let before;
    let afetr;

    function calc(operand) {
        index = prev.indexOf(operand);
        before = prev.slice(0, index);
        afetr = prev.slice(index+1, prev.length);
    }

    if (value === '=') {
        if (prev.indexOf('+') !== -1) {
            calc('+');
            return value = parseInt(before) + parseInt(afetr);
        } else if (prev.indexOf('-') !== -1) {
            calc('-');
            return value = parseInt(before) - parseInt(afetr);
        } else if (prev.indexOf('*') !== -1) {
            calc('*');
            return value = parseInt(before) * parseInt(afetr);
        } else if (prev.indexOf('/') !== -1) {
            calc('/');
            return value = parseInt(before) / parseInt(afetr);
        } else if (prev.indexOf('%') !== -1) {
            calc('%');
            return value = parseInt(before) % parseInt(afetr);
        }
    } else if (value === 'c') {
        return value = '';
    } else if (value === '+-') {
        if (prev > 0) {
            return value = -prev;
        } else {
            return value = -prev;
        }
    }

    return prev + value;

}

export {calculator};