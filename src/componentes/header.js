
// importamos la función ls del archivo funciones
import { ls } from '../componentes/funciones'

export const header = {
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#/home"
      ><img
        src="images/logo.svg"
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
      
      <!-- Menu común para todos los usuarios -->
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">A cerca de</a>
        </li>
      </ul>

      <!-- Aquí va el Menu rol -->
      <div id="menuRol">
       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
      </div>
    
      <!-- Aquí va el Menu usuario -->
      <div id="menuUsuario">
            <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <button
                                            type="button"
                                            class="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            Editar perfil
                                        </button>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
      
      </div>
    
    </div>
  </div>
</nav>
   <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
            <!-- Formulario de edición de perfil -->
                <form action="">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Edición de perfil
                                </h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div class="form border shadow-sm p-3">
                                    <div class="m-1" style="max-width: 400px">
                                        <div class="imgPerfil border shadow-sm p-3 mb-3">
                                            <div
                                                class="imagen mx-auto mb-1 rounded-circle"
                                                style="
                                                    background-image: url(.images/avatar.svg);
                                                    width: 200px;
                                                    height: 200px;
                                                    background-size: cover;
                                                    background-position: center;
                                                "
                                            ></div>
                                            
                                            <!-- Imagen de perfil -->
                                            <label for="imagen" class="form-label mt-3">URL imagen:</label>
                                            <input
                                                id="imagen"
                                                type="url"
                                                class="form-control"
                                                value="http://imagenavatar.png"
                                            />
                                        </div>

                                        <div class="">
                                            
                                            <!-- Nombre -->
                                            <label for="nombre" class="form-label">Nombre:</label>
                                            <input required id="nombre" type="text" class="form-control" />
                                            
                                            <!-- Apellidos -->
                                            <label for="apellidos" class="form-label">Apellidos:</label>
                                            <input id="apellidos" type="text" class="form-control" />
                                            
                                            <!-- Email -->
                                            <label for="email" class="form-label">Email:</label>
                                            <input required id="email" type="email" class="form-control" />
                                            
                                            <!-- Contraseña -->
                                            <label for="pass" class="form-label mt-3">Contraseña:</label>
                                            <input required id="pass" type="password" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancelar
                                </button>
                                <button type="button" class="btn btn-primary">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
  `,


  script: ()=>{
    console.log('Header cargado')
  }

};
