function suma100(){
	var num = 1;
	var suma = 0;
	var texto = '<strong>La suma es:<strong><br>';

	while(num<=98){
		suma += num;
		texto += num + ' + ';
		num += 2;
	}

	suma += 99;
	texto += '99 = <strong>' + suma + '<strong>';

	document.getElementById("resultados").innerHTML = texto;
}
function asteriscos(){
	var num = document.getElementById("n1").value;
	var nInt = parseInt(num);
	var n = 1;
	var texto = '';

	while(n<=nInt){
		texto += '*  ';
		n++;
	}

	document.getElementById("resultados").innerHTML = texto;
}
function tablas(){
	var i, j;
	texto = '';

	for(i=1; i<=10; i++){
		for(j=1; j<=10; j++){
			texto += i + ' x ' + j + ' = ' + (i*j) + '<br>';
		}
		texto += '<br><br>';
	}

	document.getElementById("resultados").innerHTML = texto;
}