const process = require('process');

process.on('exit', ()=>{
    console.log('안녕히 계세요..!');
});

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

