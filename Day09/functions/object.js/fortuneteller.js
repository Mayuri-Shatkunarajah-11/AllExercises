
//Object
let person={
    partnerName:"Shatkunarajah",
    numOfChildren:1,
    place:"Argau",
     jobTitle:"Software programmer",
     template:function(){
console.log(`You will be a ${this.jobTitle} in 
${this.place},and married to ${this.partnerName} with ${this.numOfChildren} kid`);
}
};

person.template();
//using function
let person={
    partnerName:prompt("Enter the partnername"),
    numOfChildren:prompt("Enter the number of child"),
    place:prompt("Enter the place"),
     jobTitle:prompt("Enter the jobtitle"),
     template:function(){
console.log(`You will be a ${this.jobTitle} in 
${this.place},and married to ${this.partnerName} with ${this.numOfChildren} kid`);
}
};
console.log(person.template());
//madlib
let template={

        noun:prompt("Enter the noun"),
        verb:prompt("Enter the verb"),
        adjective:prompt("Enter the adjective"),
         adverb:prompt("Enter the adverb"),
         madlib:function(){
    console.log(`${this.noun} will be a  in 
    forest ,and I  ${this.verb} with  ${this.adjective} lion ${this.adverb}`);
    }
    };
    console.log(template.madlib());
    //madlibHaifei's 
    let template={

        noun:prompt("Enter the noun"),
        verb:prompt("Enter the verb"),
        adjective:prompt("Enter the adjective"),
         adverb:prompt("Enter the adverb")
    };
let madlib = function(input){
    console.log(`${input.noun} will be a  in 
    forest ,and I  ${input.verb} with  ${input.adjective} lion ${input.adverb}`);
    };
  madlib(template);
