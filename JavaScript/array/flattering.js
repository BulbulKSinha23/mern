let a=[12,23,445,[23,38,[42,11,96],31,73],[39,91,235,89],567,21,85];
console.log(a[2]);
console.log(a[3]);
console.log(a[3][2]);
console.log(a[3][2][1]);
console.log(5);

let b=a.flat(Infinity);
console.log(b);