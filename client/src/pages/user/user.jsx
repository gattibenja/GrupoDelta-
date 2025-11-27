import { useState } from 'react';
import Footer from '../../components/footer/footer.jsx';
import { createGlobalStyle } from 'styled-components';
import FormCrearUsuarios from '../../components/formCrearUsuario/formCrearUsuario.jsx';
import FormLoginUsuario from '../../components/formUsuarioLogin/form.usuario.login.jsx';
import * as S from './user.js'

const GlobalStyle = createGlobalStyle`

body{
background-color: #F5E6D3;
}
`;

function User(){
    const [isLogin, setIsLogin] = useState(true)
    return(
        <> 
        <GlobalStyle/>
        <div>
              {isLogin ? (
                <>
                  <FormLoginUsuario />
                  <S.BotonWrapper>
                    <S.Boton onClick={() => setIsLogin(false)}>¿No tienes cuenta? Crea una</S.Boton>
                  </S.BotonWrapper>
                </>
              ) : (
                <>
                  <FormCrearUsuarios />
                  <S.BotonWrapper>
                    <S.Boton onClick={() => setIsLogin(true)}>¿Ya tienes cuenta? Inicia sesión</S.Boton>
                  </S.BotonWrapper>
                </>
              )}
               
        </div>
        </> 
    )

}

export default User;