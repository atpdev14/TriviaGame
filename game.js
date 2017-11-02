var timer = 180;
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

    $("#resultsDiv").hide();
    $("#button").click($(
      "#resultsDiv").slideDown()
    );

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

     if (question1 === "Chocolate Syrup"){correctAnswers++};

     if (question2 === "The babysitting and the stranger upstairs"){correctAnswers++};

     if (question3 === "Knifes her"){correctAnswers++};

     if (question4 === "Jason Vorhees"){correctAnswers++};

     if (question5 === "Silence of the Lambs"){correctAnswers++};

     if (question6 === "Seven"){correctAnswers++};

     if (question7 === "April Fool's Day"){correctAnswers++};

     if (question8 === "Boris Karloff"){correctAnswers++};

     if (question9 === "Bela Lugosi"){correctAnswers++};

     if (question10 === "Rocky Horror Picture Show"){correctAnswers++};


 	$("#results").html("You got " + correctAnswers + " correct!");
 	timer = 90;
    }

    run();
    onMyRadio.play();