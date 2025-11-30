//import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Users from '../../components/users/Users.jsx';
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