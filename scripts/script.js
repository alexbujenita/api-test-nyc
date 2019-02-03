// MOST UP TO DATE IS with-async-wait.js

// TRY IP FETCH   //////////////////////////////////////////

fetch("http://ip-api.com/json/").then(res => { return res.json();}).then(data => {console.log(data) }).catch(err => {console.log(err)})








// TRY IP FETCH   /////////////////////////////////////////



let obj;
fetch("https://data.cityofnewyork.us/resource/w7a6-9xrz.json")
.then(res => {
  return res.json();
})
.then(data => {
  obj = data

  const root = document.getElementById('root');

  const srcBar = document.createElement('div');
  srcBar.setAttribute('class', 'bar');

  const photo = document.createElement('img');
  photo.src = './images/nyc.jpg';

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'search');
  input.setAttribute('value', '');
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('id', 'myinput');
  input.setAttribute('onkeyup', 'searchFunction()');
  input.setAttribute('placeholder', 'Search a hospital...');

  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  container.setAttribute('class', 'container');

  root.appendChild(photo);
  root.appendChild(srcBar);
  srcBar.appendChild(input);
  root.appendChild(container);

  obj.forEach(hospital => {
    const card = document.createElement("div");
    card.setAttribute("id", "information");
    card.setAttribute("class", "card");

    const hospName = document.createElement("h1");
    hospName.setAttribute("class", "name")
    hospName.textContent = hospital.facility_name;

    const borough = document.createElement("p")
    borough.textContent = `This hospital is located in ${hospital.borough}`;

    const phone = document.createElement("p");
    phone.textContent = `For appointments please call ${hospital.phone}`;

    const facType = document.createElement('p');
    facType.textContent = `This facility is a ${hospital.facility_type}`;
    facType.style.display = 'none';

    const button = document.createElement('button');
    button.innerHTML = 'Facility Type'
    button.onclick = (event) => {
      console.log(event);



      if (event.target.nextElementSibling.style.display === 'inline-block') {
        event.target.nextElementSibling.style.display = 'none';
      } else if (event.target.nextElementSibling.style.display === 'none') {
        event.target.nextElementSibling.style.display = 'inline-block';
      }

      //
      // event.target.nextElementSibling.style.display = 'inline-block';
      // event.target.style.display = 'none'

    }

    container.appendChild(card);

    card.appendChild(hospName);
    card.appendChild(borough);
    card.appendChild(phone);
    card.appendChild(button);
    card.appendChild(facType);


  })
}).catch(err => {
  console.log(err);
  window.location.replace("http://google.com");
})
