
//using for loop
const choice = ['blue', 'briyani', 'audi', 'europa'];
for (i = 0, len = choice.length, text = ""; i < len; i++) {
    console.log( `My choice is ${choice[i]}` );
  }
  //using forEach

  let collection = ['blue', 'briyani', 'audi', 'europa'];
collection.forEach(function (c, v){
console.log("My choice"+ v+"is"+c );
});
//using object
let collection={
    color:"blue",
    food:"briyani",
    car:"audi",
    country:"europa"
};

console.log("my fav car is"+collection.car);

