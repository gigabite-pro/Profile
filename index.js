let like = document.getElementsByClassName("on_click");
let para = document.getElementById("show_me");

like.addEventListener("click",show);

function show() {
  para.style.display = "inline-block";
}