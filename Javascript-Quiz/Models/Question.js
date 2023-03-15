export class Question{

    /**
     * 
     * @param {string} text this is the text of the question 
     * @param {string[]} choices this are the choices of the question
     * @param {string} answer this is the answer of the cuestion
     */
    constructor(text, choices, answer){
        //Propiedades del objeto
        this.text= text;
        this.choices=choices;
        this.answer=answer;
    }

        /**
         * 
         * @param {string} choice some text to guest 
         * @returns {boolean} return true if the answer is correct
         */
        correctAnswer(choice){//Metodo para validar la pregunta
            return choice === this.answer;
    }
}
