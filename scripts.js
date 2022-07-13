const button = document.getElementById("weather");

button.addEventListener("click", function() {
  console.log("click");
  getData("36.746841", "-119.772591");
})

async function getData(lat, lon) {
  console.log("request made")
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=Imperial`;
  let request = await fetch(url);
  let data = await request.json().then(function(response) {displayData(response)});

}

function displayData(data) {
  let container = document.getElementById("temp");
  while(container.firstChild) {
    container.firstChild.remove();
  };
  let name = document.createElement("h1");
  name.innerHTML = data.name;

  let temp = document.createElement("p");
  temp.innerHTML = data.main.temp;

  container.appendChild(name);
  container.appendChild(temp);
}