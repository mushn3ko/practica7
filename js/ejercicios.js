function caja(){
	var num = prompt("Por favor ingresa un número", "");
	var i = 0;
	if (num != null) {

		if(num<8){
			while(i<num){
				var para = document.createElement("ARTICLE");
				para.classList.add("caja1");
				document.getElementById("resultados").appendChild(para);
				i++;
			}
		}else{
			while(i<num){
				var para = document.createElement("ARTICLE");
				para.classList.add("caja2");
				document.getElementById("resultados").appendChild(para);
				i++;
			}
		}
	}
}

function voto(){
	var num = document.getElementById("zona").value;
	numInt = parseInt(num);
	var zonas = '<strong>Su zona: </strong>';
	var votos = '<strong>Su voto fue: </strong>';
	var texto = '';

	switch(numInt){
		case 1:
			zonas += 'Norte.';
		break;
		case 2:
			zonas += 'Sur.';
		break;
		case 3:
			zonas += 'Centro.';
		break;
		default:
			alert('Por favor, seleccione una opción para zona.');
			zonas += 'NO INDICADA.';
	}

	if(document.getElementById("c1").checked == true){
		votos += document.getElementById("c1").value;
	}else{
		if(document.getElementById("c2").checked == true){
			votos += document.getElementById("c2").value;
		}else{
			if(document.getElementById("c3").checked == true){
				votos += document.getElementById("c3").value;
			}else{
				if(document.getElementById("c4").checked == true){
					votos += document.getElementById("c4").value;
				}else{
					alert('Por favor, seleccione una opción para voto.');
					votos += 'NO INDICADO';
				}
			}
		}
	}
	

	texto = texto + zonas + '<br>' + votos;

	document.getElementById("resultados").innerHTML = texto;
}

function suma(){
	var suma = 0;
	var texto = '';

	do{
		var num = prompt("Por favor ingresa un número positivo para sumar o menor a cero para terminar.","");
		numInt = parseInt(num);
		if(num>0){
			suma += numInt;	
			texto += numInt + ' + ';
		}
	}while(numInt>0);

	texto += '0 = ' + suma;

	document.getElementById("resultados").innerHTML = texto;
}
