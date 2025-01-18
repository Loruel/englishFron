import axios from "axios";

export const allExamsQuestions = async () => {
    const res = await axios.get('http://localhost:3000/api/exams/questions')
    return res.data
}

export const allExams = async () => {
    const res = await axios.get('http://localhost:3000/api/exams/exams')
    return res.data
}