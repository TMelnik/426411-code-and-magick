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

var buildWizard = function (){

  var wizard = {
    name: function getRandomElement (WIZARD_NAMES) {
            var randomIndex = Math.floor(Math.random()*WIZARD_NAMES.length);
            return NAME = WIZARD_NAMES[randomIndex] + WIZARD_SURNAME[randomIndex];
          },
    surname: function getRandomElement (WIZARD_SURNAME) {
            var randomIndex = Math.floor(Math.random()*WIZARD_SURNAME.length);
            return SURNAM = WIZARD_SURNAME[randomIndex];
          },

    coatColor: function getRandomElement (COAT_COLOR) {
            var randomIndex = Math.floor(Math.random()*COAT_COLOR.length);
            return COAT_COLOR[randomIndex];
          },

    eyesColor: function getRandomElement (EYES_COLOR) {
            var randomIndex = Math.floor(Math.random()*EYES_COLOR.length);
            return EYES_COLOR[randomIndex];
          }
    }
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');



var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name(NAME) + wizard.surname(WIZARD_NAMES);
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor(COAT_COLOR);
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor(EYES_COLOR);

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
