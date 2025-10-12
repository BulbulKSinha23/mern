//FUNCTION EXPRESSION:

const add=function(num1,num2){
    return num1+num2;
}
console.log(add(7,9))

//ARROW METHOD:

const sum=(n1,n2)=>{
    return n1+n2;
}
console.log(sum(2,3))

//OR:

const square=no=>no*no;
console.log(square(7))

//IIFE: Immediately Invoke Function Execution

(function greeting(){
    console.log("hello");
})();