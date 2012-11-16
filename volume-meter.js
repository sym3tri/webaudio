// get the context from the canvas to draw on
var ctx = document.querySelector('#canvas').getContext('2d'),
    width = 20,
    barWidth = 8,
    barHeight = 100,
    barSpacer = width - (barWidth * 2);

// create a gradient for the fill. Note the strange
// offset, since the gradient is calculated based on
// the canvas, not the specific element we draw
var gradient = ctx.createLinearGradient(0, 0, 0, barHeight);
// green
gradient.addColorStop(1, '#07dd00');
gradient.addColorStop(0.4, '#07dd00');
// yellow
gradient.addColorStop(0.25, '#ffff00');
gradient.addColorStop(0.15, '#ffff00');
// red
gradient.addColorStop(0.05, '#e00000');
gradient.addColorStop(0, '#e00000');

function updateMeter(left, right) {
  // clear the current state
  ctx.clearRect(0, 0, width, barHeight);
  // set the fill style
  ctx.fillStyle = gradient;
  // create the meters
  ctx.fillRect(0, barHeight - left, barWidth, barHeight);
  ctx.fillRect(barWidth + barSpacer, barHeight - right, barWidth, barHeight);
}
//updateMeter(100, 100);

setInterval(function () {
  var r = Math.random()*100;
  updateMeter(r, r*.9);
}, 100);
