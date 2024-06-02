import React from 'react'

export default function TableRow({producto, handleEliminar, setAbrirModal}) {
  return (
    <tr key={producto.id}>
      <td className='border border-gray-400 px-4 py-2'>{producto.id}</td>
      <td className='border border-gray-400 px-4 py-2'>{producto.nombre}</td>
      <td className='border border-gray-400 px-4 py-2'>{producto.descripcion}</td>
      <td className='flex gap-x-4 border border-gray-400 px-4 py-2 justify-center'>
        <button className='bg-blue-600 font-bold rounded-lg py-1 px-3 text-white' onClick={() => setAbrirModal(true)}>Actualizar</button>
        <button className='bg-red-600 font-bold rounded-lg py-1 px-3 text-white' onClick={() => handleEliminar(producto.id)}>Eliminar</button>
      </td>
    </tr>
  )
}
