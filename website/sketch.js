function setup() {
createCanvas(300, 200);
console.log('running');

var button = select('#submit');
button.mousePressed(submitWord);

var button = select('#analyze');
button.mousePressed(analyzeThis);
}

function analyzeThis() {
  var txt = select('#textinput').value();

  var data = {
    text: txt
  }

  jQuery.post('analyze/', data , dataPosted, 'json');
}



function dataPosted(result) {
  console.log(result);
  document.querySelector('.results').innerHTML = JSON.stringify(result, undefined, 2);
}
function postErr(err) {
  console.log(err);
}

function submitWord() {
  var word = select('#word').value();
  var score = select('#score').value();
  console.log(word, score);
  loadJSON('add/' + word + '/' + score, finished);
  function finished(data) {
    console.log(data);
  }
}
