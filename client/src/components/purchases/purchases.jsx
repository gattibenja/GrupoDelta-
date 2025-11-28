import React, {useContext } from "react";
import { PurchaseContext } from "../../auth/PurchaseContext.js";
import * as S from './purchases.js';

export default function PurchasesComp() {

    const { purchases, loading, error } = useContext(PurchaseContext);
    
    if (loading) {
        return <S.LoadingMessage>Cargando tus compras...</S.LoadingMessage>;
    }

    if (error) {
        return <S.ErrorMessage>Error al cargar las compras: {error}</S.ErrorMessage>;
    }

    return <S.Container>
        <S.Title>Mis Compras</S.Title>
        {purchases.length > 0 ? (
            <S.PurchaseList>
                {purchases.map((purchase, index) => (
                    <S.PurchaseCard key={purchase._id || index}>
                        <S.CardHeader>
                            <div>
                                <h3>Pedido ID: {purchase._id}</h3>
                                <p>Fecha: {new Date(purchase.createdAt).toLocaleDateString()}</p>
                            </div>
                            <S.StatusBadge status={purchase.status}>{purchase.status}</S.StatusBadge>
                        </S.CardHeader>
                        <S.CardBody>
                            <h4>Productos:</h4>
                            <S.ProductList>
                                {purchase.items.map(item => (
                                    <S.ProductItem key={item.product._id}>
                                        {item.product.nombre} - Cantidad: {item.quantity} - Precio unitario: ${item.product.precio.toLocaleString()}
                                    </S.ProductItem>
                                ))}
                            </S.ProductList>
                        </S.CardBody>
                    </S.PurchaseCard>
                ))}
            </S.PurchaseList>
        ) : (
            <S.EmptyMessage>Aún no has realizado ninguna compra.</S.EmptyMessage>
        )}
    </S.Container>;
}