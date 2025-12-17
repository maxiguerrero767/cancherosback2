# ⚽ Cancheros – Backend

El **backend de Cancheros** provee la API REST que soporta la plataforma, gestionando usuarios, productos, alquiler de canchas y recursos multimedia.  
Está diseñado para ser consumido por el frontend en React, manteniendo una arquitectura clara, escalable y segura.

---

## 📝 ¿De qué se trata?

El backend de **Cancheros** se encarga de:

- Gestión de usuarios (registro, login y autenticación).
- Administración de productos del e-commerce.
- Manejo de canchas y alquileres/turnos.
- Persistencia de datos en base de datos.
- Almacenamiento de imágenes en la nube.

Funciona como el núcleo lógico del proyecto, centralizando reglas de negocio y comunicación con servicios externos.

---

## 🚀 Funcionalidades

- API RESTful con endpoints organizados por recursos.
- Autenticación de usuarios.
- CRUD completo de productos.
- CRUD de canchas y alquileres.
- Subida y gestión de imágenes.
- Validaciones y manejo de errores.
- Conexión a base de datos en la nube.

---

## 🛠️ Tecnologías Utilizadas  

![Node.js](https://img.shields.io/badge/Node.js-18-6A0DAD?logo=node.js&logoColor=white&style=for-the-badge)  
![Express](https://img.shields.io/badge/Express-4-6A0DAD?logo=express&logoColor=white&style=for-the-badge)  
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-6A0DAD?logo=mongodb&logoColor=white&style=for-the-badge)  
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-6A0DAD?logo=mongoose&logoColor=white&style=for-the-badge)  
![JWT](https://img.shields.io/badge/JWT-Auth-6A0DAD?logo=jsonwebtokens&logoColor=white&style=for-the-badge)  
![Cloudinary](https://img.shields.io/badge/Cloudinary-Images-6A0DAD?logo=cloudinary&logoColor=white&style=for-the-badge)

---

## 🔗 Enlaces Útiles  

![GitHub](https://img.shields.io/badge/GitHub-Repo-00BFA6?logo=github&logoColor=white&style=for-the-badge)  
→ [Repositorio del Backend]()

![Render](https://img.shields.io/badge/Render-Deploy-00BFA6?logo=render&logoColor=white&style=for-the-badge)  
→ [API desplegada]()

---

## 📌 Cómo ejecutar el proyecto en local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TaliCabana/cancherosback.git

# 2. Ingresar al proyecto
cd cancherosback

# 3. Instalar dependencias
npm install

# 4. Crear archivo .env
# Variables sugeridas:
# PORT=3000
# MONGODB_URI=tu_uri_de_mongodb
# JWT_SECRET=tu_clave_secreta
# CLOUDINARY_CLOUD_NAME=xxxx
# CLOUDINARY_API_KEY=xxxx
# CLOUDINARY_API_SECRET=xxxx

# 5. Ejecutar servidor
npm run dev
```
---
## 👥 Autores  

Este proyecto fue desarrollado por un talentoso equipo:  

- [LEDESMA PADILLA, José Ignacio](https://github.com/ledesmapadilla)

- [CABANA, Paula](https://github.com/TaliCabana) 

- [GUERRERO, Maximiliano](https://github.com/maxiguerrero767)

- [JIMÉNEZ, Germán](https://github.com/Pablo-German-Jimenez)

- [ALBORNOZ, Joaquín](https://github.com/JQNPro10)

---