import React, { useEffect, useState } from "react";
import * as S from './users.js'
const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
function Users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL}/api/users/getUsers`, {
            credentials: 'include' // <-- AÑADE ESTO
        })
        .then(res => {
            if (!res.ok) throw new Error("Error cargando usuarios");
            return res.json()
        })
        .then(data => {
            console.log('Respuesta de la Api: ', data)
            setUsers(data.Usuarios);
        })
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }, []);

    const handleChangeRole = (userId, currentRole) => {
        const newRole = currentRole === 'admin' ? 'user' : 'admin';

        fetch(`${BASE_URL}/api/users/changeRole/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newRole }),
            credentials: 'include'
        })
        .then(res => {
            if (!res.ok) throw new Error(`Error al cambiar el rol`);
            return res.json();
        })
        .then(data => {
            // Actualizar el estado local para reflejar el cambio sin recargar
            setUsers(currentUsers => 
                currentUsers.map(user => user._id === userId ? data.user : user)
            );
        })
        .catch(err => alert(err.message)); // Puedes usar un sistema de notificaciones más elegante
    };

    if(loading) return <S.Destacados>Cargando usuarios...</S.Destacados>;
    if(error) return   <S.Destacados>Error: {error}</S.Destacados>

    return(
        <S.Section>
            <S.Title>Gestión de Usuarios</S.Title>
            <S.Grid>
                {users.filter(user => user.email !== 'gattibenja@gmail.com').map(user => (
                    <S.UserCard key={user._id}>
                        <S.CardHeader>
                            <S.UserName>{user.user}</S.UserName>
                            <S.RoleBadge role={user.role}>
                                {user.role}
                            </S.RoleBadge>
                        </S.CardHeader>
                        <S.UserInfo>ID: {user._id}</S.UserInfo>
                        <S.UserInfo>Email: {user.email}</S.UserInfo>
                        <S.CardActions>
                            <S.ActionButton onClick={() => handleChangeRole(user._id, user.role)}>
                                Cambiar a {user.role === 'admin' ? 'User' : 'Admin'}
                            </S.ActionButton>
                        </S.CardActions>
                    </S.UserCard>
                ))}
            </S.Grid>
        </S.Section>
    )
  }
export default Users;