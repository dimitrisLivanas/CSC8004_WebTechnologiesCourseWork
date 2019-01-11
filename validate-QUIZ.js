/* The validate method that calls all the othe methods in the program*/
function validate() {
	
	userInfo();
    questionOne();
	questionTwo();
	questionThree();
	questionFour();
	verif();
	
    return false;
    
}
 /* Checks if the the Name is written. If it is not it paints the question yellow and alert the user. 
 If the user fills the name the color return to white. */
function userInfo() {
    if (document.forms[0].UserInfo.value == "") {
    	alert("Please fill in your name");
		document.getElementById("UserInfo").style.backgroundColor = "yellow";
        return false;
    }
	 document.getElementById("UserInfo").style.backgroundColor = "white";
    return false; 
}

/* Checks if the user have chossen an answer. If not alerts the user and paints the questino yellow.
 After answered the question becomes again white. */
function questionOne() {

    if(document.forms[0].Q1.value == "") {
    	alert("Question 1 is not answered");
		document.getElementById("Q1").style.backgroundColor = "yellow";
        return false;
    }
	document.getElementById("Q1").style.backgroundColor = "white";
	
}

/* Checks if the user has given even one answer. If not alerts and change the color to yellow*/
function questionTwo() {
    var choiceA = document.getElementById("Q2a").checked;
    var choiceB = document.getElementById("Q2b").checked;
    var choiceC = document.getElementById("Q2c").checked;
    var choiceD = document.getElementById("Q2d").checked;

    if ((choiceA==false)&&(choiceB==false)&&(choiceC==false)&&(choiceD==false))
    {
		
    	alert("Question 2 is not answered.");
		document.getElementById("Q2").style.backgroundColor = "yellow";
		return false;

    } 
	document.getElementById("Q2").style.backgroundColor = "white";
    
}

/* Same function as questionTwo */
function questionThree() {
	
	var answerA = document.getElementById("Q3a").checked;
    var answerB = document.getElementById("Q3b").checked;
	var answerC = document.getElementById("Q3c").checked;
	var answerD = document.getElementById("Q3d").checked;

	if ((answerA==false)&&(answerB==false)&&(answerC==false)&&(answerD==false))
	{
		
		alert("Question 3 is not answered");
		document.getElementById("Q3").style.backgroundColor = "yellow";
		return false;
    }
    document.getElementById("Q3").style.backgroundColor = "white";
        
}

/* Like in the name tag it checks if the user has written anything in the answer. If not it chances to yellow */
function questionFour() {
	if (document.forms[0].Q4.value == "") {
		
    	alert("Question 4 is not answered");
		document.getElementById("Q4").style.backgroundColor = "yellow";
    	return false;
    }
	document.getElementById("Q4").style.backgroundColor = "white";
	
}

/* The variables are the correct answers. With if statments this function checks if the answers of the user 
 are the same as the variables. If yes it adds one point to the user's score and notifies the user with an alert.
 For the fourth answer i tried using regular expressions to make the programm to ignore the casing for the 
 correct answer. */
function score() {
	var points = 0;
	var pointQ2a = document.getElementById("Q2a").checked;
	var pointQ2c = document.getElementById("Q2c").checked;
	var regExObj = /[a-z]+/ig;
	var answerFour = document.forms[0].Q4.value;
			
	if (document.forms[0].Q1.value == "c") {
		points++;
		
	}
	
	if (document.forms[0].Q3.value == "b") {
	    points++;
		
	}
	
	if (pointQ2a == true) {
		points++;
		
	}
	
	if (pointQ2c == true) {
		points++;
		
	}
	
	if (regExObj.test(answerFour)) {
		points++;
	}
	
	alert("Your score is " + points + " out of 5");
	return false;
	
}

/* Veriffies that all questions have been before it calls the score method to calculate and alert the score. */
function verif() {
	var choiceA = document.getElementById("Q2a").checked;
    var choiceB = document.getElementById("Q2b").checked;
    var choiceC = document.getElementById("Q2c").checked;
    var choiceD = document.getElementById("Q2d").checked;
	
	var answerA = document.getElementById("Q3a").checked;
    var answerB = document.getElementById("Q3b").checked;
	var answerC = document.getElementById("Q3c").checked;
	var answerD = document.getElementById("Q3d").checked;
	
    if (document.forms[0].UserInfo.value == "") {
		
	} else if (document.forms[0].Q1.value == "") {
		
	} else if ((choiceA==false)&&(choiceB==false)&&(choiceC==false)&&(choiceD==false)) {
		
	} else if ((answerA==false)&&(answerB==false)&&(answerC==false)&&(answerD==false)) {
		
	} else if (document.forms[0].Q4.value == "") {
		
    } else {
		
		score();
		return false;
	}
} 