/*
const urlDB ='https://peliculas-app-56aec-default-rtdb.firebaseio.com/';
const publicPost = document.querySelector('#publicar');
publicPost.addEventListener('click', () => {guardarPost});

const guardarfire = (articuloId, titulo, descripcion, funcion) => {
    const url = `${urlDB}/articulos.json`;  
    const articulo = {articuloId, titulo, descripcion};
    fetch(url, {
        method: 'POST', 
        body:JSON.stringify(articulo),
        headers: {
            'Content-Type':'application.json'
        }
    }).then((respuesta) => respuesta.json())
    .then((body) => funcion(body))
    .catch((error) => console.log(error));
}
*/
const getUsers = () => {
    console.log("hola mundo ")
    
    const url = "http://localhost:8000/users"
    fetch(url)
    .then(response => response.json())
    .then((response)=>{console.log(response)})
    .catch((error)=>console.log(error))
    }