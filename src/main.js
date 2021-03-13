const host = `https://https://migham.github.io`;
const linkCabecera = `${host}/mh/cabecera.html`;
const linkNoticias = `${host}/mh/noticias.html`;
const linkInicio = `${host}/mh/inicio.html`;
const linkFooter = `${host}/mh/footer.html`;
const linksHTML = `${host}/codehams/html`;

let titulos;

let cabecera;
let noticias;
let main;
let guias;
let pie;

let bloqueCodigo = [];
let numLineaCodigo = [];

/* -------------------------------------------------------------------------- */
/*          NOTE Toma los elementos H2 del documento y los convierte          */
/*                    en una guia a la derecha de la pagina                   */
/* -------------------------------------------------------------------------- */

const CrearGuias = async() => {
	guias.innerHTML = "";
	setTimeout(() => {
		titulos = document.querySelectorAll('h2.titulos');
		titulos.forEach((items) => {
			guias.innerHTML += `<li><a href="#${items.id}">${items.textContent}</a></li>`;
		});
	}, 1000);
	NumeroLineas();
};

const NumeroLineas = () => {
	setTimeout(() => {

		//  Obtengo los bloques de codigo de la pagina 
		bloqueCodigo = document.querySelectorAll('.codeEjemplo');
		// Recorro el Array devuelto para buscar los divs con la clase numLinea
		bloqueCodigo.forEach(bloque => {
			numLineaCodigo = bloque.querySelectorAll('.numLinea');
			let i = 0;
			numLineaCodigo.forEach((linea) => {
				i++;
				linea.innerHTML = i;
			});
		});
	}, 500);
	
};

function Main() {
	cabecera = document.getElementById('cabecera');
	noticias = document.getElementById('noticias');
	guias    = document.getElementById('itemsGuia');
	main     = document.getElementById('main');
	pie      = document.getElementById('pie');

	CargarElemento(cabecera, linkCabecera);
	CargarElemento(noticias, linkNoticias);

	
	CargarContenidoPrincipal();
	CargarElemento(pie, linkFooter);

}

const CargarContenidoPrincipal = () => {
	if(main.classList.contains('inicio')) 	CargarElemento(main, linkInicio);
	else if(main.classList.contains('html')) CargarElemento(main, `${host}/codehams/start.html`);
	else if(main.classList.contains('doc')) CargarElemento(main, `${linksHTML}/doctype-content.html`);
	else if(main.classList.contains('htmldoc')) CargarElemento(main, `${linksHTML}/html-content.html`);
	else if(main.classList.contains('head')) CargarElemento(main, `${linksHTML}/head-content.html`);

	CrearGuias();
};

const CargarElemento = async (elemento, ruta) => {
	const respuesta = new XMLHttpRequest();

	respuesta.open('GET', ruta, true);
	respuesta.onload = () => {
		if(respuesta.status == 200){
			let resp = respuesta.responseText;
			elemento.innerHTML = resp;
		}
	};
	respuesta.send();
};


window.onpopstate = (e) => {
	if(e.state){
		main.innerHTML = e.state.html;
		document.title = e.state.title;
	}
};

window.addEventListener('DOMContentLoaded', Main, false);
