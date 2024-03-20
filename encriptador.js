const Encriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const Desencriptacion = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function encriptarTexto(texto) {
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        textoEncriptado += Encriptacion[letra] || letra;
    }
    return textoEncriptado;
}


function desencriptarTexto(texto) {
    let textoDesencriptado = texto;
    for (let key in Desencriptacion) {
        const regex = new RegExp(key, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, Desencriptacion[key]);
    }
    return textoDesencriptado;
}




function copiarTexto(texto) {
  
    const textareaTemporal = document.createElement('textarea');
    textareaTemporal.value = texto;
    document.body.appendChild(textareaTemporal);
    textareaTemporal.select();
    document.execCommand('copy');
    document.body.removeChild(textareaTemporal);
}


document.querySelector('.btn-encriptar').addEventListener('click', function() {
    const textoOriginal = document.querySelector('.caja-txt-area-encriptar').value;
    const textoEncriptado = encriptarTexto(textoOriginal);
    document.querySelector('.caja-txt-area-copiar').value = textoEncriptado;
});


document.querySelector('.btn-desencriptar').addEventListener('click', function() {
    const textoEncriptado = document.querySelector('.caja-txt-area-copiar').value;
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    document.querySelector('.caja-txt-area-copiar').value = textoDesencriptado;
});


document.querySelector('.btn-copiar').addEventListener('click', function() {
    const textoEncriptado = document.querySelector('.caja-txt-area-copiar').value;
    copiarTexto(textoEncriptado);
});