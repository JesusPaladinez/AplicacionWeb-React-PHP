// consumo de api php utlizando fetch

// Función para obtener todos los productos
export const obtenerProductos = async () => {
  const response = await fetch(`http://localhost/MiProyecto/backend/api/api.php/productos`);
  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }
  return response.json();
};

// Función para obtener un Producto por su ID
export const obtenerProducto = async (id) => {
  const response = await fetch(`http://localhost/MiProyecto/backend/api/api.php/productos/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener el producto");
  }
  return response.json();
};

// Función para agregar un nuevo Producto
export const agregarProducto = async (producto) => {
  const response = await fetch(`http://localhost/MiProyecto/backend/api/api.php/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });
  if (!response.ok) {
    throw new Error("Error al registrar el Producto");
  }
  return response.json();
};

// Función para actualizar un Producto existente por su ID
export const actualizarProducto = async (id, producto) => {
  const response = await fetch(`http://localhost/MiProyecto/backend/api/api.php/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });
  if (!response.ok) {
    throw new Error("Error al actualizar el Producto");
  }
  return response.json();
};

// Función para eliminar un Producto por su ID
export const eliminarProducto = async (id) => {
  const response = await fetch(`http://localhost/MiProyecto/backend/api/api.php/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar el Producto");
  }
  return response.json();
};
