# Definiendo el proyecto 'Vanilla Games'

## Escenario del proyecto

**Vanilla Games S.L.** es una empresa dedicada al desarrollo de minijuegos para navegadores web, utilizando **vanillaJS** (Javascript puro, sin frameworks). 

El equipo está compuesto por 10 desarrolladores y, habitualmente, tres alumnos/as en prácticas, de los cuales al menos uno tiene buenas posibilidades de unirse al equipo al finalizar su formación.

### Metodología de trabajo

Cada miembro del equipo propone un minijuego, el cual se comparte con los demás para su comentario y valoración. Un equipo especializado selecciona las propuestas con mayor potencial para ser desarrolladas y comercializadas.

Hasta ahora, la gestión de propuestas, comentarios y valoraciones se hacía con herramientas ofimáticas. Actualmente, el objetivo es crear una aplicación web tipo intranet para facilitar este proceso.

## Requisitos del proyecto y casos de uso general

Los **casos de uso** describen las interacciones entre el sistema y sus usuarios, ayudando a entender cómo interactúan con la aplicación y qué esperan obtener.

### Casos de uso generales

La aplicación debe permitir que los usuarios:

-**Registro e inicio de sesión**: Los usuarios pueden registrarse con su nombre, apellidos, email y contraseña. Una vez registrados, pueden iniciar y cerrar sesión.
-**Listar proyectos**: Los usuarios registrados pueden ver un listado de proyectos publicados por los desarrolladores.
- **Editar perfil**: Los usuarios pueden editar su perfil y subir una imagen de avatar.

**Para usuarios con perfil de 'desarrollador'**:

-**Publicar proyectos**: Los desarrolladores pueden crear proyectos con información como nombre, descripción, imagen representativa, enlaces al proyecto y repositorio, y el estado del proyecto. También pueden editar o eliminar sus proyectos.
-**Comentarios y valoraciones**: Pueden comentar sobre los proyectos publicados y añadir valoraciones en forma de estrellas.

**Para el administrador**:

-**Gestión de usuarios**: El administrador puede gestionar perfiles de usuarios, modificando o eliminando cuentas y cambiando roles.
- **Control de comentarios**: Tiene control total sobre los comentarios y valoraciones.

# Casos de Uso para la V1.0 - Definición Básica

## 1. Registrar Usuario
Un usuario puede registrarse en la plataforma proporcionando su **nombre**, **apellidos**, **email** y **contraseña**.

## 2. Recuperar Contraseña
Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un **correo electrónico** con las instrucciones para restablecer su contraseña.

## 3. Iniciar Sesión
Un usuario registrado puede iniciar sesión en la plataforma proporcionando su **email** y **contraseña**.

## 4. Cerrar Sesión
Un usuario puede cerrar su sesión en la plataforma en cualquier momento.

## 5. Editar Perfil
Un usuario registrado puede editar su perfil, actualizando su **nombre**, **apellidos**, **email** o **contraseña**.

## 6. Ver Proyectos
Un usuario registrado puede ver un listado de **proyectos** publicados por los desarrolladores.

## 7. Publicar Proyecto
Un usuario con el perfil de **desarrollador** puede publicar un proyecto proporcionando información como:
- **Nombre** del proyecto
- **Descripción**
- **Imagen representativa**
- **Enlaces** a servidor de pruebas y repositorio de código
- **Estado** del proyecto

## 8. Editar Proyecto
Un usuario con el perfil de **desarrollador** puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.

## 9. Eliminar Proyecto
Un usuario con el perfil de **desarrollador** puede eliminar un proyecto que haya publicado previamente.

## 10. Ver/Editar Usuarios
Un **administrador** puede ver una tabla con todos los usuarios registrados y editar la información, incluido el **rol** de usuario.

## 11. Eliminar Usuario
Un **administrador** puede eliminar cualquier usuario registrado en la plataforma.

![alt text](image-1.png);