var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function main() {
  var totalTime = document.getElementById("totalTime");
  var interval = document.getElementById("interval");
  var btn = document.getElementById("btn");

  if (!totalTime.value == "" && !interval.value == "") {
    totalTime.setAttribute("class", "hide");
    interval.setAttribute("class", "hide");
    btn.setAttribute("class", "hide");

    let color = getRandomColor()
    document.body.style.backgroundColor = color;
    let timerId = setInterval(() => {
      color = getRandomColor()
      document.body.style.backgroundColor = color;
    }, interval.value * 1000)

    setTimeout(() => {
      clearInterval(timerId);
      totalTime.setAttribute("class", "");
      interval.setAttribute("class", "");
      btn.setAttribute("class", "");

      document.body.style.backgroundColor = "#e8e8e8";
    }, totalTime.value * 1000);

  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}