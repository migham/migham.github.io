let Cabecera, HeaderURL = `/hm/cabecera.html`;

function Main() {
	Cabecera = document.getElementById('cabecera');
	CargarElemento(Cabecera, HeaderURL);
}

window.addEventListener('DOMContentLoad', Main, false);

async function CargarElemento(elemento = Element, url = '') {
	const XHR = new XMLHttpRequest();
	XHR.open('GET', url, true);
	XHR.onload = () => {
		if(XHR.status === 200){
			let respuesta = XHR.responseText;
			elemento.innerHTML = respuesta;
		}
	};
	XHR.send();
}