import axios from "axios";

export const createSubscription = async (subscriptionData) => {
    try {
        const res = await axios.post('http://localhost:3000/api/subscriptions/create', subscriptionData)
        return res.data.init_point
    } catch (error) {
        console.error('Error al crear la suscripción:', error);
        throw error;
    }
}

