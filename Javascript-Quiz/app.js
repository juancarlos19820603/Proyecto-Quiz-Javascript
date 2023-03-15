//@ts-check

import { questions } from './Data/questions.js';//Se importa la clase data.js
import { Quiz } from './Models/Quiz.js';//Se importa la clase Quiz.js
import { UI } from './Models/UI.js';//Se importa la clase UI.js

/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui ui object 
 */


const renderpage = ( quiz, ui  ) => {
 if ( quiz.isEndend()){
   ui.showScores(quiz.score);
 } else{
   ui.showQuestion(quiz.getQuestionIndex().text);
   ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice)=>{
   quiz.guess(currentChoice);
   renderpage(quiz, ui);
   });  
   ui.showProgress(quiz.questionsIndex + 1, quiz.questions.length) 
 }
};

function main(){
   const quiz = new Quiz(questions);
   const ui = new UI();

 renderpage ( quiz, ui);
}

main();
