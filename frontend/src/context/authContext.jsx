import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext(null);

axios.defaults.withCredentials = true;

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const refreshAccessToken = async () => {
        try {
            const res = await axios.post("http://localhost:3002/api/auth/refresh");
            setToken(res.data.accessToken);
            return res.data.accessToken;
        } catch (err) {
            setToken(null);
            setUser(null);
            return null;
        }
    };

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const activeToken = await refreshAccessToken();
                if (activeToken) {
                    const res = await axios.get("http://localhost:3002/api/auth/me", {
                        headers: { Authorization: `Bearer ${activeToken}` }
                    });
                    setUser(res.data.user);
                }
            } catch (err) {
                console.error("Authentication init failed.");
            } finally {
                setLoading(false);
            }
        };
        initializeAuth();
    }, []);

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                
                // Extract the path securely to prevent absolute vs relative mismatches
                const requestPath = originalRequest.url ? originalRequest.url.toLowerCase() : "";

                // TRAP: If the error came from an authentication endpoint, REJECT IMMEDIATELY.
                // This prevents the login form from ever looping on a 401 bad password/email error!
                if (
                    requestPath.includes("/auth/login") || 
                    requestPath.includes("/auth/signup") || 
                    requestPath.includes("/auth/refresh")
                ) {
                    return Promise.reject(error);
                }

                // For all other protected trading resource endpoints, attempt an in-memory token refresh
                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const newToken = await refreshAccessToken();
                    if (newToken) {
                        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
                        return axios(originalRequest);
                    }
                }
                return Promise.reject(error);
            }
        );
        return () => axios.interceptors.response.eject(interceptor);
    }, []);

    const login = async (email, password) => {
        const res = await axios.post("http://localhost:3002/api/auth/login", { email, password });
        setToken(res.data.accessToken);
        setUser(res.data.user);
        return res.data;
    };

    const signup = async (username, email, password) => {
        const res = await axios.post("http://localhost:3002/api/auth/signup", { username, email, password });
        return res.data;
    };

    const logout = async () => {
        await axios.post("http://localhost:3002/api/auth/logout");
        setToken(null);
        setUser(null);
    };

    const getAuthHeaders = () => {
        return { headers: { Authorization: `Bearer ${token}` } };
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, signup, logout, getAuthHeaders }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}