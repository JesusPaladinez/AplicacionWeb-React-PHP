import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form' // librería para validar formularios

// funciones del api
import { obtenerProductos, agregarProducto, actualizarProducto, eliminarProducto } from '../api/api';

// componentes
import TableRow from './TableRow';
import FormModal from './FormModal';

export default function Table() {
    const {handleSubmit} = useForm();

    // estados
    const [abrirModal, setAbrirModal] = useState(false);
    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        async function cargarProductos() {
            try {
                const data = await obtenerProductos();
                setProductos(data)
            } catch (error) {
                console.error(`Error al obtener los productos: ${error}`);
            }
        }
        cargarProductos()
    }, []);

    const onSubmit = handleSubmit(async (producto) => {

        // si ya existe el producto se actualiza o sino se agrega
        if (producto) {
            try {
                // Cuando se hace clic en el botón "Actualizar", establece el producto seleccionado en el estado
                setProductoSeleccionado(producto);
                // Llena el formulario con los detalles del producto seleccionado
                await actualizarProducto({ nombre: producto.nombre, descripcion: producto.descripcion });
            } catch (error) {
                console.error(`Error al actualizar el producto: ${error}`);
            }
        } else {
            try {
                await agregarProducto(producto)
            } catch (error) {
                console.error(`Error al agregar un producto: ${error}`);
            }
        }
    })

    // const handleAgregar = async (data) => {
    //     try {
    //         await agregarProducto(data)
    //     } catch (error) {
    //         console.error(`Error al agregar un producto: ${error}`);
    //     }
    // }

    // const handleActualizarProducto = (producto) => {
    //     // Cuando se hace clic en el botón "Actualizar", establece el producto seleccionado en el estado
    //     setProductoSeleccionado(producto);
    //     // Llena el formulario con los detalles del producto seleccionado
    //     setNuevoProducto({ nombre: producto.nombre, descripcion: producto.descripcion });
    // };

    const handleEliminar = async (id) => {
        try {
            await eliminarProducto(id); // se elimina el producto        
            const data = await obtenerProductos()
            setProductos(data) // se actualiza la lista
        } catch (error) {
            console.error(`Error al eliminar el producto: ${error}`);
        }        
    }
    
  return (
      <div className='flex min-h-screen flex-col items-center justify-center gap-y-9'>            
          <table className="table-auto w-9/12 shadow-lg">
            <thead>
                <tr>
                    <th className='border border-gray-400 px-4 py-2'>ID</th>
                    <th className='border border-gray-400 px-4 py-2'>NOMBRE</th>
                    <th className='border border-gray-400 px-4 py-2'>DESCRIPCIÓN</th>
                    <th className='border border-gray-400 px-4 py-2 w-60'>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => (
                    <TableRow key={producto.id} producto={producto} handleEliminar={handleEliminar} setAbrirModal={setAbrirModal}/>
                ))}
            </tbody>
        </table>
        <button className='flex bg-black font-bold w-20 px8 py-2 items-center justify-center rounded-lg text-white' onClick={() => setAbrirModal(true)}>Agregar</button>
        {abrirModal && <FormModal abrirModal={setAbrirModal} onSubmit={onSubmit} productoSeleccionado={setProductoSeleccionado} />}
    </div>
  )
}