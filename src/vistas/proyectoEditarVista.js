import { Proyecto } from "../../bd/proyecto.js"

export default {
  // html
  template: `
  <div class="container">
  <h1 class="mt-5">Detalle del proyecto</h1>
  <div class="d-flex justify-content-end">
    <bottom id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left">
      Volver</bottom>
  </div>
  
  <div class="row mt-2">
    <div class="col-12 col-md-4 mb-3">
      <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid">
    </div>
    <div class="col-12 col-md-8">
      <p>
        <p><strong>Nombre: </strong><span id="nombreJuego">TETRIS</span></p>
        <p><strong>Descripción: </strong><span id="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
        <p><strong>Estado: </strong><span id="estado">Estado</span></p>
        <p><strong>Fecha: </strong><span id="fecha">12/12/2023</span></p>
        <p><strong>Enlace: </strong><span id="enlace">http://www.enlaceapp.com</span></p>
        <p><strong>Repositorio: </strong><span id="repositorio">carrebola.github.com/123456</span></p>
      </p>
    </div>
  </div>
  <div
    class="container fixed-bottom d-flex justify-content-end"
    style="padding: 0px 0px 100px 0px"
  >
    <button
      id="botonEditarDetalle"
      data-id=""
      class="btn btn-success rounded-circle fs-3 shadow bi bi-pencil router-link"
      style="width: 50px"
    >
     
    </button>
  </div>
  
</div>
  `,
  script: async (id) => {
    try {
      // Obtenemos el proyecto directamente de la base de datos
      const proyecto = await Proyecto.getById(id);

      if (!proyecto) {
        alert("Proyecto no encontrado");
        window.location = "#/proyectos";
        return;
      }

      // Transformamos la fecha en un formato yy-mm-dd
      const fecha = proyecto.created_at;
      const fechaCorta = fecha.split("T")[0];

      // Inyectamos los datos en la vista
      document
        .querySelector("#imagenJuego")
        .setAttribute("src", proyecto.imagen);
      document.querySelector("#nombreJuego").innerHTML = proyecto.nombre;
      document.querySelector("#descripcion").innerHTML = proyecto.descripcion;
      document.querySelector("#estado").innerHTML = proyecto.estado;
      document.querySelector("#fecha").innerHTML = fechaCorta;
      document.querySelector("#enlace").innerHTML = proyecto.enlace;
      document.querySelector("#repositorio").innerHTML = proyecto.repositorio;

      // Añadimos el id en data-id al botón editar
      document
        .querySelector("#botonEditarDetalle")
        .setAttribute("data-id", proyecto.id);

      // Boton volver atras
      document.querySelector("#botonVolver").addEventListener("click", () => {
        window.history.back();
      });

      // Boton editar
      document
        .querySelector("#botonEditarDetalle")
        .addEventListener("click", (e) => {
          const id = e.target.dataset.id;
          window.location = `#/editarProyecto/${id}`;
        });
    } catch (error) {
      alert("Error al cargar el proyecto: " + error.message);
      window.location = "#/proyectos";
    }
  },
};