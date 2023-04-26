//Question bank
var questionBank= [
    {
        question : 'Which memory storage is widely used in PCs and Embedded Systems?',
        option : ['EEPROM','Flash memory','SRAM','DRAM'],
        answer : 'DRAM'
    },
    {
        question : 'How an embedded system communicate with the outside world?',
        option : ['Memory','Output','Peripherals',''Input'],
        answer : 'Peripherals'
    },
    {
        question : 'Which of the architectures are made to speed up the processor?',
        option : ['CISC',' RISC','program stored','von Neumann'],
        answer : 'RISC'
    },
    {
        question : 'Which of the following can generates a interrupt?'
        option : ['Counter','Timer','Delay','All of the above'],
        answer : 'Timer'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as',
        option : ['CISC','RISC','program stored','von Neumann'],
        answer : 'RISC'
    },
    {
        question : 'von Neumann',
        option : ['1967','1968','1958','1922'],
        answer : '1967'
    },
    
]

console.log(questionBank[0]);
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var back= document.querySelector('.back');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;
console.log(questionBank[0]);
//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    console.log(questionBank[i].question);
    question.innerHTML= 'Q.' + (i+1) + ' ' + questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score < questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        // i -= 1;
        console.log(i);
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//previous question
function prevQuestion(){
    if(i>0)
    {
        i=i-1;;
        // i -= 1;
        console.log(i);
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);
back.addEventListener('click',prevQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        // console.log(a);
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


 displayQuestion();

