const readline = require('readline');
const searchEngine = require('./searchEngine');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('How product do you want to search?: ', function(response){
    searchEngine(response);
});