function fnValidar02()
{
    let xTexto = document.getElementById("txtTexto").value;
    if (xTexto == "" || /^\s+$/.test(xTexto)) {
        alert("Escriba Texto");
        return false;
    }

    let elementoTurno = document.getElementsByName("rdTurno");
	let valorElegidoPreTurno = "";
	let eligioturno = false;
	for(let i=0; i < elementoTurno.length; i++) {
		if(elementoTurno[i].checked) {
			valorElegidoPreTurno =  elementoTurno[i].value;
			eligioturno = true;
		}
	}

    if(!eligioturno){
		alert("Elija su Turno...");
		return false;
    }

    var elementoPref = document.getElementsByName("chkPrefer");
	var contador=0;
	for(var i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked) {
			contador++;
		}
	}

	if(contador != 3){
		alert("debe elegir 3 opciones...NO(" + contador + ")");
		return false;
	}
	return true;
}