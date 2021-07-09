let keyString='a string'
let keyObj={}
let keyFunc=function(){}

//Setting the values
let myMap=new Map()
myMap.set(keyString,"value associated with 'a string'")
myMap.set(keyObj,'Value associated with keyObj')
myMap.set(keyFunc,'Value associated with Keyfunction')

//Getting the values
let size=myMap.size
let valStr=myMap.get(keyString)
let isKeyExist=myMap.has('a String')

for(let [key,value] of myMap) console.log("loop1: "+key +'='+value)
for(let [key,value] of myMap.entries()) console.log("loop2: "+key+'='+value)
for(let key of myMap.keys()) console.log("Loop3: "+key)
for(let value of myMap.values()) console.log("Loop4:"+value)

//Merge two Maps.The last repeated key wins
//Spread operators essentially converts a Map  to an array
let first=new Map([[1,'one'],[2,'two'],[3,'Three'] ])
let second=new Map([[1,'uno'],[2,'dos'] ])
let merged = new Map([...first,...second,[1,'eins']])

let haskey=merged.has(1)
let delkey=merged.delete(1)
if(merged.has(1)) console.log(merged.get(1)) //uno
console.log("Pos2: "+merged.get(2)) //dos
merged.clear();
console.log(merged.size)