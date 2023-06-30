import axios from "./axios";

export const quiz = () => axios.get('/quiz');

export const InfoQuiz = (id) => axios.get('/infoquiz/'+ id);

export const postQuiz = (data) => axios.post('/class/quiz',data);

export const postQuest = (id, data) => axios.post('/quiz/question/' + id ,data)

export const getQuest = (id) => axios.get('/quiz/' + id);

export const putQuestion = (id, data) => axios.put('/question/'+id,data);

export const anwersQ = (id, data) => axios.post('/quiz/answer/'+ id, data);

export const DeleteQuiz = (id) => axios.delete('/quiz/'+id);

export const DeleteAllQ = () => axios.delete('/quizAll');