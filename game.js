var timer = 90;
var intervalId;

function run() {
	intervalId = setInterval(decrement, 1000);	
}

 function decrement() {
      timer--;
      $("#timerDisplay").html(timer);
      if (timer === 0) {
        alert("Time Up!");
        checkAnswer();
        timer = 90;
      }
    }

    function checkAnswer() {
    clearInterval(intervalId);
    
     var question1 = document.quiz.question1.value;
     var question2 = document.quiz.question2.value;
     var question3 = document.quiz.question3.value;
     var correctAnswers = 0;

     if (question1 === "Correct"){correctAnswers++};

     if (question2 === "Correct"){correctAnswers++};

     if (question3 === "Correct"){correctAnswers++};

 	$("#results").html("You got " + correctAnswers + " correct!");

    }

    run();