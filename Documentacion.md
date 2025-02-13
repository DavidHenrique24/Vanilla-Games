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


## Documentación: Casos de uso especificos #3

# Casos de uso específicos y diagramas de flujo

## Requisitos y diagrama de casos de uso

En esta versión 1.0, hemos definido los casos de uso generales para cada actor y los hemos representado en un diagrama de casos de uso. Ahora, detallaremos los procesos específicos para cada tarea, incluyendo posibles errores del usuario o del sistema.

---

## Casos de uso específicos

### 1. Registrar usuario
**Actores:** Usuario no registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**
1. El usuario navega a la página de registro.
2. El usuario introduce su nombre, apellidos, email y contraseña.
3. El sistema valida que los campos estén completos y que el email no esté registrado previamente.
4. El sistema crea un nuevo usuario con los datos proporcionados.
5. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de inicio.

**Flujos alternativos:**
- 3a. El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.

---

### 2. Recuperar contraseña
**Actores:** Usuario registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**
1. El usuario navega a la página de recuperación de contraseña.
2. El usuario selecciona la opción 'Recuperar contraseña'.
3. El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.
4. El sistema muestra un mensaje de confirmación de envío del email para la recuperación de contraseña y redirige al usuario a la página de inicio.

**Flujos alternativos:**
- 3a. El sistema detecta que el email no está registrado: muestra un mensaje de error y no envía el email.

---

### 3. Iniciar sesión
**Actores:** Usuario registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**
1. El usuario navega a la página de inicio de sesión.
2. El usuario introduce su email y contraseña.
3. El sistema valida las credenciales y crea una sesión para el usuario.
4. El sistema redirige al usuario a la página principal de la aplicación.

**Flujos alternativos:**
- 3a. Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.

---

### 4. Cerrar sesión
**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**
1. El usuario hace clic en el botón de "cerrar sesión".
2. El sistema cierra la sesión del usuario.
3. El sistema redirige al usuario a la página de inicio.

---

### 5. Ver/Editar perfil
**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**
1. El usuario navega a la página de edición de perfil.
2. El usuario edita su nombre, apellidos y contraseña.
3. El sistema valida los campos y actualiza el perfil del usuario.
4. El sistema muestra un mensaje de confirmación.

**Flujos alternativos:**
- 3a. El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.

---

### 6. Ver proyectos
**Actores:** Usuario registrado.

**Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**
1. El usuario navega a la página de proyectos.
2. El sistema muestra una lista de proyectos publicados por desarrolladores.
3. El usuario puede hacer clic en un proyecto para ver más detalles.
4. El usuario puede mostrar/filtrar los proyectos a partir de un buscador.

---

### 7. Publicar proyecto
**Actores:** Usuario registrado con perfil de desarrollador.

**Precondiciones:** El usuario ha iniciado sesión y su perfil es de desarrollador.

**Flujo básico:**
1. El usuario navega a la página de publicación de proyecto.
2. El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.
3. El sistema valida los campos y crea un nuevo proyecto.
4. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.

**Flujos alternativos:**
- 2a. El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar: el sistema descarta la información ingresada y muestra un mensaje de confirmación.

---

### 8. Editar proyecto
**Actores:** Desarrollador.

**Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**
1. El usuario selecciona la opción de "Editar proyecto".
2. El sistema muestra la lista de proyectos previamente creados por el usuario.
3. El usuario selecciona el proyecto que desea editar.
4. El sistema muestra el formulario de edición del proyecto con la información actual.
5. El usuario realiza los cambios necesarios y guarda.
6. El sistema valida la información ingresada y actualiza el proyecto en la base de datos.
7. El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.

---

### 9. Eliminar proyecto
**Actores:** Desarrollador.

**Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**
1. El usuario selecciona la opción de "Eliminar proyecto".
2. El sistema muestra una confirmación de que el usuario está seguro de eliminar el proyecto.
3. El usuario confirma que desea eliminar el proyecto.
4. El sistema elimina el proyecto de la base de datos y muestra una confirmación.

---

### 10. Ver/Editar usuario
**Actores:** Usuario administrador.

**Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y tener rol administrador.

**Flujo principal:**
1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con los datos de los usuarios.
3. El administrador realiza cambios en la información de los usuarios y guarda.
4. El sistema valida la información y actualiza los datos en la base de datos.
5. El sistema muestra una confirmación de que la información ha sido actualizada correctamente.

---

### 11. Eliminar usuario
**Actores:** Usuario administrador.

**Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y tener rol administrador.

**Flujo principal:**
1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con los datos de los usuarios.
3. El administrador hace clic sobre el icono de eliminar usuario de la fila correspondiente.
4. El sistema informa de que se eliminarán todos sus registros.
5. El sistema muestra una confirmación de que el usuario ha sido borrado correctamente.

---

## Errores

### Posibles errores a considerar:

1. **Error de conexión:** 
   - Mensaje: "No se pudo conectar con la base de datos. Por favor, inténtelo de nuevo o contacte con soporte técnico."

2. **Error de validación:** 
   - Mensaje: "El campo de correo electrónico debe ser una dirección de correo válida."

3. **Error de autenticación:** 
   - Mensaje: "La acción no está autorizada. Por favor, inicie sesión o recupere su contraseña."

4. **Error de autorización:** 
   - Mensaje: "No tiene permisos para realizar esta acción."

5. **Error de servidor:** 
   - Mensaje: "Se ha producido un error. Por favor, inténtelo de nuevo o contacte con soporte técnico."


# Bocetos 

## Diseño de Bocetos
### Home y menus de usuario
Hemos didivido la interficie en 3 zonas, el encabezado (header), el cuerpo principal (main) y el pie de página (footer).
![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508218-79dad6473fd7d571d5f73e96f893af7f.jpg)
En el **header** vamos a alojar una barra superior fija con: el **logo** y nombre de la web (que hará las veces de link a la página principal), un **menú central genérico** (para acceder a páginas públicas), un **menú central específico**  (que será diferente en función del rol de usuario logueado), y un icono (avatar) que permitirá ver la imagen del usuario logueado y que hará de botón para desplegar otro menú, el menú de usuario (que tendrá diferentes items dependiendo de si la sesió está abierta o no y del tipo de rol que tenga el usuario logueado).
El **cuerpo** (main) albergará el contenido de las páginas. Será la sección que vaya cambiando dependiendo de la página que carguemos. En la página home simplemente aparece una imagen de fondo y el nombre de la web.
El **Footer** será meramente informativo.

### Registro de un usuario

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508212-88f1ed0a8c53df9f791872b3b03519d8.jpg)

### Iniciar Sesion

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508205-edba4a097ae58ec58f1bb07dc4b7e5e1.jpg)

###Editar mi perfil

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508198-5b5eff368d5421682a834f3ed67af5bd.jpg)

Editar perfil será una ventana modal, es decir, se mostrará la ventana y el fondo se volverá oscuro.

Esta ventana de edición permitirá, además de modificar los datos del usuario, **añadir una imagen de avatar**. Por el momento, en esta primera versión, podremos añadir el link de una imagen que esté alojada en un servidor. En la siguiente versión (versión 1.1) actualizaremos esta ventana para que puedan **subirse archivos** (imágenes) al servidor.

### Listado de TODOS los proyectos

En esta página podemos ver, en la pestaña izquierda, todos los proyectos en forma de tabla. La pestaña derecha mostrará solo los proyectos que ha subido el usuario que ha iniciado la sesión.

Al hacer clic en cualquier parte de la fila se accede al detalle del proyecto.

También tenemos un buscador que permite buscar proyectos por palabras clave en el nombre o descripción.

Las celdas de encabezado de las tablas incluyen un icono (flecha hacia arriba o hacia abajo) que permitirá ordenar la tabla por la columna en concreto.

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508192-6b771260fe99faccc760b23f71f02406.jpg)

### Listado de MIS Proyectos

En esta pestaña podemos ver los trabajos pertenecientes al usuario logueado. En cada fila aparece, además, un icono para editar y borrar el proyecto correspondiente. Por otro lado tenemos la opción de subir un nuevo proyecto.

<em>Habría que valorar si es mejor crear un único buscador para el nombre y descripción del proyecto o dos barras de busqueda, una para cada sección, tal y como se muestra en el boceto anterior.</em>

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508186-f38d99164909a0783d2040ce646e928a.jpg)

### Detalle de un proyecto

Si el usuario que está viendo la información de un proyecto en concreto es el autor de dicho proyecto, aparecerá un icono para la edición del mismo.

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508178-ed1f5e41681a1dcee1edac19f807c239.jpg)

### Nuevo proyecto/ Editar Proyecto

Esta vista sirve tanto para crear un nuevo proyecto como para editarlo.

Si el proyecto es nuevo, el botón mostrará el texto <em>ENVIAR</em>, pero si estamos editándolo aparecerá el texto <em>ACTUALIZAR</em>. Al crear o actualizar el proyecto, la web nos reenvía a la vista 'Detalle de proyecto'.

### Panel de administracion de proyectos

Si tienes el rol '**administrador**' aparecerá el item '<em>Panel administración</em>' en el **menú superior específico**. Este item nos permite cargar la vista '**Panel administración de proyectos**'. Desde esta vista también podemos acceder al '<em>Panel administración de usuarios</em>'.

Esta vista permite **editar o borrar** cualquier proyecto haciendo click en los iconos correspondientes. La opción editar nos llevará a la vista '<em>Editar proyecto</em>'

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508161-c9cfd413730d67ea74b43e48fedea5ec.jpg)

### Panel de administracion de usuarios

Esta vista permite **editar los datos de los usuarios**. Por supuesto es solo accesible para los administradores.

En esta vista, el método para editar la información es diferentes. Aquí los datos **aparecen sobre 'inputs'**, de manera que al hacer clic sobre ellos, aparecerá el cursor de edición. Se pueden modificar todos los datos (en especial el '<em>estado</em>' y el '<em>rol</em>' del usuario) excepto el email.

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/1684861508152-04e98cfb1faeecf2a53ea921bdd63ebe.jpg)

# Test de Usuarios inicial
## Primer Test de Usabilidad

Tal y como hemos comentado en el apartado '<em>Diseño centrado en el usuario</em>', una de las premisas de esta metodología consiste en realizar evaluaciones constantes para detectar los posibles problemas de usabilidad cuanto antes mejor. Por lo que una buena idea es realizar un primer test de usabilidad.

Por el momento os adelanto que la técnica más utilizada par evaluar la usabilidad son los '**tests de usuario**'.

Estos consisten en crear una bateria de acciones que el usuario debe realizar, para detectar si existe algún problema en la interación con la aplicación. A continuación vamos pidiendo a un usuario focal (una persona que esté dentro del target de usuarios a quien va dirigida la app) que realice cada tarea, mostrandole los bocetos que aparecerán en cada interacción. Por ejemplo, si hace clic sobre el item de menú 'login' le mostraremos el boceto de la página 'login'.

Para este primer test hemos preparado las siguientes acciones:

-   Suponiendo que eres un **usuario no registrado**:

    -   Accede a la información general 'A cerca de' de esta web.
    -   Regístrate.
    -   Logueate.
    -   Modifica tu perfil añadiendo una imagen de avatar.
    -   Busca un proyecto llamado 'Tetris'.
    -   Accede al detalle de este proyecto.
    -   Cierra sesión.
-   Suponiendo que eres un usuario con rol 'Desarrollador':

    -   Crea un proyecto nuevo.
    -   Accede a la lista de tus proyectos.
    -   Muestra el detalle de tu nuevo proyecto.
    -   Edita tu proyecto cambiando la descripción.
    -   Borra tu proyecto.
-   Suponiendo que eres un usuario con rol 'Administrador':

    -   Muestra la lista de proyectos.
    -   Borra un proyecto.
    -   Modifica el nombre de un proyecto.
    -   Muestra la listra de todos los usuarios registrados.
    -   Canvia el rol de uno de ellos.
    -   Modifica la imagen de su avatar.
## Conclusiones y modificaciones

De este primer test de usuario se desprenden las siguientes conclusiones:

-   La vista de proyectos en forma de **tabla no es muy atractiva**.
-   El usuario ha tenido **dificultades a la hora de intentar modificar la imagen** avatar de un usuario.

Para mejorar estos pequeños problemas de usabilidad vamos a tomar las siguientes acciones:

-   En la vista de proyectos vamos crear un par de botones para poder alternar entre ver los proyectos en forma de **tabla** o en forma de **tarjetas**.

-   En la vista de administración de usuarios, añadir un pequeño icono (un **lápiz**) sobre la imagen del avatar del usuario para que se intuya que, al hacer clic sobre la imagen, se accede a la ventana de modificación de perfil.

Estos serían los bocetos actualizados:

## Vista de proyectyos

## Vista del Panel de administracion de usuarios

Ahora que tenemos los bocetos creados y testeados, es el momento de pasar al siguiente nivel: **El diseño de los wireframes**.

# Wireframe, mockup y guia de estilos

En el apartado anterior hemos diseñado y testeado los bocetos para la versión 1.0 de nuestro proyecto.

El siguiente paso, si nos basamos en el DCU (Diseño centrado en el usuario), sería diseñar los wireframes y, una vez tenemos los wireframes, los mockups junto a la guía de estilos.

Un proyecto de mayor envergadura requeriría de un equipo de trabajo con más de un perfil. La tarea de diseñar la interficie corresponde, por un lado, al **arquitecto de la información** y por otro, a un **diseñador gráfico**.

## y nosotros, ¿necesitamos wireframe? ¿y mockup? ¿y guia de estilos?

En nuestro caso, como el proyecto es muy básico, no nos vamos a centrar en aquellas tareas que corresponderían a un arquitecto de la información ni a un diseñador gráfico.

El mapa web de nuestra aplicación se limita a dar acceso a los proyectos y la administración de los usuarios. Sería tan sencillo com este:

En cuanto al diseño gráfico, aunque es una misión emocionante, nos vamos a limitar a trabajar con un **tema de bootstrap** utilizando **Bootswatch**, respetando, a priori, su paleta de colores y modificando, solo en algunos casos, algunos detalles como *la fuente para los títulos*.

![Alt Text](https://carrebola.github.io/vanillaPill/assets/images/bootswatch-5cfb41f7af4e39535489cba274c60968.png)





