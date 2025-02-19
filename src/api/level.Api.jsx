import axios from "axios";

export const allLevels = async () => {
    const res = await axios.get('http://localhost:3000/api/level/all/level')
    return res.data
}