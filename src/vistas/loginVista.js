import { ls } from "../componentes/funciones.js";
import { User } from '../../bd/user.js';
import { Perfil } from '../../bd/perfil.js';

export default {
  template: `
    <div class="container">
        <h1 class="mt-5 text-center">Inicia sesión</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
            <form id="formulario" novalidate action="" class="form border shadow-sm p-3">
                <!-- Email -->
                <label for="email" class="form-label">Email:</label>
                <input id="email" name="email" value="ejemplo@email.com" required type="email" class="form-control" />
                <div class="invalid-feedback">
                    El formato del email no es correcto
                </div>
                
                <!-- Contraseña -->
                <label for="pass" class="form-label mt-3">Contraseña:</label>
                <input required minlength="6" id="pass" name="password" type="password" class="form-control" />
                <div class="invalid-feedback">
                    La contraseña debe tener como mínimo 6 caracteres
                </div>

                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label" for="flexCheckChecked">
                        Recordar sesión
                    </label>
                </div>
                <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                <button type="submit" class="btn btn-primary w-100 mt-3">Iniciar sesión</button>
            </form>
            <a class="d-block mt-5 btn btn-secondary mx-auto" href="registro.html">¿Eres nuevo? Regístrate</a>
        </div>
    </div>
  `,
  script: () => {
    console.log('Vista login cargada');
    
    const formulario = document.querySelector('#formulario');
    
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();
      
      if (!formulario.checkValidity()) {
        formulario.classList.add('was-validated');
        console.log('Formulario no válido');
      } else {
        enviarDatos(formulario);
      }
    });

// Función para enviar datos a la bd
    async function enviarDatos(formulario) {
      try {
        // login
        const user = {
          email: formulario.email.value,
          password: formulario.password.value
        }
        User.logout()
        const usuarioLogueado = await User.login(user)
        console.log('¡login correcto!', usuarioLogueado)
        // Ahora vamos a capturar los datos del perfil del usuario logueado
        console.log('usuarioLogueado', usuarioLogueado);
        const userId = usuarioLogueado.id
        console.log('userId', userId);
        const perfilLogueado = await Perfil.getByUserId(userId)
        console.log('Perfil logueado', perfilLogueado);
        const usuario = {
          email: usuarioLogueado.email,
          rol: perfilLogueado.rol,
          avatar: perfilLogueado.avatar
        }
        console.log('perfil localstorage', usuario);
        // Guardamos datos de usaurio en localstorage
        ls.setUsuario(usuario)
        // Cargamos página home
        window.location = '#/proyectos'
        // Actualizamos el header para que se muestren los menús que corresponden al rol
        header.script()
      } catch (error) {
        console.log('Error al iniciar sesión', error)
        alert('El usuario no existe o la contraseña no es correcta', error)
      }
    }
  }
}
