var bubblepit = [];



var updateAndDisplay = function(bubble) {
  bubble.update();
  bubble.display();
};

setup = function() {
  createCanvas(600, 400);
  iterateWithForLoop(500);
  //bubblepit.push(new Bubble (100,100));

};

draw = function () {
  background(0);
  //iterateFunctionally(ballpit);
  //iterateWithWhileLoop(ballpit);

};

//var iterateFunctionally = function (array) {
  //array.forEach(updateAndDisplay);
//};

var iterateWithWhileLoop = function (array) {
  var index = 0;
  while (index < array.length) {
  updateAndDisplay(array[index]);
    ++index;
  }
};

var iterateWithForLoop = function (numberOfBubbles) {
  for (var i = 0; i < numberOfBubbles; ++i) {
    bubblepit.push (new Bubble (random(10, width-10), random(10, length - 10)));
    //updateAndDisplay(array[i]);
  }
};
