$(document).ready(function() {



	var intervalId = setInterval(timer, 1000); 
	var count=3;
	var timeleft= 0;

	// Timer starts 
	function timer(){
		count--;
		if (count <= 0) {
			clearInterval(intervalId);
		}
	}

	function start(){
		$('#StartButton').on("click", function(){
			$('display').html(timeleft);
				alert("this worked");
		});
	}

			start();

});

// Questions & Answers Arranys 
var q1 = {
				question : '1. What is Rachels favorite flower?',
				possibleAnswers : ['A. Orchids',
							 'B. Roses',
							 'C. Lilys',
							 'D. Tulips'],
				answer : 'C. Lilys'
			};

var q2 = {
				question: '2. Where did Ross and Emily end up on their first date?',
				possibleAnswers: ['A. Italy ',
							 'B. Vermont',
							 'C. Connecticut',
							 'D. Florida'],
				answer : 'B. Vermont'
			};

var q3 = {
				question : "3. What does Joey wear to Monica and Chandler's wedding?",
				possibleAnswers : ['A. Basketball shorts',
							 'B. An Army uniform',
							 'C. Policy uniform',
							 'D. underwear'],
				answer : 'B. An Army uniform'
			};

var q4 = {
				question : '"4. Pi-VOT!" Who said it?',
				possibleAnswers : ['A. Ross ',
							 'B. Phoebe',
							 'C. Rachel',
							 'D. Chandler'],
				answer : 'A. Ross'
			};

var q5 = {
				question : "5. What was Monica's appartment number",
				possibleAnswers : ['A. 30',
							 'B. 20',
							 'C. 5',
							 'D. 3'],
				answer : 'B. 20'
			};

var q6 = {
				question : "6. Where is Rachel leaving to in 'The Last One?'",
				possibleAnswers : ['A. Paris',
							 'B. Milan',
							 'C. Amsterdam',
							 'D. Londons'],
				answer : 'A. Paris'
			};

var q7 = {
				question : '7. What does Monica receive from her father?',
				possibleAnswers : ['A. A dog',
							 'B. A cat',
							 'C. A Porsche',
							 'D. An old Trophy'],
				answer : 'C. A Porsche'
			};

var q8 = {
				question : '8. What song did Ross sing to make Emma laugh?',
				possibleAnswers : ['A. Milkshake',
							 'B. Baby Got Back',
							 'C. Baby One More Time',
							 'D. Party in the USA'],
				answer : 'B. Baby Got Back'
			};

var q9 = {
				question : '9. Where has Rachel NOT worked?',
				possibleAnswers : ['A. Fortuna Fashion',
							 'B. Ralph Lauren',
							 'C. Bloomingdales',
							 'D. Gucci'],
				answer : 'D. Gucci'
			};

var q10 = {
				question : '10. What is the dessert that Rachel and Chandler ate off the floor?',
				possibleAnswers : ['A. Chocolate Cake',
							  'B. Cheesecake',
							  'C. Red velvet',
							  'D. Vanilla Cake '],
				answer : 'B. Cheesecake'
			};

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];



function createNewQuestionHTML(theQuestionObject, unique) {
	// Create basic empty markup
	var classQuestion= $('<div class="question">');
	var classquestionText= $('<h3 class="questionText">');

	classQuestion.append(classquestionText);

	var words = "answers" + unique;

	var classAnswers= $('<div class="answers">');
	var buttonA= $('<input type="radio" name="answers'+ unique +'" value="buttonA" class="answerchoicebuttonA">');
	var buttonB= $('<input type="radio" name="answers'+ unique +'" value="buttonB" class="answerchoice buttonB">');
	var buttonC= $('<input type="radio" name="answers'+ unique +'" value="buttonC" class="answerchoice buttonC">');
	var buttonD= $('<input type="radio" name="answers'+ unique +'" value="buttonD" class="answerchoice buttonD">');

	classAnswers.append(buttonA);
	classAnswers.append(buttonB);
	classAnswers.append(buttonC);
	classAnswers.append(buttonD);

	classQuestion.append(classAnswers);

	// Fill in the values
	classquestionText.html(theQuestionObject.question);
	buttonA.after(theQuestionObject.possibleAnswers[0]);
	buttonB.after(theQuestionObject.possibleAnswers[1]);
	buttonC.after(theQuestionObject.possibleAnswers[2]);
	buttonD.after(theQuestionObject.possibleAnswers[3]);

	// Add it to the page HTML
	var questionList = $('#questionList');
	questionList.append(classQuestion);



}

createNewQuestionHTML(q1, 1);
createNewQuestionHTML(q2, 2);
createNewQuestionHTML(q3, 3);
createNewQuestionHTML(q4, 4);
createNewQuestionHTML(q5, 5);
createNewQuestionHTML(q6, 6);
createNewQuestionHTML(q7, 7);
createNewQuestionHTML(q8, 8);
createNewQuestionHTML(q9, 9);
createNewQuestionHTML(q10, 10);



var userTotal= 0; 
var wins= 0;
var losses = 0;
var won = true;


$("#numberWin").text(wins); 
$("#numberLoss").text(losses);




function scoreBoard () {
	if (q1.possibleAnswers == q1.answer){
	wins++;
	alert("Good");
	}
	// if (q1.possibleAnswers !== q1.answer){
	// 	losses++;
	// 	alert("Not Good");
	// }

}
scoreBoard();


