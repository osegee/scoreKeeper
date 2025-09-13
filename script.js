let guestEl = document.getElementById("guest");
let homeEl = document.getElementById("home");
let guestCount = 0;
let homeCount = 0;

function addGuest(points) {
  guestCount += points;
  guestEl.innerText = guestCount;
}

function addHome(points) {
  homeCount += points;
  homeEl.innerText = homeCount;
}
