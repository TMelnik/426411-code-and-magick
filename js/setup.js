// Файл setup.js
'use strict';

var WIZARD_NAMES = [
  'Иван ',
  'Хуан Себастьян ',
  'Мария ',
  'Кристоф ',
  'Виктор ',
  'Юлия ',
  'Люпита ',
  'Вашингтон '
];
var WIZARD_SURNAME = [
  'да Марья',
  'Верон',
  'Хуан Себастьян',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var setup = document.querySelector('.setup');
// var setupSimilar = setup.querySelector('.setup-similar');
// setupSimilar.classList.remove('hidden');

function getRendomElement(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

var wizards = [];

for (var i = 0; i < 4; i++) {
  var wizardFiller = {};

  wizardFiller.name = getRendomElement(WIZARD_NAMES);
  wizardFiller.surname = getRendomElement(WIZARD_SURNAME);
  wizardFiller.coatColor = getRendomElement(COAT_COLOR);
  wizardFiller.eyesColor = getRendomElement(EYES_COLOR);

  wizards[i] = wizardFiller;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + wizards.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');


// Открытие/закрытие окна настройки персонажа

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== userName) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}


// Изменение характеристик персонажа по нажатию
var playerPerson = document.querySelector('.setup-player');
var playerCoat = playerPerson.querySelector('.wizard-coat');
var playerEyes = playerPerson.querySelector('.wizard-eyes');
var playerFireball = playerPerson.querySelector('.setup-fireball-wrap');

var coatInput = document.querySelector('.coat-color');
var eyesInput = document.querySelector('.eyes-color');
var fireballInput = document.querySelector('.fireball-color');

playerCoat.addEventListener('click', function () {
  var coatColor = getRendomElement(COAT_COLOR);
  playerCoat.style.fill = coatColor;
  coatInput.value = coatColor;
});

playerEyes.addEventListener('click', function () {
  var eyesColor = getRendomElement(EYES_COLOR);
  playerEyes.style.fill = eyesColor;
  eyesInput.value = eyesColor;
});

playerFireball.addEventListener('click', function () {
  var fireballColor = getRendomElement(FIREBALL_COLOR);
  playerFireball.style.backgroundColor = fireballColor;
  fireballInput.value = fireballColor;
});
