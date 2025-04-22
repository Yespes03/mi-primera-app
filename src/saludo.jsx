import React from 'react'; // Necesario si usas JSX que se transpila a 
React.createElement

function Saludo(props) {
// props es un objeto que contiene los datos pasados al componente
// Ejemplo de uso de props: props.nombre
return <h1>¡Hola, yepes{props.nombre}!</h1>;
}

export default Saludo;