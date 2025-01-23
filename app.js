// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

/*
//función para ingresar nombres
function agregarAmigo(){
    let nombre=(document.getElementById('amigo').value);
    //valida la entrada
    if(nombre === ""){
        alert("Por favor, inserte un nombre")
    } else{
        let nombreLista=document.createElement('li');
        //se actualiza amigos[]
        amigos.push(nombre);
        //se añade el amigo al html
        nombreLista.textContent=nombre;
        document.getElementById('listaAmigos').appendChild(nombreLista);
        
        //se limpio la cadena de entrada
        document.getElementById('amigo').value="";
    }
}
    */

    //separando la función como lo pide el proyecto
function actualizaLista(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML="";
    for(i=0;i<amigos.length;i++){
        lista.innerHTML+="<li>"+amigos[i]+"</li>\n";
    }
        
}


function agregarAmigo(){
    let nombre=document.getElementById('amigo').value;
    //validar la entrada
    if(nombre===""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(nombre);
        document.getElementById('amigo').value="";
        actualizaLista();        
    }
}

function sortearAmigo(){
    let numeroDeAmigos=amigos.length;
    if(numeroDeAmigos==0){
        alert("No hay amigos disponibles, ingresa por lo menos un amigo");
    }else{
        let numeroGanador, amigoGanador, resultado;
        numeroGanador=parseInt(Math.floor(Math.random()*numeroDeAmigos));
        amigoGanador=amigos[numeroGanador];
        resultado=document.getElementById('resultado');
        resultado.innerHTML="El ganador es: "+ amigoGanador;
    }

}






