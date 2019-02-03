function searchFunction() {
  let input = document.getElementById('myinput');
  // console.log(input);
  let filter = input.value.toUpperCase();
  // console.log(filter);
  let whole = document.getElementById('root');
  // console.log(whole);
  let cardContainers = whole.getElementsByClassName('card');
  // console.log(cardContainers);

  for (i = 0; i < cardContainers.length; i++) {
    let title = cardContainers[i].getElementsByTagName('h1')[0]

    if (title.textContent.toUpperCase().indexOf(filter) > -1) {
      cardContainers[i].style.display = '';
      // console.log("STOP");
      // console.log(title);
      // console.log("STOP");
    }

    else {
      cardContainers[i].style.display = 'none';
      // console.log("END");
      // console.log(cardContainers[i]);
      // console.log("END");
    }
  }
}
