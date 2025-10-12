let a=[10,20,30,40,90,88,11,100];
console.log(a)

let b=a.sort();
console.log(b);

let c=a.reverse();
console.log(c);


//ACTUAL SORTING:

//A) ASCENDING ORDER:

a.sort((p,q)=> (p-q));
console.log(a)

//B)DESCENDING ORDER:

a.reverse();
console.log(a);

a.sort((p,q)=>q-p);
console.log(a)