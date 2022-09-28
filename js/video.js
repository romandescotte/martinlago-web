
// console.log("video.js OK");


window.onload = function() {

  
  window.addEventListener("click", function() {
    mostrarPagina();
  });

  let $video = document.querySelector("#video-presentacion");
  $video.addEventListener("ended", function() {
    console.log("termino!")
    mostrarPagina();
  })

  function mostrarPagina() {
    let $videoContainer = document.querySelector(".video-container");
    let $main = document.querySelector(".container");
    let $header = document.querySelector("header");
    let $footer = document.querySelector("footer");
    $main.classList.remove("no-show");
    $header.classList.remove("no-show");
    $footer.classList.remove("no-show");
    $videoContainer.classList.add("no-show");
  }
}