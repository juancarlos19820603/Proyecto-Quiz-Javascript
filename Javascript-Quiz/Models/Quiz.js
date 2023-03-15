//@ts-check
import { Question } from "./Question.js";

export class Quiz{

    questionsIndex=0;
    score = 0;   
    
   /**
    * 
    * @param {Question[]} questions
    */

    constructor(questions){
        this.questions = questions;
    }
    //metodo para saber en que pregunta esta el usuario
    /**
     * 
     * @returns {Question}the cuestion found
     */
    getQuestionIndex(){
        return  this.questions[this.questionsIndex];
    }

    isEndend(){
        return this.questions.length === this.questionsIndex;//Metodo para saber si ya finalizo el cuestionario
    }

    /**
     * 
     * @param {string} answer some text
     */

    //metodo para adivinar pregunta
    guess(answer){
        console.log(answer)
        if( this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionsIndex++;
        
    }
}