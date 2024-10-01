let body = document.body;
let contenedor = document.createElement("div");
contenedor.setAttribute("id", "contenedor");
let titulo = document.createElement("h2");
titulo.innerText = "Contador del tiempo:";
contenedor.appendChild(titulo);
let fechaActualDiv = document.createElement("div");
fechaActualDiv.innerHTML = "<div>Fecha actual:</div><div id='fechaAhora'></div>";
contenedor.appendChild(fechaActualDiv);
let fechaIntroducidaDiv = document.createElement("div");
fechaIntroducidaDiv.innerHTML = "<div>Fecha introducida: </div><div id='fechaIntroducida'>¯\\_( ͡╥ ͜ʖ ͡╥)_/¯</div>";
contenedor.appendChild(fechaIntroducidaDiv);
let contenedorTiempo = document.createElement("div");
contenedorTiempo.setAttribute("id", "contenedorTiempo");
let mesesDiv = document.createElement("div");
mesesDiv.setAttribute("id", "meses");
mesesDiv.innerHTML = "<div>Meses</div><br /><div>-----------------------------</div><div id='contadorMeses'></div>";
contenedorTiempo.appendChild(mesesDiv);
let diasDiv = document.createElement("div");
diasDiv.setAttribute("id", "dias");
diasDiv.innerHTML = "<div>Días</div><br /><div>-----------------------------</div><div id='contadorDias'></div>";
contenedorTiempo.appendChild(diasDiv);
let horasDiv = document.createElement("div");
horasDiv.setAttribute("id", "horas");
horasDiv.innerHTML = "<div>Horas</div><br /><div>-----------------------------</div><div id='contadorHoras'></div>";
contenedorTiempo.appendChild(horasDiv);
let minutosDiv = document.createElement("div");
minutosDiv.setAttribute("id", "minutos");
minutosDiv.innerHTML = "<div>Minutos</div><br /><div>-----------------------------</div><div id='contadorMinutos'></div>";
contenedorTiempo.appendChild(minutosDiv);
let segundosDiv = document.createElement("div");
segundosDiv.setAttribute("id", "segundos");
segundosDiv.innerHTML = "<div>Segundos</div><br /><div>-----------------------------</div><div id='contadorSegundos'></div>";
contenedorTiempo.appendChild(segundosDiv);
contenedor.appendChild(contenedorTiempo);
let contenedorAbajo = document.createElement("div");
contenedorAbajo.setAttribute("id", "contenedorAbajo");
let campoDiv = document.createElement("div");
campoDiv.setAttribute("id", "campo");
let inputFecha = document.createElement("input");
inputFecha.setAttribute("type", "text");
inputFecha.setAttribute("id", "fecha");
campoDiv.appendChild(inputFecha);
contenedorAbajo.appendChild(campoDiv);
let boton = document.createElement("button");
boton.setAttribute("id", "boton");
boton.innerText = "Cambiar Fecha";
contenedorAbajo.appendChild(boton);
contenedor.appendChild(contenedorAbajo);
body.appendChild(contenedor);

let horas = document.getElementById("contadorHoras");
let minutos = document.getElementById("contadorMinutos");
let segundos = document.getElementById("contadorSegundos");
let dias = document.getElementById("contadorDias");
let meses = document.getElementById("contadorMeses");
let fechaAhora = document.getElementById("fechaAhora");
let fechaIntroducida = document.getElementById("fechaIntroducida");
let botonCambiaFecha = document.getElementById("boton");
let fechaActual = new Date();
let fechaInput;
let mesajefinal = document.createElement("h1");
mesajefinal.setAttribute("id", "mesajefinal");
let contedor = document.getElementById("contenedor");
contedor.appendChild(mesajefinal);
let tiempoAcabado = false;
let intervalo;

function cogerFechaHoy() {
    let fecha = new Date();
    let anio = fecha.getFullYear();
    let mes = fecha.getMonth();
    let dia = fecha.getDate();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();

    fechaHoy = new Date(anio, mes, dia, hora, minuto, segundo);
    let fechaActualTexto = fechaHoy.toLocaleString();
    fechaAhora.innerHTML = fechaActualTexto;

    return fechaHoy;
}

function cogerInputFecha() {
    mesajefinal.innerHTML = ""; 
    let valorInput = document.getElementById("fecha").value;
    console.log(valorInput);
    inputFecha = new Date(valorInput);

    if (isNaN(inputFecha.getTime())) {
        alert("Por favor, introduce una fecha válida.");
        return;
    }

    fechaIntroducida.innerHTML = inputFecha.toLocaleString();
    tiempoAcabado = false;

    if (intervalo) {
        clearInterval(intervalo);
    }
    intervalo = setInterval(modificarFecha, 1000);
}

function modificarFecha() {
    cogerFechaHoy();
    let  fechaCuentaAtras1=new Date();

    fechaCuentaAtras1 = inputFecha - fechaHoy;
   
    const unMes = 30 * 24 * 60 * 60 * 1000;
    const dosSemanas = 14 * 24 * 60 * 60 * 1000;
    const unaSemana = 7 * 24 * 60 * 60 * 1000;

    if (fechaCuentaAtras1 > unMes) {
        horas.style.color = "green";
        minutos.style.color = "green";
        dias.style.color = "green";
        meses.style.color = "green";
        segundos.style.color = "green";
    } else if (fechaCuentaAtras1 <= unMes && fechaCuentaAtras1 > dosSemanas) {
        horas.style.color = "orange";
        minutos.style.color = "orange";
        dias.style.color = "orange";
        meses.style.color = "orange";
        segundos.style.color = "orange";
    } else if (fechaCuentaAtras1 <= dosSemanas && fechaCuentaAtras1 > unaSemana) {
        horas.style.color = "orange";
        minutos.style.color = "orange";
        dias.style.color = "orange";
        meses.style.color = "orange";
        segundos.style.color = "orange";
    } else if (fechaCuentaAtras1 <= unaSemana) {
        horas.style.color = "red";
        minutos.style.color = "red";
        dias.style.color = "red";
        meses.style.color = "red";
        segundos.style.color = "red";
    }

    if (fechaCuentaAtras1 <= 0) {
        clearInterval(intervalo);
        horas.innerHTML = 0;
        minutos.innerHTML = 0;
        segundos.innerHTML = 0;
        dias.innerHTML = 0;
        meses.innerHTML = 0;
        mesajefinal.innerHTML = "El contador ha acabado";
        tiempoAcabado = true;
        return;
    }


    let fechaCuentaAtras = new Date(fechaCuentaAtras1);


 horas.innerHTML = fechaCuentaAtras.getHours()-1;
    minutos.innerHTML = fechaCuentaAtras.getMinutes();
    segundos.innerHTML =fechaCuentaAtras.getSeconds();
    dias.innerHTML = fechaCuentaAtras.getDate()-1;
    meses.innerHTML = fechaCuentaAtras.getMonth(); 
}
/* prodriguezp09 */
botonCambiaFecha.addEventListener("click", cogerInputFecha);
window.setInterval(cogerFechaHoy, 1000);
//2024-10-30 9:28:00