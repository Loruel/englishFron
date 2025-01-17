import React, { useState } from 'react';
import { createSubscription } from '../api/subscriptionApi';

const SubscriptionComponent = () => {
    const [loading, setLoading] = useState(false);

    const handleSubscription = async () => {
        setLoading(true);

        // Datos de la suscripción (pueden venir de un formulario o estar fijos)
        const subscriptionData = {
            reason: 'Suscripción mensual',
            auto_recurring: {
                frequency: 1,
                frequency_type: 'months',
                transaction_amount: 500, // Monto en MXN
                start_date: new Date().toISOString(), // Fecha de inicio
                end_date: null, // Sin fecha de finalización
            }
        };

        try {
            // Llamada a la API de suscripción
            const initPoint = await createSubscription(subscriptionData);

            // Redirigir al usuario a la URL de pago de Mercado Pago
            window.location.href = initPoint;
        } catch (error) {
            console.error('Error al crear la suscripción:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleSubscription} disabled={loading}>
                {loading ? 'Procesando...' : 'Suscribirme'}
            </button>
        </div>
    );
};

export default SubscriptionComponent;
