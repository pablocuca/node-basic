const os = require('os');
const log = require('./logger')

setInterval(()=>{
    const { freemem, totalmem } = os;
    
    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 4024);
    const percents = parseFloat(100 - (mem / total) * 100).toFixed(2);
    
    const stats = {
        date: `${new Date().toString()}`,
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }
    
    console.clear()
    console.log('=== PC STATS ===');
    console.table(stats);
    
    log(`${JSON.stringify(stats)}\n`);
}, 3000);