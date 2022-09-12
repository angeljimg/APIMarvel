let personajes=[];

let render =(personajesArr) =>{
    
    document.querySelector("#results").innerHTML="";//borra las tarjetas cada que se recarga el sitio

    for(let i in personajesArr){
        let col = document.createElement("div");
        col.classList.add("column", "is-4-desktop", "is-6-tablet");

        let card = document.createElement("div");
        card.classList.add("card");


        card.innerHTML=`<div class="card-image">
                            <figure class="image is-16by9">
                            <a title="${personajesArr[i].name}" href="${personajesArr[i].urls[0].url}"><img src="${personajesArr[i].thumbnail.path}.${personajesArr[i].thumbnail.extension}" alt="${personajesArr[i].name}"></a>
                            </figure>
                        </div>
                        <div class="card-content">
                                <span class="tag is-primary">Comics:${personajesArr[i].comics.available}</span>
                                <span class="tag is-link">Series:${personajesArr[i].series.available}</span>
                                <span class="tag is-info">Stories:${personajesArr[i].stories.available}</span>
                                <div class="is-flex is-justify-content-space-between is-align-items-center">
                                    <div class="content mb-0">
                                        <p class="has-text-weight-semibold mb-0 is-size-4 is-uppercase is-size-4 is-uppercase">${personajesArr[i].name}</p>
                                        <p class="mb-0 is-size-7">${personajesArr[i].description}</p>
                                    </div>
                                    <div class="ranking has-text-right">
                                        <span class="icon-text">
                                            <span class="icon has-text-success"><i class="mdi mdi-star mdi-18px"></i></span> 
                                            <span>${personajesArr[i].id}</span>
                                        </span>
                                    </div>
                            </div>
                        </div>`
                        
        col.append(card);
        document.querySelector("#results").append(col);          
    }
}

fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8795c7e44644d4f5cda7b26421a4d711&hash=b96e81ec277bccc2d4a9557b20224067")
.then((response)=>response.json())//convierte el API a Json
.then((data)=>{//Guardaos el Json en una variable o arreglo
    personajes=data.data.results;//ingresa solamente al arreglo del objeto
    console.log(personajes);
    render(personajes);
})