//import React  from "react";
import * as S from './banner.js'
import Destacado from '../destacadas/destacados.jsx';
function Banner(){
    return(
        <div>
        <S.Main>
         <S.HeroBanner >
            <S.Title>Elegancia que no intimida</S.Title>
                <S.SubTitle>Cada pieza cuenta la historia de manos expertas y materiales nobles</S.SubTitle>
                <S.Boton href="#prueba" className="btn">Destacados</S.Boton>
         </S.HeroBanner>
            <Destacado />
        </S.Main>
        </div>
    )
}

export default Banner;