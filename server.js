document.addEventListener('keyup', function(e){
  if(e.keyCode == 32 || e.keyCode == 13) //spacebar keyCode = 49
  window.location.reload();
});

let p1 = Math.floor(Math.random() * 3) + 1;
let p2 = Math.floor(Math.random() * 3) + 1;
const hands = [ "fa-hand-grab-o", "fa-hand-paper-o", "fa-hand-peace-o",];
document.querySelector('.p1').classList.add(hands[p1-1]);
document.querySelector('.p2').classList.add(hands[p2-1]);

if (p1 === p2) {
  document.querySelector('h1').textContent = 'Draw!';
} else {
  if (p1 === 1) {
    if (p2 == 2) {
      document.querySelector('h1').textContent = 'P2 wins!';
      document.querySelector('.p2').classList.add("getBig");
      document.querySelector('.p1').classList.add("getSmall");
    } else {
      document.querySelector('h1').textContent = 'P1 wins!';
      document.querySelector('.p1').classList.add("getBig");
      document.querySelector('.p2').classList.add("getSmall");
    }
  }
  if (p1 === 2) {
    if (p2 == 3) {
      document.querySelector('h1').textContent = 'P2 wins!';
      document.querySelector('.p2').classList.add("getBig");
      document.querySelector('.p1').classList.add("getSmall");
    } else {
      document.querySelector('h1').textContent = 'P1 wins!';
      document.querySelector('.p1').classList.add("getBig");
      document.querySelector('.p2').classList.add("getSmall");
    }
  }
  if (p1 === 3) {
    if (p2 == 1) {
      document.querySelector('h1').textContent = 'P2 wins!';
      document.querySelector('.p2').classList.add("getBig");
      document.querySelector('.p1').classList.add("getSmall");
    } else {
      document.querySelector('h1').textContent = 'P1 wins!';
      document.querySelector('.p1').classList.add("getBig");
      document.querySelector('.p2').classList.add("getSmall");
    }
  }
}
