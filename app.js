// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


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
        console.log(amigos);
        //se añade el amigo al html
        nombreLista.textContent=nombre;
        document.getElementById('listaAmigos').appendChild(nombreLista);
        
        //se limpio la cadena de entrada
        document.getElementById('amigo').value="";
    }
}




