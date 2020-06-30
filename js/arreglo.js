var arreglo1 = ["1", "4", "3", "2"];
var arreglo2 = ["a", "d", "c", "b"];

function reiniciar(){
	arreglo1 = ["1", "4", "3", "2"];
	arreglo2 = ["a", "d", "c", "b"];
}

function mostrarar(){
	

	var texto = "";
	var i;

	texto += "Arreglo 1: - ";
	for(i=0; i<arreglo1.length; i++){
		texto += arreglo1[i] + " - ";
	}

	texto += "<br>Arreglo 2: - ";
	for(i=0; i<arreglo2.length; i++){
		texto += arreglo2[i] + " - ";
	}

	document.getElementById("resultados").innerHTML = texto;
}
function pop(){
	var texto = "";
	var i;
	arreglo1.pop();
	arreglo2.pop();

	texto += "Arreglo 1: - ";
	for(i=0; i<arreglo1.length; i++){
		texto += arreglo1[i] + " - ";
	}

	texto += "<br>Arreglo 2: - ";
	for(i=0; i<arreglo2.length; i++){
		texto += arreglo2[i] + " - ";
	}
	document.getElementById("resultados").innerHTML = texto;
}
function shift(){
	var texto = "";
	var i;
	arreglo1.shift();
	arreglo2.shift();

	texto += "Arreglo 1: - ";
	for(i=0; i<arreglo1.length; i++){
		texto += arreglo1[i] + " - ";
	}

	texto += "<br>Arreglo 2: - ";
	for(i=0; i<arreglo2.length; i++){
		texto += arreglo2[i] + " - ";
	}
	document.getElementById("resultados").innerHTML = texto;
}
function agregarf(){
	var agre1 = document.getElementById("a1").value;
	var agre2 = document.getElementById("a2").value;
	var texto = "";
	var i;
	arreglo1.push(agre1);
	arreglo2.push(agre2);

	texto += "Arreglo 1: - ";
	for(i=0; i<arreglo1.length; i++){
		texto += arreglo1[i] + " - ";
	}

	texto += "<br>Arreglo 2: - ";
	for(i=0; i<arreglo2.length; i++){
		texto += arreglo2[i] + " - ";
	}
	document.getElementById("resultados").innerHTML = texto;
}
function agregari(){
	var agre1 = document.getElementById("a3").value;
	var agre2 = document.getElementById("a4").value;
	var texto = "";
	var i;
	arreglo1.unshift(agre1);
	arreglo2.unshift(agre2);

	texto += "Arreglo 1: - ";
	for(i=0; i<arreglo1.length; i++){
		texto += arreglo1[i] + " - ";
	}

	texto += "<br>Arreglo 2: - ";
	for(i=0; i<arreglo2.length; i++){
		texto += arreglo2[i] + " - ";
	}
	document.getElementById("resultados").innerHTML = texto;
}
function splice(){
	var agre1 = document.getElementById("a5").value;
	var agre2 = document.getElementById("a6").value;
	var texto = "";
	var i;
	arreglo1.splice(2, 0, agre1);
	arreglo2.splice(2, 0, agre2);

	texto += "Arreglo 1: - ";
	for(i=0; i<arreglo1.length; i++){
		texto += arreglo1[i] + " - ";
	}

	texto += "<br>Arreglo 2: - ";
	for(i=0; i<arreglo2.length; i++){
		texto += arreglo2[i] + " - ";
	}
	document.getElementById("resultados").innerHTML = texto;
}
function deletes(){
	var texto = "";
	var i;
	delete arreglo1[1];
	delete arreglo2[1];

	texto += "Arreglo 1: - ";
	for(i=0; i<arreglo1.length; i++){
		texto += arreglo1[i] + " - ";
	}

	texto += "<br>Arreglo 2: - ";
	for(i=0; i<arreglo2.length; i++){
		texto += arreglo2[i] + " - ";
	}
	document.getElementById("resultados").innerHTML = texto;
}
function reverse(){
	var texto = "";
	var i;
	arreglo1.reverse();
	arreglo2.reverse();

	texto += "Arreglo 1: - ";
	for(i=0; i<arreglo1.length; i++){
		texto += arreglo1[i] + " - ";
	}

	texto += "<br>Arreglo 2: - ";
	for(i=0; i<arreglo2.length; i++){
		texto += arreglo2[i] + " - ";
	}
	document.getElementById("resultados").innerHTML = texto;
}
function sort(){
	var texto = "";
	var i;
	arreglo1.sort();
	arreglo2.sort();

	texto += "Arreglo 1: - ";
	for(i=0; i<arreglo1.length; i++){
		texto += arreglo1[i] + " - ";
	}

	texto += "<br>Arreglo 2: - ";
	for(i=0; i<arreglo2.length; i++){
		texto += arreglo2[i] + " - ";
	}
	document.getElementById("resultados").innerHTML = texto;
}
function concat(){
	var texto = "";
	var i;
	var concat1 = arreglo1.concat(arreglo2);
	var concat2 = arreglo2.concat(arreglo1);

	texto += "Arreglo 1 + Arreglo 2: - ";
	for(i=0; i<concat1.length; i++){
		texto += concat1[i] + " - ";
	}

	texto += "<br>Arreglo 2 + Arreglo 1: - ";
	for(i=0; i<concat2.length; i++){
		texto += concat2[i] + " - ";
	}
	document.getElementById("resultados").innerHTML = texto;
}
function concat(){
	var texto1 = arreglo1.join();
	var texto2 = arreglo2.join();
	var texto3 = "";

	texto3 += "Arreglo 1: " + texto1;
	texto3 += "<br>Arreglo 2: " + texto2;
	document.getElementById("resultados").innerHTML = texto3;
}
function contar(){
	var texto1 = arreglo1.length;
	var texto2 = arreglo2.length;
	var texto3 = "";

	texto3 += "Arreglo 1: " + texto1;
	texto3 += " elementos.<br>Arreglo 2: " + texto2 + " elementos.";
	document.getElementById("resultados").innerHTML = texto3;
}