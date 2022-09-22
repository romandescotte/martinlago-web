'use strict'

console.log("js conectado");


// Despliega menu colapsable en mobile

let $flexMenuHamburger = document.getElementById("menu-colapsable");
let $btnColapsable = document.querySelector(".colapsable");
let $mobileContainer = document.querySelector(".container");
let $footer = document.querySelector("footer");

$btnColapsable.addEventListener("click", function() {
    
    if ($flexMenuHamburger.style.height){
        $flexMenuHamburger.style.height = null;
      } else {
        $flexMenuHamburger.style.height = $flexMenuHamburger.scrollHeight + 220 + "px";
    };
    	 $mobileContainer.classList.toggle("opacar");
		 $footer.classList.toggle("opacar");
	
    // $flexMenuHamburger.style.top = window.scrollY + 62 + "px";
});



// Convierte a b&n imagenes al hacer click

let $imgGaleria = document.querySelector(".img-galeria");
$btnColapsable.addEventListener("click", function() {
	if($imgGaleria) {
		for(let i=0; i <= $imgGaleria.length; i++) {
			$imgGaleria.classList.toggle("opacar");
		}  
	}
	
});



// Cancela click derecho en imagenes
//investigar alguna manera de que no quede el loop ahi en esparcido 

let $imgGaleria2 = document.querySelectorAll(".img-galeria");
for(let i=0; i< $imgGaleria2.length; i++ ) {
	$imgGaleria2[i].addEventListener("contextmenu", function(e) {
		e.preventDefault();
	}, false);
}



//Oculta menu de navegacion superior al scrollear

/*Lo saqué de aca: https://www.sitepoint.com/animated-sticky-navigation-menu-javascript/*/ 
(() => {
	let refOffset = 0;
	const alturaHeader = 91.875;
	const $header = document.querySelector('header');

	const handler = () => {
		const newOffset = window.scrollY || window.pageYOffset;

		if (newOffset > alturaHeader) {
		if (newOffset > refOffset) {
			$header.classList.remove('animaHeaderIn');
			$header.classList.add('animaHeaderOut');
		} else {
			$header.classList.remove('animaHeaderOut');
			$header.classList.add('animaHeaderIn');
		}
		$header.style.background = '#f9f9f9c4';
		refOffset = newOffset;
		} else {
		$header.style.backgroundColor = '#f9f9f9';
		}
	};
	window.addEventListener('scroll', handler, false);
})();
  


// Abre modal al hacer click en imaganes

let $modal = document.getElementById("modal");
let $img = document.getElementsByClassName("img-galeria");
let $modalImg = document.getElementById("modal__img");
for(let i = 0; i < $img.length; i++ ) {
	$img[i].addEventListener("click" , function () {
		$modal.style.display = "flex";
		$modalImg.src = this.src;

	});
	if($img[i].style.height > 100) {
		//$modalImg.classList.add("vertical")
	}
}

let $btnCerrar = document.getElementById("modal__btnCerrar");
if($btnCerrar) {
	$btnCerrar.addEventListener("click", function() {
		$modal.style.display = "none";
	})
}
if($modal) {
	$modal.addEventListener("click" , function() {
		this.style.display = "none";
	})
}


// Submenu colapsable mobile/tablet

let $submenuColapsableBtn = document.querySelector("#submenu-colapsable-btn");
let $obraSubmenuContainer = document.querySelector(".obra-submenu-container");

$submenuColapsableBtn.addEventListener("click", function() {
	if(window.innerWidth < 576){
		$obraSubmenuContainer.classList.toggle("alto-160");

	} else if (window.innerWidth < 992) {
		$obraSubmenuContainer.classList.toggle("alto-200");
	}
	
})


