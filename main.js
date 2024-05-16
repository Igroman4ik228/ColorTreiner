var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

let timer;
let x;

function main() {

  let totalTime = document.getElementById("totalTime");
  let interval = document.getElementById("interval");

  const totalTimelInt = parseInt(totalTime.value);
  const intervalInt = parseInt(interval.value);

  if (!totalTime.value == "" && !interval.value == "" && !(intervalInt < 0) && !(intervalInt < 0)) {

    var colorArr = getColors();
    console.log(colorArr);
    if (colorArr.length == 0) {
      alert("Укажите не менее одного цвета");
      return;
    }

    x = totalTimelInt;
    console.log(totalTimelInt);

    countdown();

    form.setAttribute("class", "visually-hidden");

    var color = getRandomColor(colorArr)
    console.log(color);
    document.body.style.backgroundColor = color;

    let timerId = setInterval(() => {
      color = getRandomColor(colorArr)
      console.log(color);
      document.body.style.backgroundColor = color;
    }, interval.value * 1000)

    setTimeout(() => {
      clearInterval(timerId);
      form.setAttribute("class", "");

      document.body.style.backgroundColor = "#e8e8e8";
    }, totalTime.value * 1000);

  }
}

function countdown() {
  document.getElementById('timer').innerHTML = x;
  x--;
  if (x < 0) {
    clearTimeout(timer);
  }
  else {
    timer = setTimeout(countdown, 1000);
  }
}

function getColors() {
  var checkbox = document.getElementsByClassName("checkbox");
  var arr = new Array();
  for (i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      arr.push(checkbox[i].id);
    }
  }
  return arr;
}

function getRandomColor(color) {
  color.sort(() => Math.random() - 0.5);
  return color[0];
}