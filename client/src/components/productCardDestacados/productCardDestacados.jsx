
import * as S from "./productCardDestacados";

export default function ProductCard({ product }) {
  const urlFront = 'http://localhost:4000' + product.imagen;
  return (
    
    <S.Card>
      <S.Img src={urlFront} alt={product.nombre} />
      <S.Body>
        <S.Title>{product.nombre}</S.Title> 
      </S.Body>
    </S.Card>
  );
}
