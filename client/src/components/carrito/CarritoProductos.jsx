import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductCardCarrito from "../productCardCarrito/ProductCardCarrito.jsx";
import * as S from "./carritoProductos.js"
import { CartContext } from "../../auth/CartContext.js";
import { PurchaseContext } from "../../auth/PurchaseContext.js";
import { useToast } from "../../auth/ToastContext.js";

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export default function CarritoProductos() {
    const { cart, loading, clearCart, deleteCart } = useContext(CartContext);
    const { addToast } = useToast();
    const { fetchPurchases } = useContext(PurchaseContext);
    const navigate = useNavigate();

    const handleConfirmOrder = async () => {
        if (window.confirm("¿Estás seguro de que quieres confirmar tu pedido?")) {
          try {
            // 1. Crear la orden en el backend
            const orderResponse = await fetch(`${BASE_URL}/api/createOrder`, {
              method: 'POST',
              credentials: 'include',
            });
    
            if (!orderResponse.ok) {
              throw new Error('No se pudo crear el pedido.');
            }
            
            deleteCart()
    
            addToast('¡Pedido confirmado! Tu orden está en proceso.', 'success');
            
            // 3. Recargar las compras y limpiar el estado del carrito antes de redirigir
            await fetchPurchases();
            clearCart();
            navigate('/purchases');
    
          } catch (error) {
            addToast(error.message || 'Ocurrió un error al confirmar el pedido.', 'error');
          }
        } else {
          addToast('Confirmación de pedido cancelada.', 'info');
        }
      };

    const total = cart.items?.reduce((acc, item) => acc + item.product.precio * item.quantity, 0) || 0;

    return(
        <>
        <S.Container>
          <S.Title>Tu Carrito 🛒</S.Title>
            <S.productsContainer>{
                loading ? <p>Cargando carrito...</p> :
                (cart.items && cart.items.length > 0) ? 
                cart.items.map(item => <ProductCardCarrito key={item.product._id} product={item.product} quantity={item.quantity} />) :
                <p>Tu carrito está vacío</p>
            }
            </S.productsContainer>
            {cart.items && cart.items.length > 0 && (
                <S.TotalSection>
                    <h3>Total: ${total.toLocaleString()}</h3>
                    <S.ConfirmButton onClick={handleConfirmOrder}>
                        Confirmar Pedido
                    </S.ConfirmButton>
                </S.TotalSection>
            )}
          </S.Container>
        </>
    )
}