const urlDB ='https://devto-78ce5-default-rtdb.firebaseio.com/';
const sectionsNode = document.querySelectorAll('section');
const sections = Array.from(sectionsNode);
const tarjetas  = document.getElementById('tarjetas')
console.log(tarjetas)
let posts =[];

console.log(sections)




const init = () => {

    //MUESTRA LA SECCION DE REGISTRO
    sections.forEach((section) => {
        // if (section.id != 'todosLosHeroes') {
        //     section.style.display = 'none';
        // }

        //alertaGuardar.style.display = 'none';
        if (section.id != 'newpost') {
            section.style.display = 'none';
        }


    });
}

//MUESTRA LA SECCION DE TODOS LOS HEROES
const mostrarhome = () => {
    sections.forEach((section) => {
        if (section.id === 'home') {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });


}




//MUESTRA LA SECCION DE REGISTRAR
const mostrarRegistrar = () => {
    sections.forEach((section) => {
        if (section.id === 'newpost') {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
}

//MUESTRA LA SECCION DE POST 
const muestrapost = () => {
    sections.forEach((section) => {
        if (section.id === 'post') {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
   
}


const editarPost =(nid)=>{
    sections.forEach((section) => {
        if (section.id === 'edit') {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
editar(nid)
}



//FUNCION CREA UN POST CON DATOS DE INPUT CREAR POST 
const  boton=(e)=>{
     //Previene borrado de datos 
    e.preventDefault()
    //obtiene arreglo de inputs htmllist
    const inputsNode = e.target.querySelectorAll('input');
    //html list lo pasa a array
    const inputs = Array.from(inputsNode);
    //crea objeto post
    let post = {};
    //Agrega a el objeto propiedades y valores. 
    inputs.forEach((input) => {
        post[input.name] = input.value;
    });
    post.id = posts.length
    //agrega objeto a arreglo de posts
    posts.push(post);
    mostrarhome()
    renderizarposts()
    console.log (posts)  
    //console.log(post)
    //guardarfire()
}





//FUNCION ELIMINA POST

const eliminarpost =(id)=>{
    posts = posts.filter((post)=>{
        return post.id != id
    })
    renderizarposts()
}




///FUNCION RENDERIZA LOS POSTS
const renderizarposts = () => {

    //ELIMINA RENDERIZACIONES PREVIAS
    const postendiv = tarjetas.children
   
    if (postendiv.length > 0){
    const  postcards = Array.from(postendiv)
     
    postcards.forEach((postcard)=>{
           tarjetas.removeChild(postcard)
       })
       console.log(tarjetas)
    }

//MANDA A LLAMAR LA FUNCION CREAR CARD    
    posts.forEach((post) => {
        const card = cardPost(post);
        tarjetas.insertAdjacentHTML('afterbegin', card);
    });
}


//MUESTRA UN POST 
const muestrainfoPost=(nid)=>{
    muestrapost()
    renderizarunpost()
    

}

    //RENDERIZAR UN SOLO POST 
    const renderizarunpost =()=>{
    const postcreados = unpost.children
    if (postcreados.length>0){
        const postcreados2 =Array.from(postcreados)
    postcreados2.forEach((poster)=>{
        tarjetas.removeChild(postcard)
    })
}

    //MANDA A LLAMAR LA FUNCION CREAR CARD    
    posts.forEach((post) => {
        const card = cardPost(post);
        tarjetas.insertAdjacentHTML('afterbegin', card);
    })
}


const obtenermes =(mes) =>{

let meses = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

monthString = meses[mes]
monthS = monthString.substring(0,3)
return monthS;

}


//FUNCION PARA CREAR CARD EN HTML
const cardPost = (post) => {


    const date = new Date();
    const  day = date.getDate()
    const month = date.getMonth()
    const mescorto = obtenermes(month)
    const card = 
    `
    <div class="card_center  >
    <div class="card" >
        <img src="${post.imagen}" alt="Imagen">  <br> 
        <div class="cardBody">
        <div id="" class="profile d-flex mx-2">
            <div  class="imgProfile" >
                <img class="rounded-circle" src="https://www.milenio.com/uploads/media/2018/05/14/christopher-reeve-superman-cinta-sufrio.jpg" width ="50px" height ="50px" alt="">
            </div>
            <div id="" class="datas">
                <p id="" class="name mx-2 my-0" > Isaac perez</p>
                <p id="" class="date text-muted mx-2">${mescorto} ${day}</p>
            </div>
        </div>
        
        <div id="" class="textCard" >
            
            <a class="subTitleCard " href="#" onclick ="muestrainfoPost(${post.id})">
               <h2 class ="header ml-2 mx-2"   > ${post.header}</h2>
            </a> 
            <div class="crayons-story__indention">               
                <div class="hastagCard">
                    <a >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#</span>developerrelations</a>
                    <a >&nbsp;&nbsp;&nbsp;&nbsp;#</span>devrel</a>
                    <a >&nbsp;&nbsp;&nbsp;&nbsp;#</span>developerexperience</a>
                    <a >&nbsp;&nbsp;&nbsp;&nbsp;#</span>dx</a>
                </div>
                <div>
                    <div class="cardComments">
                        <a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg width="24" height="24"><title>Reactions</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                            37<span class="hidden s:inline">&nbsp;reactions</span>
                        </a>
                        <a>
                            <svg width="24" height="24"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                            6<span class="hidden s:inline">&nbsp;comments</span>
                        </a>
                    </div>
                    <div class="btnAllCard  d-flex justify-content-end p-2">
                        <small class="">
                            5 min read &nbsp;&nbsp;&nbsp;
                        </small> 
                        
                        <button  class="btCard ">
                            <span class="bm-initial">Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>                          
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
    <br>
    </div>
    </div>
    <br>`;
    return card;
}
