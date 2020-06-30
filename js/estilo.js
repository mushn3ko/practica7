function mostrar(){
	var x = document.getElementById('entrar');

	if (x.style.visibility === 'hidden') {
		x.style.visibility = 'visible';
	} else {
		x.style.visibility = 'hidden';
	}
}