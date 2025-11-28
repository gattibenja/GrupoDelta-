//import React  from "react";
import * as S from './BannerStyles.js'
import Destacado from '../destacadas/Destacados.jsx';
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
const bannerImage = `${BASE_URL}/imagenes/AparadorUspallata.png`

function Banner(){
    return(
        <div>
        <S.Main>
         <S.HeroBanner >
            <S.TextContainer>
                <S.Title>Elegancia que no intimida</S.Title>
                <S.SubTitle>Cada pieza cuenta la historia de manos expertas y materiales nobles</S.SubTitle>
                <S.Boton to="/catalogo">Conocer más</S.Boton>
            </S.TextContainer>
            <S.ImageContainer>
                <S.Imagen src={bannerImage} alt="Muebles de diseño elegante" />
            </S.ImageContainer>
         </S.HeroBanner>
            <Destacado />
        </S.Main>
        </div>
    )
}

export default Banner;