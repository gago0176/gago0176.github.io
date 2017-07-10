function populate() {
	if(quiz.isEnded()){
		showScores();
	}
	else {
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		var choices = quiz.getQuestionIndex().choices;
		for(var i=0;i< choices.length;i++){
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1 ;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};

function showScores(){
	if(quiz.score<5){
	var gameOverHtml = "<h1>Kết Quả</h1>";
		gameOverHtml += "<h2 id='score' style='font-size: 60px;text-align:center;'> Câu Đúng : " + quiz.score + "</h2></br><button id='btn4' onclick='window.location.reload()'>Trả lời lại</button>";
		var element = document.getElementById("quiz");
		element.innerHTML = gameOverHtml;
	}
	else {
		window.location.href = 'https://freetuts.net';
	}
}


var questions = [
	new Question("Which one is not an object oriented programming language ?",["Java","C#","C","C++"],"C"),
	new Question("Which language is used for styling web pages ?",["HTML","JQuery","CSS","XML"],"CSS"),
	new Question("There are _____ main components of object oriented programming.",["1","6","2","4"],"4"),
	new Question("Which language is used for web apps ?",["PHP","Javascrip","All","Python"],"All"),
	new Question("MVC is a _____ .",["Language","Library","Framework","All"],"Framework"),

];
var quiz = new Quiz(questions);

populate();