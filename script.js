const select = document.querySelector("select");
const imgUsuario = document.querySelector("#img-usuario");
const imgMaquina = document.querySelector("#img-maquina");
const divResultado = document.querySelector("#info");
const divResultado1 = document.querySelector("#info1");
const divResultado2 = document.querySelector("#info2");

const PIEDRA = 0;
const TIJERA = 1;
const PAPEL = 2;

let cantVecHum = 0;
let cantVecMaq = 0;

const MAX_CANT = 2;

const imgResultados = ["https://www.consultesuvin.com/images/error-x.png",
    "https://th.bing.com/th?id=OIP.7qHb26jeQlaskZYqhLRF7wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"]

const imagenes = ["https://w7.pngwing.com/pngs/422/99/png-transparent-rock-paper-scissors-computer-icons-scissors-game-white-face-thumbnail.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ738c49ORlQXVmMF38cxeey_s53vAx0HPiDlOcB-DOsbrX1s8svs8nRQdEzutwpnYHO4g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVX0MNyRbwQZmLO8-5TgT3V0Fj3eYfSehs8MQ2_jX4Suet5scoJwvx1_dxqpjuz_XqBA&usqp=CAU"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function elegir() {
    let opcUsuario = parseInt(select.value);
    let opcMaquina = getRandomInt(3);
    imgUsuario.src = imagenes[opcUsuario];
    imgMaquina.src = imagenes[opcMaquina];

    if (opcUsuario !== opcMaquina) {
        iniciarComparacion (opcUsuario, opcMaquina)
        if (cantVecHum === MAX_CANT || cantVecMaq === MAX_CANT) {
            if (cantVecHum === MAX_CANT) {
                document.querySelector("#info h1").innerHTML = "GANASTE"
            } else {
                document.querySelector("#info h1").innerHTML = "PERDISTE"
            }
            document.querySelector("button").hidden= false;
            select.hidden= true;
        }
    }else{
        document.querySelector("#info h1").innerHTML= "EMPATE"

    }

}

function reiniciar() {
    cantVecHum= 0;
    cantVecMaq= 0;
    document.querySelector("#info h1").innerHTML= "B03";
    divResultado1.innerHTML="";
    divResultado2.innerHTML="";
}

function iniciarComparacion(opcUsuario, opcMaquina) {
    switch (opcUsuario) {

        case PIEDRA:
            compararCon(opcMaquina, PAPEL);
            break;
        case PAPEL:
            compararCon(opcMaquina, TIJERA);
            break;
        case TIJERA:
            compararCon(opcMaquina, PIEDRA);
            break;

        default:
            alert("Seleccione una jugada");


    }
}

function compararCon(opcMaquina, jugadaIdeal) {
    if (opcMaquina !== jugadaIdeal) {
        /* document.querySelector("#info h1").innerHTML = "GANASTE" */
        cantVecHum++;
        divResultado1.innerHTML += ` <img class= "resultado"src="https://th.bing.com/th?id=OIP.7qHb26jeQlaskZYqhLRF7wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=""></img>`
        divResultado2.innerHTML += ` <img class="resultado" src="https://www.consultesuvin.com/images/error-x.png" alt=""></img>`
        
    } else {
        if ((opcMaquina === jugadaIdeal)) {
            /* document.querySelector("#info h1").innerHTML = "PERDISTE" */
            cantVecMaq++;
            divResultado2.innerHTML += ` <img class="resultado" src="https://th.bing.com/th?id=OIP.7qHb26jeQlaskZYqhLRF7wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=""></img>`
            divResultado1.innerHTML += ` <img class= "resultado"src="https://www.consultesuvin.com/images/error-x.png" alt=""></img>`

        }

    }
}

