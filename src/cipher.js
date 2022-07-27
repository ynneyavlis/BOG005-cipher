const cipher = {
 encode: function (texto,desplaza) {
    let respuestas = "";
    for (let contador = 0; contador < texto.length; contador++){
      let codigoenc = texto.charCodeAt(contador);
      let nuevocod = ((codigoenc - 65 + desplaza) % 26) + 65;
      let nuevoletra = String.fromCharCode(nuevocod)
      respuestas = respuestas + nuevoletra
    }
    return respuestas
   
 }
,
 decode: function (texto,desplaza) {
   let respuestas = "";
    for (let contador = 0; contador < texto.length; contador++){
      let codigoenc = texto.charCodeAt(contador);
      let nuevocod = ((codigoenc - 65 + desplaza) % 26) + 65;
      let nuevoletra = String.fromCharCode(nuevocod)
      respuestas = respuestas + nuevoletra
    }
    return respuestas
 }
,
}
export default cipher;