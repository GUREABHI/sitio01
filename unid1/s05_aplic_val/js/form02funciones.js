function fnValidar02()
{
    let xNombre = document.getElementById("txtNombres").value;
    if (xNombre == "" || /^\s+$/.test(xNombre)) {
        alert("Escriba Nombres");
        return false;
    }

    let xApellido = document.getElementById("txtApellidos").value;
    if (xApellido == "" || /^\s+$/.test(xApellido)) {
        alert("Escriba Apellidos");
        return false;
    }

    let xDireccion = document.getElementById("txtDireccion").value;
    if (xDireccion == "" || /^\s+$/.test(xDireccion)) {
        alert("Escriba Direccion");
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value;
    if (xEdad == "" || /^\s+$/.test(xEdad)) {
        alert("Escriba Edad");
        return false;
    }

    let xfecNac = document.getElementById("fecNac").value;
    if (xfecNac == "" || /^\s+$/.test(xEdad)) {
        alert("Seleccione fecha de Nacimiento");
        return false;
    }

    let elementoGenero = document.getElementsByName("rdGenero");
	let valorElegidoPreGenero = "";
	let eligioGenero = false;
	for(let i=0; i < elementoGenero.length; i++) {
		if(elementoGenero[i].checked) {
			valorElegidoPreGenero =  elementoGenero[i].value;
			eligioGenero = true;
		}
	}

    if(!eligioGenero){
		alert("Elija su Genero...");
		return false;
    }

    let xEstado = document.getElementById("lstEstado").value;
    if(xEstado == "")
    {
        alert("Seleccione Estado Civil");
       return false;
    }

    return true;
}