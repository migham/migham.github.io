let Cabecera, HeaderURL = `/hm/cabecera.html`;

function Main() {
	Cabecera = document.getElementById('cabecera');
	CargarElemento(Cabecera, HeaderURL);
}

window.addEventListener('DOMContentLoad', Main, false);

/**
 * Funcion que permite agregar elementos al documento
 * en base al elemento seleccionado y la url de dicho contenido
 * 
 * @param {Element} elemento Recibe un elemento del documento
 * @param {String} url Recibe la url del elemento a cargar
 */
async function CargarElemento(elemento, url = '') {
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