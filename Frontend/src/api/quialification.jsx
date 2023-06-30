import axios from "./axios";

export const showEstudiante = () => axios.get('/response');

export const getQuest = (student, quiz) => axios.get('/quiz/estudiante/'+ student + '/' + quiz);