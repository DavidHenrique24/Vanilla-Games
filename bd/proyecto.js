// Importa el objeto 'supabase' desde un archivo 'supabase.js'
import { supabase } from './supabase'

// Definición de la clase Proyecto
export class Proyecto {
  // Constructor que inicializa las propiedades del proyecto
  constructor({
    id = null, // ID único del proyecto
    created_at = null, // Fecha de creación del proyecto
    user_id = null, // ID del usuario asociado al proyecto
    nombre = null, // Nombre del proyecto
    descripcion = null, // Descripción del proyecto
    imagen = 'default_avatar.png', // URL del avatar por defecto
    enlace = null, // Enlace relacionado con el proyecto
    repositorio = null, // URL del repositorio del proyecto
    estado = 'activo', // Estado del proyecto (activo, inactivo, etc.)
  }) {
    // Asignación de valores a las propiedades del proyecto
    this.id = id
    this.created_at = created_at
    this.user_id = user_id
    this.nombre = nombre
    this.descripcion = descripcion
    this.imagen = imagen
    this.enlace = enlace
    this.repositorio = repositorio
    this.estado = estado
  }

  // Método estático para obtener todos los proyectos
  static async getAll() {
    const { data: proyectos, error } = await supabase
      .from('proyectos') // Asegúrate de que el nombre de la tabla sea 'proyectos'
      .select('*') // Selecciona todas las columnas
      .order('created_at', { ascending: false }) // Ordena por fecha de creación descendente

    if (error) {
      throw new Error(error.message)
    }

    // Devuelve los proyectos mapeados a instancias de la clase Proyecto
    return proyectos.map((proyecto) => new Proyecto(proyecto))
  }

  // Método estático para obtener un proyecto por su ID
  static async getById(id) {
    const { data: proyecto, error } = await supabase
      .from('proyectos') // Asegúrate de que el nombre de la tabla sea 'proyectos'
      .select('*')
      .eq('id', id) // Filtra por el ID del proyecto

    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de Proyecto con la información obtenida
    return new Proyecto(proyecto[0])
  }

  // Método estático para obtener un proyecto por el ID del usuario asociado
  static async getByUserId(userId) {
    const { data: proyecto, error } = await supabase
      .from('proyectos') // Asegúrate de que el nombre de la tabla sea 'proyectos'
      .select('*')
      .eq('user_id', userId) // Filtra por el ID de usuario asociado

    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de Proyecto con la información obtenida
    return new Proyecto(proyecto[0])
  }

  // Método estático para crear un nuevo proyecto
  static async create(proyectoData) {
    const { data, error } = await supabase
      .from('proyectos') // Asegúrate de que el nombre de la tabla sea 'proyectos'
      .insert(proyectoData) // Inserta los datos del nuevo proyecto
      .select() // Devuelve los datos insertados

    if (error) {
      throw new Error(`Error creando proyecto: ${error.message}`)
    }

    // Si se insertaron datos, devuelve una nueva instancia de Proyecto con los datos insertados
    return data ? new Proyecto(data[0]) : null
  }

  // Método estático para actualizar un proyecto existente por su ID
  static async update(id, newData) {
    const { error } = await supabase
      .from('proyectos') // Asegúrate de que el nombre de la tabla sea 'proyectos'
      .update(newData) // Actualiza con los nuevos datos proporcionados
      .eq('id', id) // Filtra por el ID del proyecto a actualizar

    if (error) {
      throw new Error(`Error actualizando proyecto: ${error.message}`)
    }

    return true
  }
}
