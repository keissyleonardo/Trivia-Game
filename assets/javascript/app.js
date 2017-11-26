$(document).ready(function() {

		var count=30;
		var timeleft= $('<div class="timer">');
		var index = 0;
		

		function timer(){
			count--;
			if (count <= 0) {
			console.log("times up!");
			} 

		} 

			
});


// setTimeout(function(){
		//   alert("Boom!");
		// }, 3000);


var correct = 0;
var wrong = 0;

// Questions & Answers Arranys 
var q1 = {
				question : 'What is Rachels favorite flower?',
				possibleAnswers : ['A. Orchids',
							 'B. Roses',
							 'C. Lilys',
							 'D. Tulips'],
				answer : 'C. Lilys'
			};

var q2 = {
				question: 'Where did Ross and Emily end up on their first date?',
				possibleAnswers: ['A. Italy ',
							 'B. Vermont',
							 'C. Connecticut',
							 'D. Florida'],
				answer : 'B. Vermont'
			};

var q3 = {
				question : "What does Joey wear to Monica and Chandler's wedding?",
				possibleAnswers : ['A. Basketball shorts',
							 'B. An Army uniform',
							 'C. Policy uniform',
							 'D. underwear'],
				answer : 'B. An Army uniform'
			};

var q4 = {
				question : '"Pi-VOT!" Who said it?',
				possibleAnswers : ['A. Ross ',
							 'B. Phoebe',
							 'C. Rachel',
							 'D. Chandler'],
				answer : 'A. Ross'
			};

var q5 = {
				question : "What was Monica's appartment number",
				possibleAnswers : ['A. 30',
							 'B. 20',
							 'C. 5',
							 'D. 3'],
				answer : 'B. 20'
			};

var q6 = {
				question : "Where is Rachel leaving to in 'The Last One?'",
				possibleAnswers : ['A. Paris',
							 'B. Milan',
							 'C. Amsterdam',
							 'D. Londons'],
				answer : 'A. Paris'
			};

var q7 = {
				question : 'What does Monica receive from her father?',
				possibleAnswers : ['A. A dog',
							 'B. A cat',
							 'C. A Porsche',
							 'D. An old Trophy'],
				answer : 'C. A Porsche'
			};

var q8 = {
				question : 'What song did Ross sing to make Emma laugh?',
				possibleAnswers : ['A. Milkshake',
							 'B. Baby Got Back',
							 'C. Baby One More Time',
							 'D. Party in the USA'],
				answer : 'B. Baby Got Back'
			};

var q9 = {
				question : 'Where has Rachel NOT worked?',
				possibleAnswers : ['A. Fortuna Fashion',
							 'B. Ralph Lauren',
							 'C. Bloomingdales',
							 'D. Gucci'],
				answer : 'D. Gucci'
			};

var q10 = {
				question : 'What is the dessert that Rachel and Chandler ate off the floor?',
				possibleAnswers : ['A. Chocolate Cake',
							  'B. Cheesecake',
							  'C. Red velvet',
							  'D. Vanilla Cake '],
				answer : 'B. Cheesecake'
			};

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

var classQuestion= $('<div class="question">');
var classquestionText= $('<h3 class="questionText">');

classQuestion.append(classquestionText);

var classAnswers= $('<div class="answers">');
var buttonA= $('<button class="answerchoice buttonA">');
var buttonB= $('<button class="answerchoice buttonB">');
var buttonC= $('<button class="answerchoice buttonC">');
var buttonD= $('<button class="answerchoice buttonD">');

	classAnswers.append(buttonA);
	classAnswers.append(buttonB);
	classAnswers.append(buttonC);
	classAnswers.append(buttonD);

classQuestion.append(classAnswers);

var questionList = $('#questionList');

questionList.append(classQuestion);


// function loadQuestion(questionSelection) {
// 	// console.log(questionSelection);
// 	// countdown.reset();
//   $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
//   $(".buttonA").html(questionArray[questionSelection].possibleAnswers[0]).show();
//   $(".buttonB").html(questionArray[questionSelection].possibleAnswers[1]).show();
//   $(".buttonC").html(questionArray[questionSelection].possibleAnswers[2]).show();
//   $(".buttonD").html(questionArray[questionSelection].possibleAnswers[3]).show();

// // 	console.log(questionArray[questionSelection]		);
// // //  getAnswer();  
// //  nextQuestion(index);
//}



// 		function setup(){
// 			index = 0;
// 			$('.question').append('<button id="startButton">Start</button>');
// 			$('#startButton').on('click', function() {
// 				$(this).hide();
// 				countdown.start();
// 			 	loadQuestion(index);
// 			});
// 		}		










		// function getAnswer() {

		// //  nextQuestion();
		// 	$('.answerchoice').on('click', function() {
		// 	  console.log('alert', index);
		// 		index++;
		// 		console.log('click', index);
		// 		$(".question").text('');
		// 		$("#buttonA").text('');
		// 		$("#buttonB").text('');
		// 		$("#buttonC").text('');
		// 		$("#buttonD").text('');
		// 		loadQuestion();
		// 	});	
		// }

		// function answerCorrect() {
		// 	correct++;
		// 	alert("Correct!");
		// 	console.log("correct");
		// }

		// function answerWrong() {
		// 	wrong++;
		// 	alert("Incorrect!");
		// 	console.log("wrong");
		// }

		// function showScore() {
		// 	$('.question').empty();
		// 	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
		// 	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
		// 	countdown.stop();
		// 	$('.timer').empty();

		// }



// $(".question").text('');
// $("#buttonA").text('');
// $("#buttonB").text('');
// $("#buttonC").text('');
// $("#buttonD").text('');
// index++;
// if (index < questionArray.length) {
// 	loadQuestion(index);
// }
