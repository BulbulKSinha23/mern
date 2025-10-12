s=`My name is Bulbul Kumari Sinha!`;
console.log(s)
console.log(s.length)
console.log(s[20])
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.indexOf(`Bulbul`))
console.log(s.lastIndexOf(`Bulbul`))
console.log(s.includes(`Bulbul`))


//STRING SLICING:


console.log(s.slice(1,9))
console.log(s.substring(1,9)) //no negative substring
console.log(s.replace(`Bulbul`,`Barkha`))
console.log(s.replaceAll("i","@"))

//CLEANING UP WHITE SPACES:

a=` bulbul  `
b=a.trim()
c=a.trimEnd()
d=a.trimStart()
console.log(`${a} and length is ${a.length}`)
console.log(`${b} and length is ${b.length}`)
console.log(`${c} and length is ${c.length}`)
console.log(`${d} and length is ${d.length}`)


//SPLIT:

let name="barkha bulbul vishwash varsha"
console.log(name.split(" "))