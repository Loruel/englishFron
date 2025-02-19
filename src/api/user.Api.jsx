import axios from "axios";

export const login = async ({ registration_number, password }) => {
    const res = await axios.post('http://localhost:3000/api/users/login', {
        registration_number,
        password
    })
    return res.data
}

export const getMyInformation = async token => {
    const res = await axios.get('http://localhost:3000/api/users/me', {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
}

export const updateUser = async ({ token, userData }) => {
    const res = await axios.patch('http://localhost:3000/api/users/me', userData, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
}