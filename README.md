# Proyecto E-commerce - Grupo Delta

Una aplicación web completa de comercio electrónico para una tienda de muebles de diseño contemporáneo.

## Integrantes

*   Gatti Benjamin Pablo*

---

## 🚀 Cómo Empezar

Sigue estas instrucciones para instalar las dependencias y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

*   [Node.js](https://nodejs.org/) (versión 14 o superior recomendada)
*   npm (generalmente se instala con Node.js)

### Instalación y Ejecución

El proyecto está dividido en dos carpetas principales: `frontend` y `backend`. Deberás instalar las dependencias y ejecutar los servidores para cada una por separado.

1.  **Clona el repositorio** (si aún no lo has hecho):
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_REPOSITORIO>
    ```

2.  **Configurar el Backend:**
    *   Abre una terminal y navega a la carpeta del backend.
        ```bash
        cd backend
        ```
    *   Instala las dependencias.
        ```bash
        npm install
        ```
    *   Inicia el servidor del backend. Por defecto, se ejecutará en `http://localhost:4000`.
        ```bash
        npm start
        ```

3.  **Configurar el Frontend:**
    *   Abre **una nueva terminal** y navega a la carpeta del frontend.
        ```bash
        cd frontend
        ```
    *   Instala las dependencias.
        ```bash
        npm install
        ```
    *   Inicia la aplicación de React. Se abrirá automáticamente en tu navegador en `http://localhost:3000`.
        ```bash
        npm start
        ```

¡Listo! Ahora tienes el backend escuchando peticiones y el frontend visible en tu navegador.

---

## 🏛️ Arquitectura y Decisiones de Diseño

### Backend

*   **Framework**: Se utilizó **Node.js** con **Express.js** por su simplicidad, flexibilidad y el amplio ecosistema de middlewares.
*   **Base de Datos**: Para este proyecto, se optó por un enfoque sin base de datos tradicional. La información de los productos se gestiona a través de un archivo estático `productos.json`. Esta decisión simplifica la configuración inicial y es adecuada para la escala del proyecto.
*   **API**: Se diseñó una API RESTful para servir los datos de los productos. El endpoint principal es `/api/productos`.
*   **Middlewares**: Se implementaron middlewares personalizados para:
    *   `cors`: Permitir peticiones desde el frontend.
    *   `logger`: Registrar cada petición entrante en la consola.
    *   `notFoundHandler`: Gestionar rutas no existentes (404).
    *   Manejo de errores global para centralizar las respuestas de error.

### Frontend

*   **Librería**: La interfaz de usuario fue construida con **React**, aprovechando su arquitectura basada en componentes para crear una UI modular y reutilizable.
*   **Enrutamiento**: Se utilizó **React Router DOM** para gestionar la navegación del lado del cliente, permitiendo una experiencia de usuario fluida y sin recargas de página completas al navegar entre vistas.
*   **Estilos**: Se implementó la metodología **Styled Components** para escribir CSS directamente en los archivos de componentes de JavaScript. Esto asegura que los estilos estén encapsulados, evitando colisiones de nombres y facilitando el mantenimiento.
*   **Manejo de Estado (Carrito)**: El estado del carrito de compras se gestiona localmente en el navegador del cliente a través de `localStorage`. Esta decisión evita la complejidad de librerías de manejo de estado global (como Redux o Zustand) y persiste el carrito entre sesiones del usuario de manera sencilla. Las actualizaciones del carrito provocan una recarga de la página para reflejar los cambios, una solución directa y funcional para este caso de uso.