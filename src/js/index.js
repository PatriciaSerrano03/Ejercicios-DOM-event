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
const ButtonNextElement = document.getElementById('next');
const ButtonPreviousElement = document.getElementById('previous');
let counter = 0;
let counterback = 4;

const ChangeNextWord = () => {
  H2Element.textContent = words[counter];
  counter++;
  if (counter > words.length - 1) {
    counter = 0;
  }
  console.log(counter);
};

ButtonNextElement.addEventListener('click', ChangeNextWord);

const ChangePreviousWord = () => {
  console.log(counterback, 'hola');
  H2Element.textContent = words[counterback - 1];
  counterback = counterback - 1;
  if (counterback < 1) {
    counterback = 5;
  }
};
ButtonPreviousElement.addEventListener('click', ChangePreviousWord);

//Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

const H2Element2 = document.getElementById('subtitle2');
const ButtonNextElement2 = document.getElementById('next2');
const ButtonPreviousElement2 = document.getElementById('previous2');
let counter2 = 0;
let counterback2 = 4;

const ChangeNextWord2 = () => {
  H2Element2.textContent = words[counter2];
  counter2++;
  if (counter2 > words.length - 1) {
    counter2 = 4;
  }
  console.log(counter2);
};

ButtonNextElement2.addEventListener('click', ChangeNextWord2);

const ChangePreviousWord2 = () => {
  console.log(counterback2, 'hola');
  H2Element2.textContent = words[counterback2];
  counterback2 = counterback2 - 1;
  if (counterback2 < 1) {
    counterback2 = 0;
  }
};
ButtonPreviousElement2.addEventListener('click', ChangePreviousWord2);

//Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

const RangeElement = document.getElementById('range');
const NumberElement = document.getElementById('number');

const GetValue = event => {
  NumberElement.textContent = event.target.value;
};
RangeElement.addEventListener(`change`, GetValue);

//Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.

const FirstCheckboxElement = document.getElementById('toggle');
const FirstLabelElement = document.getElementById('label');

const SecondCheckboxElement = document.getElementById('toggle2');
const SecondLabelElement = document.getElementById('label2');

const ThirdCheckboxElement = document.getElementById('toggle3');
const ThirdLabelElement = document.getElementById('label3');

const FourthCheckboxElement = document.getElementById('toggle4');
const FourthLabelElement = document.getElementById('label4');

const ButtonLabelElement = document.getElementById('button_label');
const LabelElement = document.getElementById('last_label');
let counterCheckbox1,
  counterCheckbox2,
  counterCheckbox3,
  counterCheckbox4 = 0;

let label1,
  label2,
  label3,
  label4 = '';

const printLabel = () => {
  if (FirstCheckboxElement.checked) {
    counterCheckbox1 = 1;
    label1 = FirstLabelElement.textContent;
  } else {
    counterCheckbox1 = 0;
    label1 = '';
  }

  if (SecondCheckboxElement.checked) {
    counterCheckbox2 = 1;
    label2 = SecondLabelElement.textContent;
  } else {
    counterCheckbox2 = 0;
    label2 = '';
  }

  if (ThirdCheckboxElement.checked) {
    counterCheckbox3 = 1;
    label3 = ThirdLabelElement.textContent;
  } else {
    counterCheckbox3 = 0;
    label3 = '';
  }

  if (FourthCheckboxElement.checked) {
    counterCheckbox4 = 1;
    label4 = FourthLabelElement.textContent;
  } else {
    counterCheckbox4 = 0;
    label4 = '';
  }

  const TotalValue = counterCheckbox1 + counterCheckbox2;
  LabelElement.textContent = `${label1} ${label2} ${label3} ${label4}`;
  //console.log(TotalValue);
};

ButtonLabelElement.addEventListener('click', printLabel);
