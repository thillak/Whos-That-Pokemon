 function askuser() {
 	var answer="   "; // answer holder
 	var statement = "Right or wrong"; // input
 	var answer = prompt("Who's  that pokemon?"); //question


 	 if (answer == "psyduck") { //lowercaps
 	 	document.getElementById("poke").src = "new.png";
 	 	statement ="It's PSYDUCK... you are correct!";	 	
 	 }	

 	 if (answer == "Psyduck") { //caps
 	 	document.getElementById("poke").src = "new.png";
 	 	statement ="It's PSYDUCK... you are correct!";	 	
 	 }	


 	 else { //other answers
 	 	document.getElementById("poke").src = "new.png";
 	 	statement = "It's PSYDUCK!... unfortunately you can't recognize our glorious leader lord psyduck";
 	 }

 	 alert(statement)
 }