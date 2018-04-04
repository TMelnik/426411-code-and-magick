'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CONGRATULATION_X = 240;
var CONGRATULATION_Y = 30;
var FONT_GAP = 50;
var COLUMN_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_HEIGHT = 16;
var barWidth  = FONT_GAP + COLUMN_WIDTH;

var names = ['Вы','Иван','Юлия','Катя'];

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
var maxElement = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > maxElement) {
    maxElement = arr[i];
    }
  return maxElement;
  }
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000000';

  var maxTime = getMaxElement(times);

  ctx.fillText('Ура вы победили!', CONGRATULATION_X , CONGRATULATION_Y);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CONGRATULATION_Y +GAP*2);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + barWidth * i, CLOUD_HEIGHT +  -  GAP*3 -(BAR_HEIGHT* times[i])/maxTime);
     if(names[i]=== 'Вы') {
       ctx.fillStyle = 'rgba(255,0,0,1)';
       ctx.fillRect(CLOUD_X + GAP + barWidth * i, CLOUD_HEIGHT - GAP*2 -(BAR_HEIGHT* times[i])/maxTime, COLUMN_WIDTH, (BAR_HEIGHT* times[i])/maxTime);

       }else {
         ctx.fillStyle = '#0000FF';
         ctx.fillRect(CLOUD_X + GAP + barWidth * i, CLOUD_HEIGHT - GAP*2 -(BAR_HEIGHT* times[i])/maxTime, COLUMN_WIDTH, (BAR_HEIGHT* times[i])/maxTime);

      }

      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], CLOUD_X + GAP + (FONT_GAP + COLUMN_WIDTH)* i, CLOUD_HEIGHT);
  }
};
