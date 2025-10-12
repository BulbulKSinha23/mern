let a=[1,2,3,4];
let b=["barkha","bulbul","vishwash"];
let c=[52,89,"sinha",true];

let d=a.concat(b,c);
console.log(d);

let p=[a,b,c];
console.log(p);

a.push(b,c);
console.log(a);

//SPREAD OPERATOR:

let s=[...a,...b,...c];
console.log(s);