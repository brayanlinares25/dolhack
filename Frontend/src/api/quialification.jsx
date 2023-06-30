import axios from "./axios";

export const showEstudiante = () => axios.get('/response');

export const getQuest = (student, quiz) => axios.get('/quiz/estudiante/'+ student + '/' + quiz);

export const putQuest = (id, data) => axios.put('/examQualif/'+ id , data);

export const postReport = (idE, idQ, data) => axios.post('/examQualifPost/'+ idE + '/' +idQ, data);

export const GetResult = () => axios.get('/qualif/result');

export const GetList = (id) => axios.get('/resultQuiz/'+id);