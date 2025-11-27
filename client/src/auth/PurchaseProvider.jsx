import React, { useState, useCallback, useContext, useEffect } from 'react';
import { PurchaseContext } from './PurchaseContext.js';
import { AuthContext } from './AuthContext.js'; // 1. Importar AuthContext
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

 

export const PurchaseProvider = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext); // 2. Consumir el estado de autenticación
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(false); // 1. Iniciar loading en 'false'
    const [error, setError] = useState(null);

    const fetchPurchases = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`${BASE_URL}/api/getOrders`, { 
                method: 'GET',
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('No se pudieron cargar las compras.');
            }

            const data = await response.json();
            setPurchases(data.purchases || []); 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []); // useCallback sigue vacío porque la función no depende de nada externo

    // 3. Este useEffect ahora se encarga de TODO: cargar datos o limpiar el estado.
    useEffect(() => {
        if (!isAuthenticated) {
            setPurchases([]);
            setError(null);
        } else {
            // Si el usuario está autenticado, llamamos a fetchPurchases.
            fetchPurchases();
        }
    }, [isAuthenticated, fetchPurchases]); // La dependencia es solo 'isAuthenticated'



   
    const value = { 
        purchases,
        loading,
        error,
        fetchPurchases,
     };

    return (
        <PurchaseContext.Provider value={value}>{children}</PurchaseContext.Provider>
    );
};
