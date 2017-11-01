var timer = 90;
var intervalId;
var onMyRadio = document.getElementById(onMyRadio);


function run() {
	intervalId = setInterval(decrement, 1000);	
}

 function decrement() {
      timer--;
      $("#timerDisplay").html(timer);
      if (timer === 0) {
        alert("Time Up!");
        checkAnswer();
      }
    }

    function checkAnswer() {
    clearInterval(intervalId);
    
     var question1 = document.quiz.question1.value;
     var question2 = document.quiz.question2.value;
     var question3 = document.quiz.question3.value;
     var question4 = document.quiz.question4.value;
     var question5 = document.quiz.question5.value;
     var question6 = document.quiz.question6.value;
     var question7 = document.quiz.question7.value;
     var question8 = document.quiz.question8.value;
     var question9 = document.quiz.question9.value;
     var question10 = document.quiz.question10.value;
     var correctAnswers = 0;

     if (question1 === "Correct"){correctAnswers++};

     if (question2 === "Correct"){correctAnswers++};

     if (question3 === "Correct"){correctAnswers++};

     if (question4 === "Correct"){correctAnswers++};

     if (question5 === "Correct"){correctAnswers++};

     if (question6 === "Correct"){correctAnswers++};

     if (question7 === "Correct"){correctAnswers++};

     if (question8 === "Correct"){correctAnswers++};

     if (question9 === "Correct"){correctAnswers++};

     if (question10 === "Correct"){correctAnswers++};


 	$("#results").html("You got " + correctAnswers + " correct!");
 	timer = 90;
    }

    run();
    onMyRadio.play();