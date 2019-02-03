function searchFunction() {
  let input = document.getElementById('myinput');
  // console.log(input);
  let filter = input.value.toUpperCase();
  // console.log(filter);
  let titles = document.getElementsByTagName('h1');
  // console.log(titles);
  
  for (i = 0; i < titles.length; i++) {

    if (titles[i].textContent.toUpperCase().indexOf(filter) > -1) {
    titles[i].parentNode.style.display = '';
    // console.log("STOP");
    console.log(titles[i]);
    // console.log("STOP");
    }

    else {
      titles[i].parentNode.style.display = 'none';
      // console.log("END");
      console.log(titles[i].parentNode);
      // console.log("END");
    }
  }
}
