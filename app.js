// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


//función para ingresar nombres
function agregarAmigo(listaAmigos){
    let nombre=document.getElementById('amigo').value;
    if(nombre === ""){
        alert("Debe ingresar un nombre, vuelva a intentarlo")
    } else{
        let nombreLista=document.createElement('li');
        nombreLista.textContent=nombre;
        document.getElementById('listaAmigos').appendChild(nombreLista);
        document.getElementById('amigo').value="";
    }
}


