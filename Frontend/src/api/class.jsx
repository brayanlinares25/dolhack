import axios from "./axios";

export const First = () => axios.get('/class');

export const Details = (id) => axios.get('/class/' + id);

export const MyClass = () => axios.get('/myclass');

export const AddClass = (data) => axios.post('/class',data);

export const EnterClassV = (id)=> axios.get('/enterclass/'+id);

export const catchData = ()=> axios.get('/class/data');

export const enrollclass = (id)=> axios.get('/enrollclass/'+id)

export const list = ()=> axios.get('/list/student');

export const getPosts = ()=> axios.get('/posts');

export const postPost = (data) => axios.post('/posts',data);

export const UpdateClases = (data)=> axios.put('/class',data);

export const DeleteClases = ()=> axios.delete('/class');

export const Exit = ()=> axios.get('/exit');