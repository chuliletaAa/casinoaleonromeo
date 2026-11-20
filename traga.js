let botTraga = document.getElementById("tragamonedas");
let botDados = document.getElementById("dados");
let botInicio = document.getElementById("inicio");
let botGirar = document.getElementById("girar");
let rodillo1 = document.getElementById("rodillo1");
let rodillo2 = document.getElementById("rodillo2");
let rodillo3 = document.getElementById("rodillo3");

function girar(){
    rodillo1.classList.add("animar");
    rodillo2.classList.add("animar");
    rodillo3.classList.add("animar");
}

function irInicio(){
window.location.href="index.html"; // al ejecutar la funcion, te dirige a la pagina principal
}

function irTraga(){
window.location.href="tragamonedas.html"; // al ejecutar la funcion, te dirige a la subpagina del tragamonedas
}

function irDados(){
window.location.href="dados.html"; // al ejecutar la funcion, te dirige a la subpagina de los dados
}

if(botTraga){ //comprueba q exista el boton antes de ejecutar el addeventlistener, si no me tira error :(
botTraga.addEventListener("click",irTraga);
}

if(botDados){ //comprueba q exista el boton antes de ejecutar el addeventlistener
botDados.addEventListener("click",irDados);
}

if(botInicio){ //comprueba q exista el boton antes de ejecutar el addeventlistener
botInicio.addEventListener("click",irInicio)
}

if(botGirar){
botGirar.addEventListener("click",girar);
}