function searchFunction() {
  let input = document.getElementById('myinput');
  let filter = input.value.toUpperCase();
  let whole = document.getElementById('root');
  let cardContainers = whole.getElementsByClassName('card');

  for (i = 0; i < cardContainers.length; i++) {
    let title = cardContainers[i].getElementsByTagName('h1')[0]

    if (title.textContent.toUpperCase().indexOf(filter) > -1) {
      cardContainers[i].style.display = '';
      console.log(title);
    }

    else {
      cardContainers[i].style.display = 'none';
      console.log(cardContainers[i]);
    }
  }
}
