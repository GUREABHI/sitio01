const fnValidar10 = () => {
    let xNombre = document.getElementById("txtNombre").value;
    if(xNombre=="" || /^\s+$/.test(xNombre)){
        alert("falta colocar Nombres y Apellidos...");
        return false;
    }

    let XEdad = document.getElementById("txtEdad").value;
    if(XEdad=="") {
        alert("falta la edad...");
        return false;
    }
    
    var elementoPref = document.getElementsByName("chkPrefer2");
	var contador=0;
	for(var i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked) {
			contador++;
		}
	}

	if(contador != 2){
		alert("debe elegir 2 opciones...NO(" + contador + ")");
		return false;
	}
	


    /// caso contrario ///
    return true; 
}
