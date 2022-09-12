let buscar = (evento) =>{
    evento.preventDefault();
    let inputname = document.querySelector("#buscar").value.toLowerCase();
    let filtrado = personajes.filter((personaje)=>{
        return personaje.name.toLowerCase().includes(inputname);
    })
    render(filtrado);
}

document.querySelector("#busqueda").addEventListener("submit",buscar);