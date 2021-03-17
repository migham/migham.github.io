let host = 'https://migham.github.io';
let Cabecera, HeaderURL   = `${host}/hm/cabecera.html`;
let Noticias, NoticiasURL = `${host}/hm/noticias.html`;
let Guias,    GuiasURL    = `${host}/hm/guias.html`;
let MainPrincipal;

function Main() {
	Cabecera = document.getElementById('cabecera');
	Noticias = document.getElementById('noticias');
	Guias = document.getElementById('guias');
	MainPrincipal = document.getElementById('main');

	if(MainPrincipal.classList.contains('guia-html'))
	{
		CargarElemento(Noticias, `${host}/hm/items-html.html`);
	}

	CargarElemento(Cabecera, HeaderURL);
}

window.addEventListener('load', Main, false);



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