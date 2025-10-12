// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(7,9)

//REST OPERATOR:

function add(...num){
    sum=0;
    for (let n of num){
        sum=sum+n;
    }
    return sum;
}
console.log((add(6,7,9)))

//SPREAD OPERATOR:

const a=[2,3,4];
const b=[8,7,6];
const r=[a,b]
const s=[...a,...b]
console.log(r)
console.log(s)