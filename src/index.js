const stringLength = (string) => {
    const count = string.length;

    if (count > 0 && count <= 10) {
        return count;
    } else {
        throw new Error('String must be at least 1 character long and not longer than 10 characters');
    }
}

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

module.exports = {stringLength, reverseString};