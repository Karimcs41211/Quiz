const startbtn = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const exitbtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continuebtn = document.querySelector(".continue-btn");
const quizsection = document.querySelector(".quiz-section");
const quizbox = document.querySelector(".quiz-box");
const resultubox = document.querySelector(".result-box");
const tryagain = document.querySelector(".try-btn");
const gohome = document.querySelector(".gohome-btn");



startbtn.onclick = ()  => {
    popup.classList.add("active");
    main.classList.add("active");
}

exitbtn.onclick = ()  => {
    popup.classList.remove("active");
    main.classList.remove("active");
}


continuebtn.onclick = ()  => {
    quizsection.classList.add("active");
    popup.classList.remove("active");
    main.classList.remove("active");
    quizbox.classList.add("active");

    showQuestions(0);
    questionCounter(1);
    headerScore();
}


tryagain.onclick = ()  => {
    quizbox.classList.add("active");
    resultubox.classList.remove("active");
    nextbtn.classList.remove("active");

    

    

 questionCount = 0;
 questionNum = 1;
 userScore = 0;

 showQuestions(questionCount);
 questionCounter(questionNum);
 headerScore();
}





gohome.onclick = ()  => {
    quizsection.classList.remove("active");
    resultubox.classList.remove("active");
    nextbtn.classList.remove("active");

   

    

 questionCount = 0;
 questionNum = 1;
 userScore = 0;

 showQuestions(questionCount);
 questionCounter(questionNum);
 
}






let questionCount = 0;
let questionNum = 1;
let userScore = 0;
const nextbtn = document.querySelector('.next-btn');


nextbtn.onclick = ()  => {
    if(questionCount <  questions.length - 1){
    questionCount++;
    showQuestions(questionCount);

    questionNum++;
    questionCounter(questionNum);
    nextbtn.classList.remove('active');

    }

else{

    showResultBox();

}
    

}

const optionList = document.querySelector('.option-list');


// getting questions and options from array

function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].num}. ${questions[index].question} ` 

    let optionTag = `<div class="option"><span>${questions[index].option[0]}</span></div> 
                     <div class="option"><span>${questions[index].option[1]}</span></div> 
                     <div class="option"><span>${questions[index].option[2]}</span></div> 
                     <div class="option"><span>${questions[index].option[3]}</span></div> `;


                     optionList.innerHTML = optionTag;

                     const option = document.querySelectorAll('.option');
                     for(let i = 0; i < option.length ; i++)
                     {
                        option[i].setAttribute('onclick' , 'optionSelected(this)');
                     }

}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;


    if(userAnswer == correctAnswer){ answer.classList.add('correct');  userScore += 1; headerScore();}
    else{ answer.classList.add('incorrect');

    for(let i = 0 ; i < allOptions ; i++){
        if(optionList.children[i].textContent == correctAnswer ){
            optionList.children[i].setAttribute('class' , 'option correct');
        }
    }

}

    for(let i = 0 ; i < allOptions ; i++)
    { optionList.children[i].classList.add('disabled'); }


    nextbtn.classList.add('active');
}





function questionCounter(index)
{
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}


function headerScore(){
    const headScoreText = document.querySelector('.header-score');
    headScoreText.textContent = `Score: ${userScore} / ${questions.length}` ;
}



function showResultBox(){
    quizbox.classList.remove('active');
    resultubox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length} `;


    const circularprogress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularprogress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg , rgba(255,255,255,0.1) 0deg)` ;
        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }

    } , speed);
}