let day=prompt("Enter the day");
let valday=day.toLowerCase();

switch(valday){
 case "monday":console.log("Montag");
               break;
case "tuesday":console.log("Dienstag");
                break;
case "wednesday":console.log("Mittwoch");
                break;
case "thursday":console.log("Donnerstag");
                break;
case "friday":console.log("Freitag");
                break;
case "saturday":console.log("Samstag");
                break;  
case "sunday":console.log("Sonntag");
break; 
default:console.log("Enter the correct day");        
}
