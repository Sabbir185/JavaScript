const {performance} = require('perf_hooks')

const start_Time = performance.now();

let sum=0;
for (let i = 0; i < 100; i++) {
    sum += i;
}

const end_Time = performance.now();

console.log(`performance times : ${end_Time - start_Time} milliseconds.`);