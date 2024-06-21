// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const ButtonElement = document.getElementById('button');

const printClick = event => {
  console.log(event);
};

ButtonElement.addEventListener('click', printClick);

//Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const TitleElement = document.getElementById('title');
const TitleContent = TitleElement.textContent;

const changeText = event => {
  TitleElement.textContent = 'Quita de encima!!!';
};

TitleElement.addEventListener('mouseover', changeText);

const printText = event => {
  TitleElement.textContent = TitleContent;
};
TitleElement.addEventListener('mouseout', printText);

//Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const WindowSize = () => {
  console.log(`${window.visualViewport.width} x ${window.visualViewport.height}`);
};

window.addEventListener('resize', WindowSize);

//Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const TextElement = document.getElementById('text');

const getLabel = event => {
  TextElement.textContent = event.key;
};

window.addEventListener('keydown', getLabel);

//Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.
const words = ['hola', 'adios', 'mano', 'libro', 'botella'];

const H2Element = document.getElementById('subtitle');
const ButtonPreviousElement = document.getElementById('previous');
const ButtonNextElement = document.getElementById('next');
const h2Content = H2Element.textContent;

const ChangeWord = event => {
  h2Content = words[0];
};
ButtonPreviousElement.addEventListener('click', ChangeWord);
