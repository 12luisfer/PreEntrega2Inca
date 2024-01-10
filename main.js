// Arreglo de productos puse los objetos
let productos = [
  { nombre: 'Laptop', marca: 'Asus', precio: 1000 },
  { nombre: 'Desktop', marca: 'MaNitro5', precio: 800 },
  { nombre: 'Monitor', marca: 'Lgd', precio: 200 },
  { nombre: 'Teclado', marca: 'Hyperx', precio: 50 },
  { nombre: 'SSD', marca: 'king', precio: 120 },
  { nombre: 'Memoria RAM', marca: 'Ram Ddr4 8gb Fury Hyperx ', precio: 80 },
  { nombre: 'Pad', marca: 'Lenovo', precio: 15 },
  { nombre: 'Fuente', marca: 'Vx650', precio: 90 },
  { nombre: 'Placa de Video', marca: 'GeForce RTX 3060', precio: 350 }
];
alert('Hola, ¿cómo estás? ¡Te doy la bienvenida!');
// Función para mostrar el listado de productos en forma de lista
const mostrarListadoProductos = () => {
  alert('Listado de productos disponibles:\n\n' +
    productos.map((producto) => `- ${producto.nombre} | Marca: ${producto.marca} | Precio: $${producto.precio}`).join('\n')
  );
};
// Mostrar el listado de productos al inicio
mostrarListadoProductos();
// Bucle que se ejecutará hasta que el usuario presione "Cancelar" o "Esc"
for (let i = 0; ; i++) {
  // Solicitar al usuario el nombre del producto que desea buscar
  let nombreProductoUsuario = prompt(`Listado de productos:\n${productos.map((producto) => producto.nombre).join('\n')}\n\nIntento ${i + 1}: Ingresa el nombre del producto que deseas buscar, o presiona "Cancelar" o "Esc" para salir:`);

  // Salir del bucle si el usuario presiona "Cancelar" o "Esc"
  if (!nombreProductoUsuario || nombreProductoUsuario.toLowerCase() === 'esc') {
    // Mensaje de despedida
    alert('Muchas gracias por tu visita y tu consulta. ¡Que tengas un buen día!');
    break;
  }

  // Validar si el producto ingresado es válido
  while (!productos.some(producto => producto.nombre.toLowerCase() === nombreProductoUsuario.toLowerCase())) {
    alert('Por favor, ingresa un producto válido de la lista.');
    nombreProductoUsuario = prompt(`Listado de productos:\n${productos.map((producto) => producto.nombre).join('\n')}\n\nIntento ${i + 1}: Ingresa el nombre del producto que deseas buscar, o presiona "Cancelar" o "Esc" para salir:`);

    // Salir del bucle principal si el usuario presiona "Cancelar" o "Esc"
    if (!nombreProductoUsuario || nombreProductoUsuario.toLowerCase() === 'esc') {
      //despedida
      alert('Muchas gracias por tu visita y tu consulta. ¡Que tengas un buen día!');
      break;
    }
  }
  if (!nombreProductoUsuario || nombreProductoUsuario.toLowerCase() === 'esc') {
    //despedida
    alert('Muchas gracias por tu visita y tu consulta. ¡Que tengas un buen día!');
    break;
  }
  //producto existe en la lista
  const productoEncontrado = productos.find((producto) => producto.nombre.toLowerCase() === nombreProductoUsuario.toLowerCase());

  //detalles de producto en la consola
  console.log(`Especificaciones del producto:\nMarca: ${productoEncontrado.marca}\nPrecio: $${productoEncontrado.precio}`);
  
  //detalles del producto en un alert
  alert(`Especificaciones del producto:\n\nMarca: ${productoEncontrado.marca}\nPrecio: $${productoEncontrado.precio}`);
}
productos.forEach((producto, indice) => {
  console.log(`Producto ${indice + 1}: ${producto.nombre}`);
});
