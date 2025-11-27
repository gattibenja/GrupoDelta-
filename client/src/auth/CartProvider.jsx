const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
import {useState, useEffect, useCallback, useContext } from "react";
import { CartContext } from "./cartContext";
import { AuthContext } from "./AuthContext.js";
import { useToast } from "./ToastContext.js";
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] }); // Iniciar como objeto
  const [loading, setLoading] = useState(true);
  const [isDBCart, setIsDBCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { isAuthenticated } = useContext(AuthContext);
  const { addToast } = useToast();

  const recalcCartCount = useCallback((cartItems) => {
    const count = (cartItems || []).reduce((acc, item) => acc + (item.quantity || 0), 0);
    setCartCount(count);
  }, []);


  useEffect(() => {
    let mounted = true;
    async function loadCart() {
      try {
        setLoading(true);

        const meRes = await fetch(`${BASE_URL}/api/auth/me`, {
          method: "GET",
          credentials: "include",
        });

        if (!mounted) return;

        if (!meRes.ok) {
          setIsDBCart(false);
          const local = JSON.parse(localStorage.getItem("cart")) || [];
          setCart({ items: local }); // Envolver en objeto
          recalcCartCount(local);
          return;
        }

      
        setIsDBCart(true);
        const cartRes = await fetch(`${BASE_URL}/api/cart/get`, {
          method: "GET",
          credentials: "include",
        });

        if (!cartRes.ok) {
          setCart({ items: [] });
          recalcCartCount([]);
          return;
        }

        const data = await cartRes.json();
        const serverCartItems = data.cart?.items || [];
        setCart({ items: serverCartItems }); // Guardar como objeto
        recalcCartCount(serverCartItems);
      } catch (err) {
        console.error("Error cargando carrito:", err);
        setCart([]);
        recalcCartCount([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadCart();
    return () => {
      mounted = false;
    };
  }, [isAuthenticated, recalcCartCount]);

  const refreshCartFromDB = useCallback(async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/cart/get`, {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        setCart([]);
        recalcCartCount([]);
        return;
      }
      const data = await res.json();
      const serverCartItems = data.cart?.items || [];
      setCart({ items: serverCartItems }); // Guardar como objeto
      recalcCartCount(serverCartItems);
    } catch (err) {
      console.error("Error refrescando carrito:", err);
    }
  }, [recalcCartCount]);

  const addProduct = async (product, qty = 1) => {
    try {
      if (isDBCart) {
        // En BD: POST a /api/cart (según tu nota)
        await fetch(`${BASE_URL}/api/cart`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: product._id, quantity: qty }),
        });
        addToast('Producto agregado al carrito');
        await refreshCartFromDB();
      } else {
        const local = JSON.parse(localStorage.getItem("cart")) || [];
        const existingIndex = local.findIndex((p) => p._id === product._id);
        if (existingIndex >= 0) {
          local[existingIndex].quantity = (local[existingIndex].quantity || 0) + qty;
        } else {
          local.push({
            quantity: qty,
          });
        }
        localStorage.setItem("cart", JSON.stringify(local));
        setCart({ items: local }); // Envolver en objeto
        recalcCartCount(local);
      }
    } catch (err) {
      console.error("Error agregando producto:", err);
    }
  };

  const decrementProduct = async (productId, qty = 1) => {
    try {
      if (isDBCart) {
        await fetch(`${BASE_URL}/api/cart`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: productId, quantity: -qty }),
        });
        await refreshCartFromDB();
      } else {
        const local = JSON.parse(localStorage.getItem("cart")) || [];
        const idx = local.findIndex((p) => p._id === productId);
        if (idx >= 0) {
          local[idx].quantity = (local[idx].quantity || 0) - qty;
          if (local[idx].quantity <= 0) local.splice(idx, 1);
          localStorage.setItem("cart", JSON.stringify(local));
          setCart({ items: local }); // Envolver en objeto
          recalcCartCount(local);
        }
      }
    } catch (err) {
      console.error("Error decrementando producto:", err);
    }
  };

  const removeProduct = async (productId) => {
    try {
      if (isDBCart) {
        //console.warn("Funcionalidad 'removeProduct' para base de datos no implementada en el backend.");
        
        await fetch(`${BASE_URL}/api/cart/deleteProductCart`, {
          method: "DELETE",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: productId }),
        });
        await refreshCartFromDB();
      } else {
        const local = JSON.parse(localStorage.getItem("cart")) || [];
        const filtered = local.filter((p) => p._id !== productId);
        localStorage.setItem("cart", JSON.stringify(filtered));
        setCart({ items: filtered }); // Envolver en objeto
        recalcCartCount(filtered);
      }
    } catch (err) {
      console.error("Error eliminando producto:", err);
    }
  };

  const clearLocalCart = () => {
    localStorage.removeItem("cart");
    setCart({ items: [] });
    recalcCartCount([]);
    setIsDBCart(false);
  };

  const migrateLocalToDB = async () => {
    try {
      const local = JSON.parse(localStorage.getItem("cart")) || [];
      if (!local.length) return;
      for (const item of local) {
        await fetch(`${BASE_URL}/api/cart`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: item._id, quantity: item.quantity }),
        });
      }
      await refreshCartFromDB();
      localStorage.removeItem("cart");
    } catch (err) {
      console.error("Error migrando carrito:", err);
    }
  };

  const deleteCart = async () =>{
      try {
      if (isDBCart) {
        await fetch(`${BASE_URL}/api/cart/deleteCart`, {
          method: "DELETE",
          credentials: "include",
          headers: { "Content-Type": "application/json" }
        });
        await refreshCartFromDB();
      }
    }catch (err) {
      console.error("Error eliminando producto:", err);
  }
}

  const clearCart = () => {
    setCart({ items: [] });
    recalcCartCount([]);
  };

  const value = {
    cart,
    loading,
    isDBCart,
    cartCount,
    addProduct,
    decrementProduct,
    removeProduct,
    clearLocalCart,
    refreshCartFromDB,
    migrateLocalToDB,
    deleteCart,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
