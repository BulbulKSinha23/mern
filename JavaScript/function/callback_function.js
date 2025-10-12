function greet(){
    console.log("hello");
}
function meet(callback){
    console.log("let's meet");
    callback();
}
// greet(meet());
// meet(greet())

meet(greet);