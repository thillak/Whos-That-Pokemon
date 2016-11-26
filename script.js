 function askuser() {
 	var answer="   "; // answer holder
 	var statement = "Right or wrong"; // input
 	var answer = prompt("Who's  that pokemon? ( case sensitive)" ); //question


 	 if (answer == "DJ KHALED") { //lowercaps
 	 	document.getElementById("poke").src = "psykhaled.png";
		document.getElementById("audioz").src= "win.mp3";
		statement = "It's DJ KHALED... YOU ARE CORRECT ";	
 	 }	

 	 else if (answer == "Dj Khaled") { //caps
 	  	document.getElementById("poke").src = "psykhaled.png";	
 		document.getElementById("audioz").src= "win.mp3"; 	
 		statement = "It's DJ KHALED... YOU ARE CORRECT ";	
 	 }	


 	 else { //other answers
 	 	document.getElementById("poke").src = "psykhaled.png";
 	 	document.getElementById("audioz").src= "win.mp3";
 	 	statement = "It's DJ KHALED...You played yourself";
 	 }

 	 alert(statement)
 }