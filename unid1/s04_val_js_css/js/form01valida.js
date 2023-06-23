const fnValidar01 = () => {
    let xTexto = document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)){
        alert("falta TEXTO...");
        return false;
    }

    let xNumero = document.getElementById("txtNumero").value;
    if(xNumero=="") {
        alert("falta NÚMERO...");
        return false;
    }
    
    /// caso contrario ///
    return true;
}