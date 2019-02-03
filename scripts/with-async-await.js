//UP_TO_DATE
// TRY IP FETCH   //////////////////////////////////////////

// let ipAddress;
// fetch("http://ip-api.com/json/")
//   .then(res => { return res.json();})
//   .then(data => {ipAddress = data; console.log(ipAddress) })
//   .catch(err => {console.log(err)});

async function myIp() {
  const queryResponse = await fetch("http://ip-api.com/json/");
  const jsonResp = await queryResponse.json();
  console.log(queryResponse);
  console.log(jsonResp);
  return jsonResp.query;
}

// TRY IP FETCH   /////////////////////////////////////////

const request = async () => {
    const response = await fetch("https://data.cityofnewyork.us/resource/w7a6-9xrz.json");
    const obj = await response.json();
    console.log(obj)

    const root = document.getElementById('root');

    const srcBar = document.createElement('div');
    srcBar.setAttribute('class', 'bar');

    const photo = document.createElement('img');
    photo.src = './images/nyc.jpg';

    const netAddress = document.createElement('div'); //
    netAddress.setAttribute('id', 'ip');
    netAddress.setAttribute('class', 'bottom-right');
    netAddress.innerHTML = 'Click to see your IP address';
    netAddress.clicked = false;
    netAddress.clickCount = 0;
    netAddress.onclick = async () => {

      // MORE "IF" TESTING

      if(netAddress.clickCount === 6) {
        alert("That's it mate! Search how to listen to your browser");
        window.location.replace("http://google.com");
      } else if (netAddress.clickCount === 4) {
        alert("SLOW DOWN!!!")
      }

      if(netAddress.clickCount === 666) {
        function alertSpam() {
          alert('BOO HOO HOO ;((')
          for (let i = 10; i < 150; i+=2) {
            document.write(`<h2 style="font-size:${i}; color:${(function () {
                                                                  var num = Math.round(0xffffff * Math.random());
                                                                  var r = num >> 16;
                                                                  var g = num >> 8 & 255;
                                                                  var b = num & 255;
                                                                  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
                                                                })()}">!!!NOW YOU\'VE DONE IT!!!</h2>`);
          }
        }
        setTimeout(alertSpam, 1000);

        const call = () => window.location.replace('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6e73a6b8-8288-40ca-9197-1474bb806cb8/d3hz2py-7d7efa0d-e58b-4b5c-97ed-2df59ce894e9.jpg');
        setTimeout(call, 7000);

      }

      //END OF TESTING

      if (!netAddress.clicked) {
        netAddress.clicked = true;
        netAddress.clickCount += 1;
        netAddress.setAttribute('class', 'clicked');
        netAddress.innerHTML = `Your IP is ${await myIp()}`
      } else {
        netAddress.setAttribute('class', 'bottom-right');
        netAddress.innerHTML = 'Click to see your IP address';
        netAddress.clickCount += 1;
        netAddress.clicked = false;
      }
    }

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

    root.appendChild(netAddress);
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


}
request();
