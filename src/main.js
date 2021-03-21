let host = 'https://migham.github.io';
let Cabecera, HeaderURL   = `${host}/hm/cabecera.html`;
let Noticias, NoticiasURL = `${host}/hm/noticias.html`;
let Guias,    GuiasURL    = `${host}/hm/guias.html`;
let MainPrincipal;

let Footer, FooterURL = `${host}/hm/footer.html`

let bloqueCodigo = [];
let numLineaCodigo = [];

//#region [rgba(120, 52, 12, 0.3)] NOTE Numero de lineas
const NumerarLineas = () => {
	setTimeout(() => {
		/**NOTE Bloques de codigo
		 * Obtengo todos los bloques de codigo y los recorro con foreach()
		 * para determinar la cantidad de lineas de codigo en cada bloque
		 * y poder asignarles un numero
		*/
		bloqueCodigo = document.querySelectorAll('.codeEjemplo');
		bloqueCodigo.forEach((bloque) => {
			let index = 0;
			numLineaCodigo = bloque.querySelectorAll('.numLinea');
			numLineaCodigo.forEach(num => {
				index++;
				num.innerHTML = index;
			});
		});
	}, 500);
};

//#endregion

//#region [rgba(12, 145, 21, 0.3)] NOTE Creacion del elemento GUIA
const CargaGuia = async () => {
	Guias.innerHTML = "";
	setTimeout(() => {
		let titulos = document.querySelectorAll('.titulos');
		titulos.forEach((items) => {
			Guias.innerHTML = `<li><a href="#${items.id}">${items.textContent}</a></li>`;
		});
	});
};
//#endregion

//#region [rgba(10, 57, 250, 0.2)] NOTE Funcion Main
function Main() {
	Cabecera = document.getElementById('cabecera');
	Noticias = document.getElementById('noticias');
	Guias = document.getElementById('guias');
	MainPrincipal = document.getElementById('main');
	Footer = document.getElementById('pie');

	if(MainPrincipal.classList.contains('inicio')) 			CargarElemento(Noticias, NoticiasURL)
	else if(MainPrincipal.classList.contains(`guia-html`))	CargarElemento(Noticias, `${host}/hm/items-html.html`);	

	CargarElemento(Cabecera, HeaderURL);
	
	CargarElemento(Footer, FooterURL);
	NumerarLineas();
}
//#endregion

window.addEventListener('load', Main, false);

//#region [rgba(120, 90, 12, 0.2)] NOTE Obtener contenido de las secciones
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
//#endregion