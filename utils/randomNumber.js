function generateRandomNumber(upper)
{
    return Math.floor(Math.random() * upper);
}

function generateRandomNumberInc(upper)
{
    return Math.floor(Math.random() * upper + 1);
}

export {
    generateRandomNumber,
    generateRandomNumberInc
}