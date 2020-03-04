// Validate submission form
let registerForm = document.getElementById('signup-user-form');
registerForm.addEventListener('submit', function(event) {
	// Prevents default behavior. 
	// In this case the deafult behavior is that the form reloads when submitted
	event.preventDefault();

	let inputEmail 		= document.getElementById('inputEmail');
	let inputPassword 	= document.getElementById('inputPassword');
	let inputRePassword = document.getElementById('inputRePassword');
	let inputAddress 	= document.getElementById('inputAddress');
	let inputAddress2 	= document.getElementById('inputAddress2');
	let inputCity 		= document.getElementById('inputCity');
	let inputZip 		= document.getElementById('inputZip');
	let gridCheck 		= document.getElementById('gridCheck');

	let errorMessages = ''

	// Must not be empty
	if (inputEmail.value === '') {
		errorMessages = 'Email får ej vara tomt';	
	}
	if (inputPassword.value === '') {
		errorMessages += '\nLösenord 1 får ej vara tomt';	
	}
	if (inputPassword.value === '' && inputRePassword.value === '') {
		errorMessages += '\nLösenord 2 får ej vara tomt';	
	}
	if (inputAddress.value === '') {
		errorMessages += '\nAdress får ej vara tomt';	
	}
	if (inputAddress2.value === '') {
		errorMessages += '\nAdress2 får ej vara tomt';	
	}
	if (inputCity.value === '') {
		errorMessages += '\nStad får ej vara tomt';	
	}
	if (inputZip.value === '') {
		errorMessages += '\nPostnummer får ej vara tomt';	
	}
	if (gridCheck.checked === false) {
		errorMessages += '\nMåste bli checkad';
	}

	// Check password has at least 6 chars
	if (inputPassword.value !== '' && inputPassword.value.length < 6
	) {
		errorMessages += '\nLösenordet måste vara minst 6 karaktärer långt';	
	}

	// Check that retyped password is equal password
	if (inputRePassword.value !== inputPassword.value) {
		errorMessages += '\nLösenordet 2 överensstämmer inte med lösenordet 1';	
	}


	alert(errorMessages);
})