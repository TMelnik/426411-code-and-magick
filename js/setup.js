// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита' , 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Хуан Себастьян', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)','rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES[0] + WIZARD_SURNAME[0],
    coatColor: coatColor[0],
    eyesColor: eyesColor[0]
  },
  {
    name: WIZARD_NAMES[1] + WIZARD_SURNAME[0],
    coatColor: coatColor[1],
    eyesColor: eyesColor[1]
  },
  {
    name: WIZARD_NAMES[2] + WIZARD_SURNAME[0],
    coatColor: coatColor[2],
    eyesColor: eyesColor[2]
  },
  {
    name: WIZARD_NAMES[3] + WIZARD_SURNAME[0],
    coatColor: coatColor[3],
    eyesColor: eyesColor[3]
  }
]

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
