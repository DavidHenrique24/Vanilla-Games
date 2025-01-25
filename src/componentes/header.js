
import { ls } from "../componentes/funciones.js";
import { menuRol, menuUsuario } from "./menu.js";
import { editarPerfil } from './editarPerfil.js';

export const header = {
  // html
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand router-link" href="#/home"
      ><img
        src="/images/logo.svg"
        alt=""
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />

      Vanilla Games</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#/proyectos">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#/adminUsuarios">A cerca de</a>
        </li>
      </ul>

       <!-- Aquí va el Menu rol -->
      <div id="menuRol"></div>
      <!-- Aquí va el Menu usuario -->
      <div id="menuUsuario"></div>
    </div>
  </div>
</nav>
<div id="modal"></div>

  `,

  script: () => {
    console.log("Header cargado");
    document.querySelector('#modal').innerHTML = editarPerfil.template
    const rolUsuario = ls.getUsuario().rol;
    switch (rolUsuario) {
      case "registrado":
        // menú rol
        document.querySelector("#menuRol").innerHTML =
          menuRol.templateRegistrado;
        // menú usuario
        document.querySelector("#menuUsuario").innerHTML =
          menuUsuario.templateRegistrado;
        break;
      case "desarrollador":
        // menú rol
        document.querySelector("#menuRol").innerHTML =
          menuRol.templateDesarrollador;
        // menú usuario
        document.querySelector("#menuUsuario").innerHTML =
          menuUsuario.templateDesarrollador;
        break;
      case "admin":
        // menú rol
        document.querySelector("#menuRol").innerHTML = menuRol.templateAdmin;
        // menú usuario
        document.querySelector("#menuUsuario").innerHTML =
          menuUsuario.templateAdmin;
        break;
      default: // Para usuarios anónimos
        // menú rol
        document.querySelector("#menuRol").innerHTML = menuRol.templateAnonimo;
        // menú usuario: No tiene
        break;
    } 
    try {
      // email y rol
      document.querySelector('#emailUserMenu').innerHTML = ls.getUsuario().email
      document.querySelector('#rolUserMenu').innerHTML = ls.getUsuario().rol
      // para la imagen de avatar (avatar.png si el campo está vacío)
      const imagen = ls.getUsuario().avatar === '' ? 'images/avatar.svg' : ls.getUsuario().avatar
      document.querySelector('#avatarMenu').setAttribute('src', imagen)
    } catch (error) {
      console.log('El usuario no está registrado y no tiene menú de usuario');
    }
    // Cerrar sesión
    // Capturamos clic sobre el item de cerrar sesión
    document.querySelector('header').addEventListener('click', (e) => {
      if (e.target.classList.contains('cerrarSesion')) {
        e.preventDefault()
        // Borramos el localstorage
        ls.setUsuario('')
        // Cargamos la pagina home
        window.location = '#/home'
        header.script()
      }
    })

}
}