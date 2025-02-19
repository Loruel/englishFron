import axios from "axios";

export const allUserLesson = async () => {
    const res = await axios.get('http://localhost:3000/api/userlesson/all/userlessons')
    return res.data
}

export const getUserLessonByIdUser = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/userlesson/${id}`)
    return res.data
}

export const updateUserLesson = async ({ token, userData }) => {
    const res = await axios.patch(`http://localhost:3000/api/userlesson/${id}`, userData, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
};

