const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


// function createCORSRequest(method, url) {
  // var xhr = new XMLHttpRequest();
  
  // if ("withCredentials" in xhr) {

    // // Check if the XMLHttpRequest object has a "withCredentials" property.
    // // "withCredentials" only exists on XMLHTTPRequest2 objects.
    // xhr.open(method, url, true);

  // } else if (typeof XDomainRequest != "undefined") {

    // // Otherwise, check if XDomainRequest.
    // // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    // xhr = new XDomainRequest();
    // xhr.open(method, url);

  // } else {

    // // Otherwise, CORS is not supported by the browser.
    // xhr = null;

  // }
  // return xhr;
// }

// var xhr = createCORSRequest('GET', 'http://cricapi.com/api/cricket');
// if (!xhr) {
  // throw new Error('CORS not supported');
// }






var xhr = new XMLHttpRequest();
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
xhr.open('GET', 'http://cricapi.com/api/cricket', true);
xhr.setRequestHeader("apikey", "Tsdy2Yk7L0Tj3JwT2hDjK8CLbpe2");
xhr.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (xhr.status >= 200 && xhr.status < 400) {
    data["data"].forEach(match => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = match.title;
      
	  const anchor = document.createElement('a');
		anchor.setAttribute('href',"matchSummary.html");
		anchor.innerHTML = "Match Summary";
      const p = document.createElement('p');
      match.description = match.description.substring(0, 300);
      p.textContent = `${match.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(anchor);
	  card.appendChild(p);
	  
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

xhr.send();