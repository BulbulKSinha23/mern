let a=[12,23,34];
let b=a;
b.push(80)
console.log(a)  //[ 12, 23, 34, 80 ]
console.log(b)  //[ 12, 23, 34, 80 ] same output because copy of reference

const x=[23,35,565,335];
const y=x;
y=[51,20] //ERROR
console.log(x);
console.log(y);