const cipher = {
 encode: function (desplaza,texto) {
  if(!desplaza || !texto){ 
    throw new TypeError("Faltan Datos o invalidos")
  }
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
 decode: function (desplaza,texto) {
  if(!desplaza || !texto){ 
    throw new TypeError("Faltan Datos o invalidos")
  }
   let respuestas = "";
    for (let contador = 0; contador < texto.length; contador++){
      let codigoenc = texto.charCodeAt(contador);
      let nuevocod = ((codigoenc - 65 - desplaza + (26 * (desplaza % 26 + 1) )) % 26) + 65;
      let nuevoletra = String.fromCharCode(nuevocod)
      respuestas = respuestas + nuevoletra
    }
    return respuestas
 }
,
}
export default cipher;