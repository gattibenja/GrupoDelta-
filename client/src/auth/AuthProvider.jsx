const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext.js";    
import { useNavigate } from "react-router-dom";
import { useToast } from "./ToastContext.js";

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate();
    const { addToast } = useToast();
    const [isAdmin, setIsAdmin]  = useState(false)

    useEffect(() => {
    // Al iniciar la app, preguntamos al backend si hay sesión activa
    async function checkAuth() {
      try {
        const res = await fetch(`${BASE_URL}/api/auth/me`, {
          method: 'GET',
          credentials: 'include' 
        });
        if (!res.ok) {
          setUser(null);
          setIsAdmin(false);
        } else {
          const data = await res.json();
          setUser(data.user);
          setIsAdmin(data.user.role === 'admin'); 
        }
      } catch (err) {
        setUser(null);
        console.error(err.message)
      }
    }
    checkAuth();
  }, []);

    const isAuthenticated = Boolean(user);


    const login = async(userData) => {
        const response = await fetch(`${BASE_URL}/api/users/logIn`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify(userData)
        });


        if (!response.ok) {
            throw new Error("Credenciales invalidas");
        }
        addToast('¡Sesión iniciada con éxito!', 'success');
        const data = await response.json();
        setUser(data.user); // Usamos la respuesta del backend para establecer el usuario
        setIsAdmin(data.user.role === 'admin')
      }

    const logout = async() => {
        await fetch(`${BASE_URL}/api/users/logOut`, {
            method: "POST",
            credentials: "include"
        })
        navigate('/user/login')
        setUser(null);
        setIsAdmin(false)
    }
    const value = {
        user,
        isAuthenticated,
        isAdmin,
        login,
        logout,
    };


     

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}