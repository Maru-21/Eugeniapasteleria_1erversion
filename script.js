
function validacionCorreo(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test.correo;
    if (esValido==true){
        alert("El correo es valido")
        
    }
    else{
        alert("El correo no es valido. Ingresa nuevamente")
    }
}




    
