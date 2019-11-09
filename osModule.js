const fs = require('fs');

let text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);

fs.readFile('textfile.txt', 'utf8', (error, data)=>{
    if(error){
        console.log(e);
    }
    else {
        console.log(data);
    }
});