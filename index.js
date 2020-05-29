let pic = document.getElementById("photo");
let like = document.getElementById("on_click");
let para = document.getElementById("hidden");
let contain = document.getElementById("container");

like.addEventListener("click", show);
function show() {
  para.style.visibility = "visible";
}

contain.addEventListener("mouseover", opacity)
function opacity() {
  pic.style.opacity = "0.7";
  like.style.visibility = "visible";
}

contain.addEventListener("mouseout", reopacity)
function reopacity(){
  pic.style.opacity = "1";
  like.style.visibility = "hidden";
}

like.addEventListener("mouseover", opacity);



