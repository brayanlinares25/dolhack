import axios from "./axios";

export const clase = ()=> axios.get('/all');

export const examen = ()=> axios.get('/all2');

export const login = (user) => axios.post('/login', user);

export const register = (user) => axios.post('/register', user);

export const VerificRol = () => axios.get('/verificrol');

export const Logout = () => axios.get('/logout');

export const upProfile = (data) => axios.post('/profile', data);

export const foundStuden = (id) => axios.get('/studen/'+id);