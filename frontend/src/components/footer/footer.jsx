import React from "react";
import * as S from "./footer"

export default function Footer(){

    return(
        <>
        <S.Container>
            <S.ContainerLinks>
                    <S.Link href="https://www.hermanosjota.com.ar">Acerca de nosotros</S.Link>
                    <S.Link href="mailto:info@hermanosjota.com.ar">Términos y condiciones</S.Link>
                    <S.Link href="mailto:ventas@hermanosjota.com.ar">Política de privacidad</S.Link>
                    <S.Link href="https://www.instagram.com/hermanosjota_ba" target="_blank">Preguntas frecuentes</S.Link>
            </S.ContainerLinks>
            <S.Copyright>&copy; 2025 Hermanos Jota. Todos los derechos reservados.</S.Copyright>
        </S.Container>
        
        </> 
    )
}