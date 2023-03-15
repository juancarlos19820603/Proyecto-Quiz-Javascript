import { Question } from "../Models/Question.js";//Importar la clase Question
import { data } from "./data.js";

export const questions = data.map(question => new Question(question.question, question.choices, question.answer)); 
