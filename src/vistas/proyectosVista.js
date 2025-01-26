import { proyectos } from '../../bd/datos.Prueba'
import { ls } from '../componentes/funciones'

export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Proyectos</h1>
  <div class="row mt-5">
    <div class="col-12">
      <!--nav-tabs-->
      <ul class="nav nav-tabs">
        <!--Etiqueta Todos los proyectos-->
        <li class="nav-item w-50">
          <button 
            class="selectorFicha fichaProyectos nav-link w-100 active"
          >
            Todos los proyectos
          </button>
        </li>
        <!--Etiqueta Mis proyectos-->
        <li id="pestanyaMisProyectos" class="nav-item w-50">
          <button 
            class="selectorFicha fichaMisProyectos nav-link w-100"
          >
            Mis proyectos
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="border border-top-0 p-3">
    <div class="row">
      <div class="col-12 col-sm-4 mb-3">
      <!-- Boton para subir proyectos -->
       <a href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
      </div>
      <div class="d-flex col-12 col-sm-8 mb-3">
        <!-- Botones para alternar entre vista de tabla o de tarjetas -->
        <button class="vistaTabla btn btn-secondary me-2 bi bi-list">
        </button>
        <button class="vistaTarjetas btn btn-secondary me-2 bi bi-grid-3x3-gap ">
        </button>
        <!-- Buscador -->
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping"
            ><i class="bi bi-search"></i
          ></span>
          <input
            id="inputBusqueda"
            type="text"
            class="form-control"
            placeholder="Buscador"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <span class="input-group-text" id="addon-wrapping"
            ><i id="borrarBuscador" class="bi bi-x"></i
          ></span>
        </div>
      </div>
    </div>
    
    <!-- Tabla de proyectos -->
    <div id="tabTabla" class="col-12 d-none d-xl-block" style="overflow-x: auto">
      <table
        class="table table-hover align-middle mt-3"
        style="min-width: 1000px"
      >
        <thead>
          <tr>
            <th></th>
            <th>
              Nombre <span><i class="bi bi-caret-down"></i></span>
            </th>
            <th>
              Descripción <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Enlace <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>Repositorio</th>
            <th>
              Autor <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Fecha <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Estado <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tbodyProyectos">
          <!-- Aqui van los datos generados por la lógica -->
          
        </tbody>
      </table>
    </div>

    <!-- Panel de tarjetas -->
    <div id="tabTarjetas" class="d-xl-none row">
      <!-- Aqui van los datos generados por la lógica -->
     
    </div>
  </div>
</div>
  `,
  script: () => {
   // Función para pintar tabla a partir de array
   const pintaTabla = (proyectos) => {
    let tbodyProyectos = ''
    // Para cada proyecto del array 'proyectos'
    proyectos.forEach(proyecto => {
    // sumamos un tr con los datos del proyecto
      tbodyProyectos += `
    <tr>
      <td>
        <div class="containerImagen">
          <img 
            width="200px" 
            src=${proyecto.imagen || 'images/imagenVacia.png'} 
            alt="imagen proyecto" />
        </div>
      </td>
      <td>${proyecto.nombre}</td>
      <td>${proyecto.descripcion}</td>
      <td><a href="${proyecto.enlace}"><i class="bi bi-link fs-4"></i></a></td>
      <td><a href="${proyecto.repositorio}"><i class="bi bi-folder-symlink fs-4"></i></a></td>
      <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
      <td>${proyecto.created_at}</td>
      <td>${proyecto.estado}</td>
      <td>
        <a
        data-user_id = ${proyecto.user_id}
        class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
        ></a>
      </td>
      <td>
        <a
          data-user_id = ${proyecto.user_id}
          class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
        ></a>
      </td>
    </tr>
          
    `
    })
    // inyectamos el resultado en el tbody
    document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
  }
  
  // Ejecutamos la función
  pintaTabla(proyectos)

    // ####################################################################
  // *** FUNCIÓN PARA PINTAR TABLA A PARTIR DE ARRAY datos ***
  // ####################################################################
  const pintaTarjetas = (proyectos) => {
    let tarjetasProyectos = ''
    // Para cada proyecto del array 'proyectos'
    proyectos.forEach(proyecto => {
    // sumamos un tr con los datos del proyecto
      tarjetasProyectos += // html
    `
    <!-- tarjeta  -->
    <div class="col-12 col-lg-6">
      <div class="card mb-3">
        <div class="row g-0">
          <div
            class="col-4"
            style="
              background-image: url(${proyecto.imagen || 'images/imagenVacia.png'});
              background-position: center;
              background-size: cover;
            "
          ></div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">${proyecto.nombre}</h5>
              <p class="card-text">
                ${proyecto.descripcion}
              </p>
              <p class="small m-0 text-end text-italic">Autor: ${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</p>
              <p class="small text-end text-italic">Fecha: ${proyecto.created_at}</p>
  
              <a class="btn btn-sm btn-outline-primary" href="${proyecto.enlace}"><i class="bi bi-link"></i></a>
              <a class="btn btn-sm btn-outline-primary" href="${proyecto.repositorio}"><i class="bi bi-folder-symlink"></i></a>
              <a class="btn btn-sm btn-success" href="#">${proyecto.estado}</a>
              <a
                data-user_id = ${proyecto.user_id}
                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
              ></a>
              <a
                data-user_id = ${proyecto.user_id}
                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>  
    `
    })
    
    document.querySelector('#tabTarjetas').innerHTML = tarjetasProyectos
  }
  
  // ####################################################################
  // Función para pintar tarjetas
  // ####################################################################
  pintaTarjetas(proyectos)  





   }
}