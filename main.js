var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function main() {
  var totalTime = document.getElementById("totalTime");
  var interval = document.getElementById("interval");


  if (!totalTime.value == "" && !interval.value == "" && !(parseInt(totalTime.value) < 0) && !(parseInt(interval.value) < 0)) {
    var colorArr = getColor();
    console.log(colorArr);
    if (colorArr.length == 0) {
      alert("Укажите не менее одного цвета");
      return;
    }
    form.setAttribute("class", "visually-hidden");

    var color = getRandomColor(colorArr)
    console.log(color);

    document.body.style.backgroundColor = color;

    let timerId = setInterval(() => {
      color = getRandomColor(colorArr)
      document.body.style.backgroundColor = color;
    }, interval.value * 1000)

    setTimeout(() => {
      clearInterval(timerId);
      form.setAttribute("class", "");

      document.body.style.backgroundColor = "#e8e8e8";
    }, totalTime.value * 1000);

  }
}

function getColor() {
  var checkbox = document.getElementsByClassName("checkbox");
  console.log(checkbox);
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