const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

// app.appendChild(logo);
app.appendChild(container);




var xhr = new XMLHttpRequest();
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
xhr.open('GET', ' http://cricapi.com/api/cricketScore?unique_id=1157381', true);
xhr.setRequestHeader("apikey", "Tsdy2Yk7L0Tj3JwT2hDjK8CLbpe2");
xhr.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (xhr.status >= 200 && xhr.status < 400) {
	  console.log(data["team-1"]);
		document.getElementById('pHeading').innerText = data["team-1"] +" vs " + data["team-2"];
		document.getElementById('pContent').innerText = data["description"];
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

xhr.send();