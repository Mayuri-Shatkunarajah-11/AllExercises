function greetOnePerson(personName){
    return "hello"+personName;

}
 let personName="Carlos";
let personsName="Mark";
 let a=personsName=>("hello"+personName + "hello"+personsName );
 console.log(a(personsName,personsName));
 //
 let greetingTopeople =(name1,name2)=>"hello" +name1+ "hello"+name2;
 console.log(greetingTopeople("mayu","yalda"));