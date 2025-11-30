import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Contenedor principal del banner
export const HeroBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; /* Ocupa el 80% de la altura de la pantalla */
  background-color: #F5E6D3; /* Color de fondo suave */
  padding: 0 15%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column; /* Apila los elementos verticalmente */
    height: auto; /* La altura se ajusta al contenido */
    padding: 60px 20px; /* Reduce el padding para móviles */
    text-align: center; /* Centra todo el texto */
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;

// Contenedor para el texto (columna izquierda)
export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Alinea el texto a la izquierda */
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center; /* Centra los elementos del contenedor (como el botón) */
  }
  /* Eliminamos el padding derecho, el 'gap' del padre ya maneja el espacio */
`;

// Estilo para el Título
export const Title = styled.h1`
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 2.9rem;
  color: #A0522D; /* Color oscuro para que sea visible */
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem; /* Reduce el tamaño de la fuente para móviles */
  }
`;

// Estilo para el Subtítulo
export const SubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #5C3A21; /* Un tono más suave */
  margin-bottom: 2rem;
  max-width: 800px; /* Limita el ancho para mejor legibilidad */
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Ligeramente más pequeño */
  }
`;

// Estilo para el Botón
export const Boton = styled(NavLink)`
  background-color: #A0522D;
  color: white;
  padding: 15px 35px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &:hover {
    background-color: #8c532e;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
`;

// Contenedor para la imagen (columna derecha)
export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    order: -1; /* Mueve la imagen arriba del texto */
  }
`;

// Estilo para la Imagen
export const Imagen = styled.img`
  width: 80%; /* Hacemos que la imagen ocupe todo su contenedor */
  height: auto; /* Un poco menos que el contenedor para que respire */
  object-fit: cover; /* Asegura que la imagen cubra el espacio sin deformarse */
  border-radius: 15px;
  
  @media (max-width: 768px) {
    width: 60%; /* Reduce el tamaño de la imagen en móviles */
    margin-bottom: 30px; /* Añade espacio entre la imagen y el título */
  }
`;

// Contenedor Main que envuelve todo
export const Main = styled.main`
  /* Este es el contenedor que ya tenías, lo mantenemos por si tiene otros usos */
`;