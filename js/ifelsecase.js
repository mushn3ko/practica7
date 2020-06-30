function mayormenor(){
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2").value;
	var n3 = document.getElementById("n3").value;

	var num1 = parseInt(n1);
	var num2 = parseInt(n2);
	var num3 = parseInt(n3);

	var texto = 'Los números ordenados de mayor a menor son:<br>';  
    
    if(num1>=num2 && num2>=num3){
    	texto += n1 + ', ' + n2 + ', ' + n3;
    }else{
    	if(num1>=num3 && num3>=num2){
    		texto += n1 + ', ' + n3 + ', ' + n2; 
    	}else{
    		if(num2>=num1 && num1>=num3){
        		texto += n2 + ', ' + n1 + ', ' + n3; 
    		}
    		else{
    			if(num2>=num3 && num3>=num1){
        			texto += n2 + ', ' + n3 + ', ' + n1; 
    			}else{
    				if(num3>=num1 && num1>=num2){
        				texto += n3 + ', ' + n1  + ', ' + n2; 
    				}else{
    					texto += n3 + ', ' + n2  + ', ' + n1; 
    				}
				}
    		}
    	}
	}

    document.getElementById("resultados").innerHTML = texto;
}
function impuestos(){
	var n4 = document.getElementById("n4").value;
	var num4 = parseInt(n4);
	var iva = 0;
	var importe = 0;
	var texto = "El importe es BRUTO: $" + num4 + '<br>IVA (';

	if(num4>15000){
		texto += '16';
		iva = num4*0.16;
	}else{
		texto += '10';
		iva = num4*0.10;
	}

	importe = num4 - iva;

	texto += "%): $" + iva + "<br>Importe NETO: $" + importe;

	document.getElementById("resultados").innerHTML = texto;
}
function sueldo(){
	var n5 = document.getElementById("n5").value;
	var num5 = parseInt(n5);
	var sueldo = 40000;
	var aumento = 0;
	var texto = 'El sueldo base es: 40,000€ anuales.<br>Aumento (';

	switch(true){
		case num5>10:
			texto += '10';
			aumento = sueldo * 0.10;
		break;
		case num5<=10 && num5>5:
			texto += '7';
			aumento = sueldo * 0.07;
		break;
		case num5<=5 && num5>3:
			texto += '5';
			aumento = sueldo * 0.05;
		break;
		case num5<=3 && num5>0:
			texto += '3';
			aumento = sueldo * 0.03;
		break;
		default:
			alert("Ingresa un número.");
		break;
	}

	var aumento1 = parseInt(aumento);

	sueldo = sueldo + aumento1;

	texto += '%): ' + aumento1 + '€. <br> Sueldo final: ' + sueldo + '€ anuales.';

	document.getElementById("resultados").innerHTML = texto;
}