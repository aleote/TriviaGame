
$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What ingredient gives beer its flavor?',
	possibleAnswers : ['A. Brewers Yeast',
				 'B. Malt',
				 'C. Hops',
				 'D. Barely'],
	key : [false, false, true, false],
	answer : 'C. Hops'
};

var q2 = {
	question: 'What is the oldest brewery in America?',
	possibleAnswers: ['A. Bud Light',
				 'B. Yuengling',
				 'C. Miller Lite',
				 'D. PBR '],
	key : [false, true, false, false],
	answer : 'B. Yuengling'
};

var q3 = {
	question : 'What holiday produced the highest beer sales in 2016 in America?',
	possibleAnswers : ['A. St. Patrick\'s Day',
				 'B. 4th of July',
				 'C. Father\'s Day',
				 'D. Labor Day'],
	key : [false, true, false, false],
	answer : 'B. 4th of July'
};

var q4 = {
	question : 'What is the highest percentage beer ever made?',
	possibleAnswers : ['A. 65% ABV',
				 'B. 20% ABV',
				 'C. 100% ABV',
				 'D. 45% ABV'],
	key : [true, false, false, false],
	answer : 'A. 65% ABV '
};

var q5 = {
	question : 'What does Cenosillicaphobia mean?',
	possibleAnswers : ['A. A fear of a hangover',
				 'B. A fear of an empty beer glass',
				 'C. A fear of dark beer',
				 'D. A fear of opening can tabs'],
	key : [false, true, false, false],
	answer : 'B. A fear of an empty beer glass'
};

var q6 = {
	question : 'Which of the following statements is false?',
	possibleAnswers : ['A. Ireland is the largest consumer of Guinness beer.',
				 'B. The worlds longest hangover lasted 4 weeks',
				 'C. Slugs like beer',
				 'D. Beer was not considered an alcoholic beverage in Russia until 2013'],
	key : [true, false, false, false],
	answer : 'A. Ireland is the largest consumer of Guinness beer.'
};

var q7 = {
	question : 'What do you win at the Wife Carrying World Championship if you win?',
	possibleAnswers : ['A. Respect from all the husbands',
				 'B. A cool medal',
				 'C. Your wife\'s weight in beer.',
				 'D. A lifetime supple of beer'],
	key : [false, false, true, false],
	answer : 'C. Your wife\'s weight in beer'
};

var q8 = {
	question : 'How many pints of beer is wasted each year to mustaches?',
	possibleAnswers : ['A. 10,300 pints',
				 'B. 50,000 pints',
				 'C. 100,500 pints',
				 'D. 162,719 pints'],
	key : [false, false, false, true],
	answer : 'D. 162,719 pints'
};

var q9 = {
	question : 'How do you chill a warm beer quickly?',
	possibleAnswers : ['A. Place it in the freezer',
				 'B. Pour it in an frozen glass',
				 'C. Add ice to it',
				 'D. Ice and salt in a bowl, and stir can in it.'],
	key : [false, false, false, true],
	answer : 'D.Ice and salt in a bowl, and stir can in it'
};

var q10 = {
	question : 'Which war taxed beer to help pay for it?',
	possibleAnswers : ['A. World War II',
				  'B. The Cival War',
				  'C. Vietnam War',
				  'D. World War I'],
	key : [false, true, false, false],
	answer : 'B. The Cival War'
}
// var picturesArray = ["assets/images/hops.jpg","yuengling-lager-6-pack.jpg", "july 4th giphy.gif", "ABV gif.gif","empty-glass.jpg", "Guinness.jpg","wife.gif","beer mustache.png","ice cold beer gif.gif", "civil war gif.gif"]
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}




function setup() {
	index = 0;
	$(".answerchoice").hide();
	$('.question').append();
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {


	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

//instead of an alert I want it to show on the screen and show the pictures of the correct answer
function answerCorrect() {
	correct++;
	// $("#outcome").append("<h2> Correct! </h2>");
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].key[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].key[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].key[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].key[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }



 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});



});