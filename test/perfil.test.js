// Cargamos libreria de testing
import { expect } from 'chai'

// cargamos libreria de supabase
import { supabase } from '../bd/supabase.js'

// Cargamos la clase Proyecto
import { Proyecto } from '../bd/proyecto.js'

describe('getById()', function () {
  it('debería devolver el nombre del proyecto con el ID correspondiente', async function () {
    // Obtener el proyecto por ID
    const proyecto = await Proyecto.getById(1)
    // Esperamos que el nombre coincida
    expect(proyecto.nombre).equal('Proyecto de Gestión de Inventario')
  })
})