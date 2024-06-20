import api from './api';

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        }
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const register = async (email: string, password: string) => {
    try {
        const response = await api.post('/auth/register', { email, password });
        return response.data;
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
};

export const getCurrentUser = () => {
    return localStorage.getItem('token');
};
