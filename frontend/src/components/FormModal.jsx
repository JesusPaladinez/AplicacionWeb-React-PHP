import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormModal({abrirModal, onSubmit, productoSeleccionado}) {
  const {register} = useForm()
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <form className='bg-white p-5 rounded flex flex-col justify-center items-center gap-5' onSubmit={onSubmit}> 
        <h1 className='font-bold'>{productoSeleccionado ? 'Actualizar producto' : 'Agregar producto'}</h1>       
        <div>
            <input 
              type="text" 
              className='w-64 px-4 border-2 border-gray-300 rounded-lg focus:online-none focus:border-gray-600 duration-200' 
              placeholder='Nombre'
              {...register('nombre', {required: true})}
            />                       
        </div>
        <div>
            <input 
              type="text" 
              className='w-64 h-20 px-4 border-2 border-gray-300 rounded-lg focus:online-none focus:border-gray-600 duration-200' 
              placeholder='Descripcion'
              {...register('descripcion')}
            />
        </div>
        <div className='flex justify-end gap-6'>
            <button className='flex bg-black font-bold w-20 px8 py-2 items-center justify-center rounded-lg text-white'>Aceptar</button>
            <button className='flex bg-gray-600 font-bold w-20 px8 py-2 items-center justify-center rounded-lg text-white' onClick={() => abrirModal(false)}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}
