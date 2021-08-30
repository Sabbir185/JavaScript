// Real life
// promise -> pending
// pending -> successful OR failure

// JavaScript Promise
// Promise -> Async Operation (initial state: Pending)
// Pending -> success --> resolved
// Pending -> failure --> rejected

const prom = new Promise((resolve, reject) => {
    // async operation => result
    resolve('The promise is success');
    reject('The promise is fail!');
})

// initial pending
// console.log(prom)

prom
    .then(data => console.log(data)) // resolve
    .catch(err => console.log(err)); // reject


console.log('Sync line !!!! print first')