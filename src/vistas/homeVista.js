import {Perfil} from '../../bd/perfil.js'
import {Proyecto} from '../../bd/proyecto.js'
export default {
    template: // html
    `
  <div class="container">
    <h1 class="mt-5 text-center fw-bold" style="font-size: 100px">
      Vanilla Games
    </h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
      <img src="../images/logo.svg" alt="fpllefia" class="img-fluid" />
    </div>
  </div>
    `,
     script: async () => {
      console.log('Vista home cargada')
      console.log(Perfil) 
      console.log(Proyecto) 
      const resultado = await Proyecto.getAll()
      console.log(resultado)
    }   
    }


  
  
  