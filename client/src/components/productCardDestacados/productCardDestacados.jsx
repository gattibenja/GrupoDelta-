
import * as S from "./productCardDestacados";
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
export default function ProductCard({ product }) {
  const urlFront = BASE_URL + product.imagen;
  return (
    
    <S.Card>
      <S.Img src={urlFront} alt={product.nombre} />
      <S.Body>
        <S.Title>{product.nombre}</S.Title> 
      </S.Body>
    </S.Card>
  );
}
