let fruits=["Banana","Apples","Oranges","Blueberries"];
fruits.forEach(function(val,index){
    console.log("The fav fruit is"+" "+fruits[2]);
 


});
fruits.shift();
console.log("Banana deleted by shift function.The remaining is:"+" "+fruits);
fruits.sort();
console.log("The sorted list:"+" "+fruits);
fruits.push("Kiwi");
console.log("Added kiwi in the list:"+" "+fruits);
//delete fruits[0];
fruits.splice(0,1);
console.log("Deleted Apples in the list:"+" "+fruits);
fruits.reverse();
console.log("The reverse list is:"+" "+fruits);
//Car
let car=["Audi","BMW","Ferrari","Toyato"];
console.log(car);
let removed=car.splice(0,1,"Benz","Lambo");
console.log(removed);
console.log(car);
