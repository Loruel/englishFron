import axios from "axios";

export const allLessons = async () => {
    const res = await axios.get('http://localhost:3000/api/lessons/all/lessons')
    return res.data
}

export const getLessonById = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/lessons/${id}`)
    return res.data
}   