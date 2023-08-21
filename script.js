const select = document.querySelector("select");
const imgUsuario = document.querySelector("#img-usuario");
const imgMaquina = document.querySelector("#img-maquina");

const PIEDRA = 0;
const TIJERA = 1;
const PAPEL = 2;

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

    if (opcUsuario === opcMaquina) {
        document.querySelector("#info h1").innerHTML="EMPATE"

    } else {
        switch (opcUsuario) {
            
            case PIEDRA:
                compararCon(opcMaquina,PAPEL);
                break;
            case PAPEL:
                compararCon(opcMaquina,TIJERA);
                break;
            case TIJERA:
                compararCon(opcMaquina,PIEDRA);
                break;

            default:
                alert ("Seleccione una jugada");


        }


    }
}

function compararCon(opcMaquina,jugadaIdeal) {
    if (opcMaquina === jugadaIdeal) {
        document.querySelector("#info h1").innerHTML="PERDISTE"
    } else {
        document.querySelector("#info h1").innerHTML="GANASTE"
    }
}