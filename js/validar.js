'use strict'

console.log("validar.js conectado");

//Validacion formulario contacto 


let $formContainer = document.querySelector(".form-container__form");
document.addEventListener("DOMContentLoaded", function() {
	
  	$formContainer.addEventListener('submit', validaFormulario); 
});



function validaFormulario(evento) {

	evento.preventDefault();
	let $userInputs = document.querySelectorAll("input.form-container__form__input, textarea");

	if(	$userInputs[0].value.length > 0 &&
		$userInputs[1].value.length > 0 &&
		$userInputs[2].value.length > 0 &&
		$userInputs[3].value.length > 0 ) {
			this.submit();
			console.log("Formulario enviado!");

	} else {
		for(let i = 0; i < $userInputs.length ; i++) {
			
			if($userInputs[i].value.length == 0) {
				
				$userInputs[i].classList.add("invalid");
				let $alertParagraph = document.createElement("p");
				$alertParagraph.innerText = "Este campo no puede estar vacío!"; 
				$alertParagraph.classList.add("alert");
				$userInputs[i].insertAdjacentElement('afterend', $alertParagraph);
				
				if($userInputs[i].id == "name") {
					$alertParagraph.classList.add("name");
					let $elementoClaseNombre = document.querySelectorAll(".name");
					if($elementoClaseNombre.length > 1) {
						$alertParagraph.remove(this);
					}
				} 

				if($userInputs[i].id == "e-mail") {
					$alertParagraph.classList.add("e-mail");
					let $elementoClaseEmail = document.querySelectorAll(".e-mail");
					if($elementoClaseEmail.length > 1) {
						$alertParagraph.remove(this);
					}
				} 

				if($userInputs[i].id == "subject") {
					$alertParagraph.classList.add("subject");
					let $elementoClaseAsunto = document.querySelectorAll(".subject");
					if($elementoClaseAsunto.length > 1) {
						$alertParagraph.remove(this);
					}
				} 

				if($userInputs[i].id == "message") {
					$alertParagraph.classList.add("message");
					let $elementoClaseMensaje = document.querySelectorAll(".message");
					if($elementoClaseMensaje.length > 1) {
						$alertParagraph.remove(this);
					}
				} 
				
			} else if($userInputs[i].value.length > 0) {
				
				$userInputs[i].classList.remove("invalid");
				console.log(`campo ${$userInputs[i].id} tiene contenido` );

				let $elementoClaseNombre = document.querySelectorAll(".name");
				if($userInputs[i].id == "name" && $elementoClaseNombre.length > 0) {
					document.querySelector(".alert.name").remove();

					return;
				}
				let $elementoClaseEmail = document.querySelectorAll(".e-mail");
				if($userInputs[i].id == "e-mail" && $elementoClaseEmail.length > 0) {
					document.querySelector(".alert.e-mail").remove();
					return;
				}
				let $elementoClaseAsunto = document.querySelectorAll(".subject");
				if($userInputs[i].id == "subject" && $elementoClaseAsunto.length > 0) {
					document.querySelector(".alert.subject").remove();
					return;
				}
				let $elementoClaseMensaje = document.querySelectorAll(".message");
				if($userInputs[i].id == "message" && $elementoClaseMensaje.length > 0) {
					document.querySelector(".alert.message").remove();
					return;
				}
			} 
			
		}
	}
}



	






