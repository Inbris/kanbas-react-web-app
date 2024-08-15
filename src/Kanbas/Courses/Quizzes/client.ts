import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const API = `${REMOTE_SERVER}/api`;

export const findQuizzesByCourseId = async (courseId:any) => {
    const response = await axiosWithCredentials.get(`${API}/quizzes/course/${courseId}`);
    return response.data;
};

export const findQuizById = async (quizId:any) => {
    const response = await axiosWithCredentials.get(`${API}/quizzes/${quizId}`);
    return response.data;
};

export const createQuiz = async (quiz:any) => {
    console.log("quiz", quiz);
    const response = await axiosWithCredentials.post(`${API}/quizzes`, quiz);
    return response.data;
};

export const updateQuiz = async (quiz:any) => {
    const response = await axiosWithCredentials.put(`${API}/quizzes/${quiz._id}`, quiz);
    return response.data;
};

export const deleteQuiz = async (quizId:string) => {
    const response = await axiosWithCredentials.delete(`${API}/quizzes/${quizId}`);
    return response.data;
};

export const findQuestionsByQuizId = async (quizId:any) => {
    const response = await axiosWithCredentials.get(`${API}/questions/quiz/${quizId}`);
    return response.data;
};

export const findQuestionById = async (questionId:string) => {
    const response = await axiosWithCredentials.get(`${API}/questions/${questionId}`);
    return response.data;
};

export const createQuestion = async (question:any) => {
    const response = await axiosWithCredentials.post(`${API}/questions`, question);
    return response.data;
};

export const updateQuestion = async (question:any) => {
    const response = await axiosWithCredentials.put(`${API}/questions/${question._id}`, question);
    return response.data;
};

export const deleteQuestion = async (questionId:string) => {
    const response = await axiosWithCredentials.delete(`${API}/questions/${questionId}`);
    return response.data;
};
