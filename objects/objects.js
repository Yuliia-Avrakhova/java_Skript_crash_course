
const cosmetics = {
    quantity: 10,
    price: "Medium",
    location: {
        country: "USA",
        state: "Texas",
        city: "Houston",
    }
};
console.log(cosmetics.location); // { country: 'USA', state: 'Texas', city: 'Houston' }
console.log(cosmetics.location.city);//Houston

const lipstick = {
    location: "USA",
    quantity: 100,
    colour: "Red",
    consistence: "liquid",
    "is this product good?": true,
}
console.log(lipstick["is this product good?"]); //true

const mascara = {
    location: "Europe",
    quantity: 300,
    colour: "Black",
    price: "Extra Class",
}

console.log(mascara.colour);//Black

mascara.city = "Berlin"; // add city property to mascara object
console.log(mascara.city); // Berlin

mascara.price = "Medium"; // change value of property

delete mascara.quantity; // removing quantity property from mascara object
console.log(mascara);   //{ location: 'Europe',colour: 'Black', price: 'Medium',city: 'Berlin'}

const tonalBasis = {
    location: "USA",
    quantity: 500,
    colour: "Ivory",
    price: "Medium",
}

let saleTonalBasis = (tonalBasis.quantity >=100)? "Yes, you can sale" : "No, you can't"; //"Yes, you can sale"
console.log(saleTonalBasis);

const powder = {
    location: "Europe",
    quantity: 100,
    colour: "Nude",
    price: "Extra Class",
}
console.log(powder.valueOf());
console.log(powder.hasOwnProperty('speak'));
console.log(powder.toString());

const cream = {
    location: "Germany",
    quantity: 3,
    "producer of cream": "Dr. Spiller", // name consist of more than one word
    "important component": "Vit A", // name consist of more than one word
}
console.log(cream["important component"]); // Vit A
console.log(cream["producer of cream"]); // Dr. Spiller

const perfumes ={
    location: "France",
    quantity: 78,
    producer: "Chanel",
    smell: "Nice",
}
 
let userParfumes = Object.assign ({},perfumes)  // Object.assign 

perfumes.smell = "Disgasting";
console.log(perfumes); //change of smell: 'Disgasting'
console.log(userParfumes); //but here is version that we had before { location: 'France', quantity: 78, producer: 'Chanel', smell: 'Nice' }

Object.assign(userParfumes,{city: "Paris", client:"Woman"}); // add new properties to Object.assign 
console.log(userParfumes); //location: 'France', quantity: 78,   producer: 'Chanel', smell: 'Nice', city: 'Paris',   client: 'Woman'

const makeupBrush = {
    location: "Ukraine",
    quantity: 90,
    colour: "Pink",
    material: "Natural",
}
 console.log (Object.keys(makeupBrush)); // Object keys [ 'location', 'quantity', 'colour', 'material' ]

const nailPolish = {
    location: "Poland",
    quantity: 300,
    colour: "Green",
    price: "Extra Class",
}
Object.freeze(nailPolish); //Object freeze
nailPolish.location= "Russia";
console.log(nailPolish.location); //Poland

console.log(Object.isFrozen(nailPolish));

const shampoon = {
    location: "Europe",
    quantity: 600,
    producer: "Dove",
    price: "Medium",
}
for (const [key, value] of Object.entries(shampoon)) { //Object.entries 
    console.log(`${key}: ${value}`); // location: Europe, quantity: 600, producer: Dove, price: Medium.
}

const antiperspirant = {
    "is this product good?": false,
    location: "Europe",
    quantity: 400,
    producer: "Rexona",
    price: "Medium",
};
if (antiperspirant.quantity > 500){   //Right number, sale it
    console.log("Too big number, you must sale it quiсkly");
}else if(antiperspirant.quantity>=100){
    console.log("Right number, sale it");
} else{
    console.log("Not enought"); 
}
console.log(antiperspirant.toString()); //[object Object]
console.log(antiperspirant.valueOf());




// Home work

//add new fields name with value "Felix", and age - 7
objWithNewFields = {};
objWithNewFields.name = "Felix";
objWithNewFields.age = 7;
console.log(objWithNewFields); //{ name: 'Felix', age: 7 }
// add new field sum, that should contain sum of fields a + b
const objWithSum = {
    a: 10,
    b: 10
  };
  objWithSum.sum = objWithSum.a + objWithSum.b;
  console.log(objWithSum.sum); //20
//rewrite nums array with [2,3] array
  const objWithNums = {
    nums: [1]
  };
  objWithNums.nums = [2, 3];
  console.log(objWithNums.nums); // [ 2, 3 ]