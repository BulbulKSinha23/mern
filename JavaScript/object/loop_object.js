user={
    name:"bulbul", age:19, email:"sinha@gmail.com"
}
// IN for loop
for (keys in user){     
    console.log(keys)
}
for (values in user){
    console.log(user[values])
}
// OF for loop:
const temparr=Object.keys(user)
for (let keys of temparr){
    console.log(keys,user[keys])
}
