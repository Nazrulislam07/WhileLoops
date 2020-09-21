console.log("Printing all number betwenn -10 and 19")
//Printing all number betwenn -10 and 19
var counter = -10;
 
 while(counter < 20){
 	console.log(counter)
 	counter++;
 }


/*console.log(" Printing all even numbers between 10 and 40")
var counter = 10;
 
 while(counter <= 40){
 	console.log(counter);
 	counter+=2;
}*/
// OR other way more efficent

console.log(" Printing all even numbers between 10 and 40")
var counter = 10;
 
 while(counter <= 40){
 	if(counter % 2 === 0){
 		console.log(counter);
 	}
 	counter +=1;
}



console.log("Printing all odd numbers between 300 and 333")
//Printing all odd numbers between 300 and 333
var counter = 300;

while(counter <= 333){
	if(counter % 2 !== 0){
		console.log(counter)
	}
	counter+=1;
}


console.log("Printing all numbers divisible by 5 and 3 between 5 and 50")
//Printing all odd numbers between 300 and 333

var counter = 5;

while(counter <= 50){
	if(counter % 5 === 0 && counter % 3 === 0){
		console.log(counter)
	}
	counter +=1;
}


/*Annoy-omatic
•	Ask the user “Are we there yet”
•	Keep asking again until they enter “yes” or "yeah"
•	Then, alert “Yay, we finally made it!”
*/

var answer = prompt("Are we there yet ?");

while(answer !== "yes" && answer !== "yeah"){
	var answer = prompt("Are we there yet ?");

}
alert("Yay we made it!!!");

/*Annoy-omatic v2
•	Ask the user “Are we there yet”
•	Keep asking again until they enter “yes” or "yeah"
•	Then, alert “Yay, we finally made it!”
BONUS: A user can enter any string as long as it contains "yes" or "yeah" in it.
It could be somthing like that yes we are or we are there yeah.
so to do that there's a method we can use called indexOf.
*/
var answer = prompt("Are we there yet ?");

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	var answer = prompt("Are we there yet ?");

}
alert("Yay we made it!!!");



