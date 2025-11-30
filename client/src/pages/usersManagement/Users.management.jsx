//import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import * as S from './users.management.js'
import Users from '../../components/users/users.jsx';
const GlobalStyle = createGlobalStyle`

body{
background-color: #F5E6D3;
}
`;

function UserManagement(){
    

    return(
        <> 
            <Users/>
        </> 
    )

}

export default UserManagement;