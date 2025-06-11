// src/hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth(requiredType) {
    const navigate = useNavigate();
    const userType = localStorage.getItem('user-type');
    const token = localStorage.getItem('user-token');

    useEffect(() => {
        if (!token) {
            // Se não tem token, redireciona para login
            navigate('/login');
            return;
        }

        if (requiredType && userType !== String(requiredType)) {
            // Se o tipo não corresponde ao requerido
            navigate('/unauthorized');
        }
    }, [navigate, requiredType, token, userType]);

    return {
        token,
        userType: parseInt(userType),
        email: localStorage.getItem('user-email')
    };
}