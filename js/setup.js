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

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

    //var  wizards = [wizard1, wizard2, wizard3, wizard4]

    var wizard = {
        name: function (WIZARD_NAME){
          var randomIndexName = Math.floor(Math.random()*WIZARD_NAMES.length);
          return WIZARD_NAMES[randomIndexName]
        },
        surname: function (WIZARD_SURNAME){
          var randomIndexSurname = Math.floor(Math.random()*WIZARD_SURNAME.length);
        var wizardSurname = WIZARD_SURNAME[randomIndexName];
        },
        coatColor: function (COAT_COLOR){
          var randomIndexCoat = Math.floor(Math.random()*COAT_COLOR.length);
          return COAT_COLOR[randomIndexName];
        },
        eyesColor: function () {
          var randomIndexEyes = Math.floor(Math.random()*EYES_COLOR.length);
          return EYES_COLOR[randomIndexName];
      }
    }

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);


  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name(WIZARD_NAME));
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor);


  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
