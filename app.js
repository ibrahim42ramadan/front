const button = document.querySelector(".button");
const state = document.querySelector(".state");
// const button=document.querySelector(".button");
let stor = +localStorage.getItem("tspeehCount");
state.innerHTML = stor;

function tspeeh() {
  let tspeehCount = 0 + stor;
  stor++;
  localStorage.setItem("tspeehCount", tspeehCount);
  const formlocal = +localStorage.getItem("tspeehCount");
  state.innerHTML = formlocal;

  console.log(formlocal);
}
button.addEventListener("click", tspeeh);
