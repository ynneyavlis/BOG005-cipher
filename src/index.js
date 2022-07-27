import cipher from './cipher.js';
function inicio(){
    document.getElementById("boton1").addEventListener("click",function(){
        let texto = document.getElementById("texto").value;
        let desplaza = parseInt(document.getElementById("desplaza").value)
        document.getElementById("resultado").innerHTML = cipher.encode(texto,desplaza);
    } )
    ;

    document.getElementById("boton2").addEventListener("click",function(){
        let texto = document.getElementById("texto").value;
        let desplaza = Math.abs(parseInt(document.getElementById("desplaza").value)) * -1
        document.getElementById("resultado").innerText = cipher.decode(texto,desplaza);
        } )
        ;
    }

inicio();