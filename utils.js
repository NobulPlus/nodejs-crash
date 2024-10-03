function generateNumber (){
    return Math.floor(Math.random() * 100) + 1;
}

function celciusTofahrenheit (celcius){
    return (celcius * 9/5) + 32;
}

module.exports = {
    generateNumber,
    celciusTofahrenheit,
};