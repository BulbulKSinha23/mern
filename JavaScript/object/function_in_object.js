const user={
    "name":"bulbul", age:19, roll:17, reg:23,greeting:function(){
        console.log("hello");
    }
}
user.greeting()
console.log(`the name of the user is ${user.name}`)


const user2={...user};  ///... triple dot for deep copy
user2.add="bihar"
console.log(user)
console.log(user2)
