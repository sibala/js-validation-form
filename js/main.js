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
	
	let formMessages 	= document.getElementById('form-messages');
	let errorMessages 	= ''

	// Must not be empty
	if (inputEmail.value === '') {
		errorMessages = '<li>Email får ej vara tomt</li>';	
	}
	if (inputPassword.value === '') {
		errorMessages += '<li>Lösenord 1 får ej vara tomt</li>';	
	}
	if (inputPassword.value === '' && inputRePassword.value === '') {
		errorMessages += '<li>Lösenord 2 får ej vara tomt</li>';	
	}
	if (inputAddress.value === '') {
		errorMessages += '<li>Adress får ej vara tomt</li>';	
	}
	if (inputAddress2.value === '') {
		errorMessages += '<li>Adress2 får ej vara tomt</li>';	
	}
	if (inputCity.value === '') {
		errorMessages += '<li>Stad får ej vara tomt</li>';	
	}
	if (inputZip.value === '') {
		errorMessages += '<li>Postnummer får ej vara tomt</li>';	
	}
	if (gridCheck.checked === false) {
		errorMessages += '<li>Måste bli checkad</li>';
	}

	// Check password has at least 6 chars
	if (inputPassword.value !== '' 
		&& inputPassword.value.length < 6
	) {
		errorMessages += '<li>Lösenordet måste vara minst 6 karaktärer långt</li>';
	}

	// Check that retyped password is equal password
	if (inputRePassword.value !== inputPassword.value) {
		errorMessages += '<li>Lösenordet 2 överensstämmer inte med lösenordet 1</li>';
	}

	// Display form message
	if (errorMessages !== '') {
		formMessages.innerHTML = 
			'<div class="alert alert-danger" role="alert">' + 
				'<ul>' +
					errorMessages +
				'</ul>' +
			'</div>';
	} else {
		formMessages.innerHTML = 
			'<div class="alert alert-success" role="alert">' + 
				'Ditt formulär är skickat :)'
			'</div>';
	}
})


// Generate year options for the dropdown 'Birth year'
let inputBirthYear = document.getElementById('inputBirthYear');
let yearRange = '';
for (var year = 2020; year >= 1920; year--) {
	if (year === 1990) {
		yearRange += '<option selected>' + year + '</option>';
	} else {
		yearRange += '<option>' + year + '</option>';
	}
}

inputBirthYear.innerHTML = yearRange;


