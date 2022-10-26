import cipher from './cipher.js';
function inicio(){
    document.getElementById("boton1").addEventListener("click",function(){
        let texto = document.getElementById("texto").value;
        let desplaza = parseInt(document.getElementById("desplaza").value)
        document.getElementById("resultado").innerHTML = cipher.encode(desplaza,texto);
    } )
    ;

    document.getElementById("boton2").addEventListener("click",function(){
        let texto = document.getElementById("texto").value;
        let desplaza = parseInt(document.getElementById("desplaza").value)
        document.getElementById("resultado").innerText = cipher.decode(desplaza,texto);
        } )
        ;
    }

inicio();