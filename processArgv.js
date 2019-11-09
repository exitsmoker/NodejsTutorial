process.argv.forEach((item, index) => {
    console.log(index + ':' + typeof(item) + ':', item);

    if(item == '--exit'){
        let exitTime = Number(process.argv[index+1]);
        
        setTimeout( () => {
            process.exit();
        }, exitTime)
    }
})

console.log('- process.env:', process.env);
console.log('- process.version:', process.version);
console.log('- process.versions:', process.versions);
console.log('- process.arch:', process.arch);
console.log('- process.platform:', process.platform);

console.log('- process.memoryUsage():', process.memoryUsage());
console.log('- process.uptime():', process.uptime());
