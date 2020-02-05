let obj = Object.create({})
obj.a = 1;
obj.b = 2;
console.log(obj)
let obj1 = {a:1,b:2,c:3}
for (const key in obj1) {
    console.log(key)
    
}
let key = Object.keys(obj1)
for(const val of key){
    console.log(val)
}
let obj2 = {}

