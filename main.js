const $lucesDelCirculo=document.querySelectorAll('.luces-circulo');
	let contadorDeLuz=0;

	const mostrarluz=()=>{
		$lucesDelCirculo[contadorDeLuz].className='luces-circulo';
		contadorDeLuz++;

		if(contadorDeLuz > 2)contadorDeLuz=0;

		const luzActual=$lucesDelCirculo[contadorDeLuz];
		luzActual.classList.add(luzActual.getAttribute('color'))
	}
	setInterval(mostrarluz,2000);
