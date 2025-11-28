import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as S from './formCrearUsuario.js'

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export default function FormCrearUsuarios() {
    const [error, setError] = useState("");
    const [exito, setExito] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('El email no es válido')
                .required('El email es obligatorio'),
            username: Yup.string()
                .required('El nombre de usuario es obligatorio'),
            password: Yup.string()
                .min(6, 'La contraseña debe tener al menos 6 caracteres')
                .required('La contraseña es obligatoria'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log("Datos a enviar: ", values);
            try {
                setError("");
                setExito(false);
                const response = await fetch(`${BASE_URL}/api/users/signUp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values)
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error.message || 'El registro del usuario falló');
                }

                resetForm();
                setExito(true);

            } catch (err) {
                console.error(err.message);
                setError(err.message);
                setExito(false);
            } finally {
                setSubmitting(false);
            }
        }
    });
   
    return(
        <>
         <S.Titulo>Crea tu cuenta y conoce nuestros mejores productos</S.Titulo>
        <S.Container>
           
            <S.Form onSubmit={formik.handleSubmit}>
                
                <S.Label>E-mail</S.Label>
                <S.Input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}

                <S.Label>Nombre</S.Label>
                <S.Input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.username && formik.errors.username ? <div style={{ color: "red" }}>{formik.errors.username}</div> : null}
    
                <S.Label>Contraseña</S.Label>
                <S.Input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}

                {error && <div style={{ color: "red" }}>{error}</div>}
                {exito && <div style={{ color: "green" }}>Su usuario se registro con exito</div>}
                <S.Boton type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? 'Creando...' : 'Crear'}
                </S.Boton>
            </S.Form>
        </S.Container>
        </>
    );
};
