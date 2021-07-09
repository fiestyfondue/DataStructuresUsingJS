let origDogs=["BullDogs","Beagle","Labrodor"];
let cats=new Array("American Curl","Bengal");
let birds= new Array("Falcons","Ducks","Flamingoes");


//Array Copy Elements
let slicedDogs=origDogs.slice(1,2);
let copyDogs=[...origDogs];
let dogs=origDogs.slice(0);

//Stack function (LIFO) Push and Pop
let pushDog=dogs.push("Golden Retriever");
let popDog=dogs.pop();
dogs[dogs.length]="Poodle";

//Add and Remove from First
let addFirst=dogs.unshift("Golden Retriever");
let shiftDog=dogs.shift();

//Atomic add and remove elements (Where how many to remove ,element list)
dogs.splice(2,1,"Pug","Boxer");

//Array function- Concat,spread,slice,sort
let animals=dogs.concat(cats,birds);
let newAnimal=[...dogs, ...cats, ...birds].toString();
let sortDog=dogs.slice(0).sort;
function scanArray([first,second]){console.log("Scan: "+first+" "+second);}
scanArray(animals);
let joinAnimals=animals.join(" ");
let allAnimals="";
for (let animal of animals) allAnimals +=animals+" ";

console.log("Animals : "+ animals);
