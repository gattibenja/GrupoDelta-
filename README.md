# GrupoDelta - Plataforma E-Commerce Full-Stack de Muebles de Diseño

## 📌 Descripción del Proyecto

**GrupoDelta** es una plataforma de comercio electrónico full-stack especializada en la venta de muebles de diseño contemporáneo. La aplicación ofrece una experiencia de compra completa con autenticación segura, carrito persistente (local y en base de datos), sistema de órdenes y panel administrativo con gestión de productos y usuarios.

### 🎯 Objetivos
- Proporcionar una experiencia de compra fluida y responsiva en desktop y mobile.
- Implementar un sistema de autenticación seguro con JWT y cookies httpOnly.
- Permitir la persistencia del carrito en localStorage (invitados) y base de datos (usuarios autenticados).
- Ofrecer un panel administrativo con control de roles y permisos.
- Garantizar escalabilidad y mantenibilidad del código.

---

## ✨ Características Principales

### 🛍️ Para Clientes
| Característica | Descripción |
|---|---|
| **Catálogo de Productos** | Navegación intuitiva por todos los muebles disponibles con filtrado y búsqueda. |
| **Detalle de Producto** | Vista completa con descripción, materiales, medidas, acabado y precio. |
| **Autenticación Segura** | Registro e inicio de sesión con validación de formularios y JWT. |
| **Carrito Dual** | Almacenamiento local para invitados; sincronización en BD para usuarios registrados. |
| **Checkout** | Proceso de compra simplificado con confirmación de orden. |
| **Historial de Compras** | Página dedicada para consultar todas las órdenes previas. |
| **Notificaciones (Toast)** | Feedback visual en tiempo real de acciones del usuario. |

### 👨‍💼 Para Administradores
| Característica | Descripción |
|---|---|
| **Dashboard Protegido** | Acceso exclusivo a rutas administrativas con validación de rol. |
| **Crear Productos** | Formulario para agregar nuevos muebles al catálogo. |
| **Eliminar Productos** | Opción de borrar productos desde su página de detalle. |
| **Gestión de Usuarios** | Panel para visualizar, filtrar y cambiar rol de usuarios. |
| **Control de Roles** | Cambiar entre `user` y `admin` con protección del superadmin. |

---

## 🛠️ Tecnologías Utilizadas

### Backend (Node.js + Express)
```
├── MongoDB & Mongoose     → BD NoSQL y ODM
├── JWT (jsonwebtoken)     → Autenticación segura
├── Bcrypt                 → Hasheo de contraseñas
├── Cookie-Parser          → Gestión de cookies httpOnly
├── CORS                   → Comunicación cross-origin
├── Dotenv                 → Variables de entorno
└── Express Middleware     → Logger, error handler, validaciones
```

### Frontend (React + Vite)
```
├── React 18.x            → UI reactiva
├── Vite                  → Build tool rápido
├── React Router v6       → Enrutamiento SPA
├── Styled-Components     → CSS-in-JS encapsulado
├── Context API           → Estado global (Auth, Cart, Purchases, Toast)
├── Formik + Yup          → Formularios y validación
├── Fetch API             → Llamadas HTTP
└── LocalStorage          → Persistencia cliente
```

---

## 📦 Instalación y Configuración

### Prerrequisitos
- **Node.js** v18.x o superior
- **npm** o **yarn**
- **MongoDB** (local o cloud - MongoDB Atlas)
- **Git**

### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/GrupoDelta.git
cd GrupoDelta
```

### 2️⃣ Configurar Backend

#### Instalación de dependencias
```bash
cd backend
npm install
```

#### Crear archivo `.env`
```bash
# Base de Datos
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/grupodelta

# JWT
JWT_SECRET=tu_clave_secreta_muy_larga_y_aleatoria_min_32_caracteres

# Servidor
PORT=4000


# CORS
FRONTEND_ORIGIN=http://localhost:5173
```

#### Iniciar servidor
```bash
npm start
# o con nodemon para desarrollo
npm run dev
```

El backend estará disponible en `http://localhost:4000`

---

### 3️⃣ Configurar Frontend

#### Instalación de dependencias
```bash
cd ../client
npm install
```

#### Crear archivo `.env.local`
```bash
VITE_REACT_APP_API_URL=http://localhost:4000
```

#### Iniciar servidor de desarrollo
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

---

## 📁 Estructura del Proyecto

```
GrupoDelta/
├── backend/
│   ├── models/
│   │   ├── model.users.js       # Esquema de usuarios
│   │   ├── model.producto.js    # Esquema de productos
│   │   ├── model.carrito.js     # Esquema de carrito
│   │   └── model.order.js       # Esquema de órdenes
│   ├── controllers/
│   │   ├── users.controller.js
│   │   ├── productos.controller.js
│   │   ├── cart.controller.js
│   │   └── order.controller.js
│   ├── routers/
│   │   ├── users.routes.js
│   │   ├── productos.routes.js
│   │   ├── cart.routes.js
│   │   └── orders.routes.js
│   ├── middlewares/
│   │   ├── auth.middleware.js   # Validación JWT
│   │   ├── logger.js            # Logger de peticiones
│   │   └── errorHandler.js      # Manejador de errores
│   ├── public/imagenes/         # Imágenes estáticas
│   ├── db/
│   │   └── db.js                # Conexión MongoDB
│   ├── server.js                # Punto de entrada
│   └── .env                     # Variables de entorno
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── nav/             # Barra de navegación
│   │   │   ├── banner/          # Banner principal
│   │   │   ├── destacados/      # Productos destacados
│   │   │   ├── productos/       # Catálogo
│   │   │   ├── productCard/     # Card de producto
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Catalogo.jsx
│   │   │   ├── DetalleProducto.jsx
│   │   │   ├── Carrito.jsx
│   │   │   ├── Compras.jsx
│   │   │   └── Admin/
│   │   ├── auth/
│   │   │   ├── AuthProvider.jsx
│   │   │   ├── CartProvider.jsx
│   │   │   ├── PurchasesProvider.jsx
│   │   │   └── ToastProvider.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env.local
└── README.md
```

---

## 🔐 Autenticación y Seguridad

### Flujo de Autenticación
```
1. Usuario registra cuenta (POST /api/users/signup)
2. Backend hashea contraseña con bcrypt
3. En login (POST /api/users/login), se valida con bcrypt.compare()
4. Se genera JWT firmado con JWT_SECRET
5. JWT se envía en cookie httpOnly (segura contra XSS)
6. Cliente incluye cookies automáticamente en peticiones (credentials: 'include')
7. Middleware auth valida JWT en rutas protegidas
```

### Middleware de Autenticación
```javascript
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'No autorizado' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(403).json({ message: 'Token inválido' });
  }
};
```

### Cookies httpOnly
- **httpOnly**: No accesible desde JavaScript (protege contra XSS).
- **Secure**: Solo se envía por HTTPS en producción.
- **SameSite**: Protege contra CSRF.
- **MaxAge**: Expira después de 1 hora.

---

## 🛒 Gestión del Carrito

### Carrito Dual (BD)

#### Modo Autenticado (MongoDB)
```javascript
// POST /api/cart - Agregar producto
// GET /api/cart - Obtener carrito
// DELETE /api/cart/:productId - Eliminar producto
// DELETE /api/cart - Vaciar carrito
```

#### Sincronización
```javascript
useEffect(() => {
  if (isAuthenticated) {
    // Cargar carrito desde BD
    refreshCartFromDB();
  } else {
    // Cargar carrito desde localStorage
    const localCart = JSON.parse(localStorage.getItem('carrito')) || [];
    setCart(localCart);
  }
}, [isAuthenticated]);
```

---

## 📊 Modelos de Base de Datos

### 👤 Usuario
```javascript
{
  _id: ObjectId,
  user: String (unique),
  email: String (unique),
  password: String (hashed),
  telefono: String (optional),
  rol: String ('user' | 'admin'),
  createdAt: Date,
  updatedAt: Date
}
```

### 🪑 Producto
```javascript
{
  _id: ObjectId,
  id: Number (unique),
  nombre: String,
  descripcion: String,
  medidas: String,
  materiales: String,
  acabado: String,
  precio: Number,
  imagen: String (URL),
  createdAt: Date,
  updatedAt: Date
}
```

### 🛍️ Carrito
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  items: [
    {
      productId: ObjectId (ref: Producto),
      quantity: Number,
      price: Number
    }
  ],
  totalPrice: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### 📦 Orden
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  items: [
    {
      productId: ObjectId,
      nombre: String,
      cantidad: Number,
      precio: Number
    }
  ],
  totalPrice: Number,
  estado: String ('pendiente' | 'procesada' | 'enviada'),
  createdAt: Date
}
```

---

## 🌐 Endpoints de la API

### Usuarios
```
POST   /api/users/signup           → Registro de usuario
POST   /api/users/login            → Iniciar sesión
POST   /api/users/logout           → Cerrar sesión
GET    /api/users                  → Obtener todos (admin)
PUT    /api/users/:id/role         → Cambiar rol (admin)
```

### Productos
```
GET    /api/productos              → Obtener todos los productos
GET    /api/productos/:id          → Obtener un producto por ID
POST   /api/productos              → Crear producto (admin)
PUT    /api/productos/:id          → Actualizar producto (admin)
DELETE /api/productos/:id          → Eliminar producto (admin)
```

### Carrito
```
GET    /api/cart                   → Obtener carrito del usuario
POST   /api/cart                   → Agregar/actualizar item
DELETE /api/cart/:productId        → Eliminar item
DELETE /api/cart                   → Vaciar carrito
```

### Órdenes
```
POST   /api/orders                 → Crear orden
GET    /api/orders                 → Obtener órdenes del usuario
GET    /api/orders/:id             → Obtener orden específica
```

---

## 🎨 Componentes React Principales

### AuthProvider
Gestiona autenticación global y estado del usuario.
```javascript
const { user, isAuthenticated, login, logout, isAdmin } = useAuth();
```

### CartProvider
Maneja carrito dual (local/BD) y sincronización.
```javascript
const { cart, addProduct, removeProduct, decrementProduct, cartCount } = useCart();
```

### PurchasesProvider
Controla historial de compras del usuario.
```javascript
const { purchases, loading, fetchPurchases } = usePurchases();
```

### ToastProvider
Sistema de notificaciones (toast notifications).
```javascript
const { addToast } = useToast();
addToast('Producto agregado al carrito', 'success');
```

---

## 🚀 Deploy

### Backend (Render.com)
```bash
1. Conectar repositorio GitHub en Render
2. Configurar variables de entorno (.env)
3. Deploy automático en cada push a main
```

### Frontend (Vercel)
```bash
1. Conectar repositorio GitHub en Vercel
2. Configurar VITE_REACT_APP_API_URL con URL del backend
3. Deploy automático en cada push a main
```

---

## 🐛 Troubleshooting

### Error: "Failed to load url /imagenes/..."
**Causa**: Las imágenes no están siendo servidas por Express.static.
```javascript
// Solución: Añadir en server.js
app.use('/imagenes', express.static(path.join(__dirname, 'public/imagenes')));
```

### Error: "Cart to ObjectId failed for value..."
**Causa**: Comparación inconsistente de IDs (número vs string).
```javascript
// Solución: Normalizar todos los IDs a String
const safeId = String(product?.id ?? "");
```

### Error: "CORS policy"
**Causa**: Falta configurar CORS correctamente.
```javascript
// Solución: En server.js
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN,
  credentials: true
}));
```

---

## 📋 Checklist de Desarrollo

- [x] Autenticación JWT con cookies httpOnly
- [x] Carrito dual (localStorage + MongoDB)
- [x] CRUD de productos
- [x] Panel administrativo
- [x] Historial de compras
- [x] Validación de formularios (Formik + Yup)
- [x] Toast notifications
- [x] Responsive design (mobile + desktop)
- [ ] Integración de pasarela de pagos (próximo)
- [ ] Búsqueda y filtrado avanzado
- [ ] Análisis de comportamiento de usuario

---

## 📝 Convenciones de Código

### Nomenclatura
- **Componentes**: PascalCase (`ProductCard.jsx`)
- **Hooks**: camelCase con prefijo `use` (`useCart()`)
- **Variables**: camelCase (`productCount`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Estructura de Carpetas
```
Componentes relacionados en carpetas con:
├── NombreComponente.jsx    (componente principal)
├── NombreComponente.styles.js (estilos)
└── index.js                (exportación opcional)
```


## 👨‍💻 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/mi-feature`)
3. Commit tus cambios (`git commit -m 'feat: Descripción'`)
4. Push a la rama (`git push origin feature/mi-feature`)
5. Abre un Pull Request

---

**Última actualización**: Noviembre 2025  
**Versión**: 1.0.0