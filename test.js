
function inserty(val, index, str) {
    console.log('called..')
    return val.slice(0, index) + str + val.slice(index)
}
// 2021-05-24T06:11:13Z
//console.log(inserty())

//console.log(new Date('2021-05-24T06:11:13Z').toDateString().substring(4))

// console.log('2021-05-24T06:11:13Z'.substring(0, 10).toDateString().substring(4).inserty(-5, ','))



// var a = new Date('2020-05-27');
// console.log(a.toDateString());
// console.log(a.toDateString().substring(4));

let z = new Date('2021-05-24T06:11:13Z').toDateString().substring(4)
//console.log(z.inserty(-5, ','))

function firstFunction() {
    return z
}

function abc() {
    var a = firstFunction();
    console.log(a)
    let z = inserty(a, -5, ',')
    console.log(z)
}

abc()


var time = new Date('2021-05-24T05:07:12z');
console.log(
    time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);