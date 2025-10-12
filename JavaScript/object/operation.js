user={
    name:"bulbul", age:19, email:"sinha@gmail.com"
}
console.log(user)
console.log(user.name)
console.log(typeof user)

//CRUD OPERATOR:
// Create, Read, Update, Delete

user.roll=17
console.log(user)   //upader

delete user.email
console.log(user)

console.log(user["name"])


console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))