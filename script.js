 function askuser() {
 	var answer="   "; // answer holder
 	var statement = "Right or wrong"; // input
 	var answer = prompt("Who's  that pokemon? ( case sensitive)" ); //question


 	 if (answer == "psyduck") { //lowercaps
 	 	document.getElementById("poke").src = "New.png";
		statement = "It's DJ KHALED...You played yourself";	
		document.getElementById("audioz").src= "win.mp3";
 	 }	

 	 else if (answer == "Psyduck") { //caps
 	 	document.getElementById("poke").src = "New.png";
 		 statement = "It's DJ KHALED...You played yourself";	
 		 document.getElementById("audioz").src= "win.mp3"; 	
 	 }	


 	 else { //other answers
 	 	document.getElementById("poke").src = "New.png";
 	 	statement = "It's DJ KHALED...You played yourself";
 	 	document.getElementById("audioz").src= "win.mp3";
 	 }

 	 alert(statement)
 }