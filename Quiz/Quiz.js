//declare
let startBtn = document.querySelector('.StartButton');
let display = document.querySelector('.displayContainer');
let number = document.querySelector('.number');
let question = document.querySelector('.mainQ');
let answer = document.querySelector('.answer');
let nextBtn = document.querySelector('.next');
let preBtn = document.querySelector('.previous');
let result = document.querySelector(".result");
let optionBtn = document.getElementsByClassName("optionBtn");//want to call all 
//html collection //becomes array 
let correct = document.querySelector(".correct");
let wrong = document.querySelector(".wrong");
let count = 0;


//startButton
startBtn.addEventListener("click", function () {
    startBtn.classList.add("hidden"); //class name =string
    display.classList.remove('hidden');

    //for appearance of question as soon as click, create function
    quizCreator(quizArr[count]);

    //Hide previous button
    preBtn.classList.add("hidden");
    correct.classList.add('hidden');
    wrong.classList.add('hidden');


    checker();

});
const quizArr = [{
    id: "Question 1",
    question: "How many months are there in a year?",
    option: ["7", "9", "12", "4"],
    correct: "12",

},
{
    id: "Question 2",
    question: "At what year did the first world war terminate?",
    option: ["1921", "1913", "1918", "1945"],
    correct: "1918",
},
{
    id: "Question 3",
    question: "What is the smallest planet in the galaxy?",
    option: ["Jupiter", "Mercury", "Uranus", "Mars"],
    correct: "Mercury",

}, {
    id: "Question 4",
    question: "What is normal BMI for man?",
    option: ["22", "28", "32", "36"],
    correct: "22",

}



];
//for quiz creator //to create parameter as lively
function quizCreator(i) {
    number.innerHTML = i.id;
    question.innerHTML = i.question;
    //array 
    answer.innerHTML = `
   <button class=optionBtn>${i.option[0]}</button>
    <button class=optionBtn>${i.option[1]}</button> 
    <button class=optionBtn>${i.option[2]}</button>
     <button class=optionBtn>${i.option[3]}</button>
      `;


};
//next
nextBtn.addEventListener("click", function () {
    correct.classList.add('hidden');
    wrong.classList.add('hidden');

    preBtn.classList.remove("hidden");
    if (count < 3) {
        count++;
        quizCreator(quizArr[count]);
    }
    if (count == 3) {
        nextBtn.classList.add('hidden');
    }
    checker();


});
preBtn.addEventListener("click", function () {
    correct.classList.add('hidden');
    wrong.classList.add('hidden');
    if (count == 1) {
        preBtn.classList.add('hidden');

    }
    if (count > 0) {
        count--;
        quizCreator(quizArr[count]);
        nextBtn.classList.remove('hidden');

    }
    checker();

});

//checker
function checker() {
    for (let i = 0; i < optionBtn.length; i++) {

        //optionBtn ရဲ့ ဘယ်အခန်းကိုမဆိုနှိပ်
        optionBtn[i].addEventListener("click", function () {
            let x = optionBtn[i].innerHTML;
            let truth = quizArr[count].correct;
            if (x == truth) {
                correct.classList.remove('hidden');
                wrong.classList.add('hidden');

            } else {
                correct.classList.add('hidden');
                wrong.classList.remove('hidden');

            }


        })
    }
}


