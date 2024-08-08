const text_area = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const texto = document.querySelector(".texto")
const btnCopiar = document.querySelector(".btn-copiar")

const btn_encriptar = document.querySelector(".btn-encriptar");
const btn_desencriptar = document.querySelector(".btn-desencriptar");

btn_encriptar.addEventListener("click",(e) => {
    const textoEncriptado = encriptar(text_area.value)
    mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = 'none';
        mensaje.style.fontSize = '20px';
        texto.style.display = 'none';
        btnCopiar.style.display = 'block';
        mensaje.style.display = 'block';
    text_area.value = "";
})

btn_desencriptar.addEventListener("click",(e) => {
    const textoEncriptado = desencriptar(text_area.value)
    mensaje.value = "";
    mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = 'none';
        mensaje.style.fontSize = '20px';
        texto.style.display = 'none';
        btnCopiar.style.display = 'block';
        mensaje.style.display = 'block';
    text_area.value = "";
})

btnCopiar.addEventListener("click",(e) => {
    copiar();
})

function copiar(){
    navigator.clipboard.writeText(mensaje.value);
}


        function desencriptar(stringMensaje) {
            const codigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
            stringMensaje = stringMensaje.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringMensaje.includes(codigo[i][1])){
            stringMensaje = stringMensaje.replaceAll(codigo[i][1],codigo[i][0]);
        }
    }
    return stringMensaje;
        }


function encriptar(stringMensaje) {
    const codigo = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    return stringMensaje.toLowerCase().replace(/[aeiou]/g, match => codigo[match]);
}