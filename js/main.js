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
	if (isStringEmpty(inputEmail)) {
		errorMessages = '<li>Email får ej vara tomt</li>';	
	}
	if (isStringEmpty(inputPassword)) {
		errorMessages += '<li>Lösenord 1 får ej vara tomt</li>';	
	}
	if (isStringEmpty(inputPassword) && isStringEmpty(inputRePassword)) {
		errorMessages += '<li>Lösenord 2 får ej vara tomt</li>';	
	}
	if (isStringEmpty(inputAddress)) {
		errorMessages += '<li>Adress får ej vara tomt</li>';	
	}
	if (isStringEmpty(inputAddress2)) {
		errorMessages += '<li>Adress2 får ej vara tomt</li>';	
	}
	if (isStringEmpty(inputCity)) {
		errorMessages += '<li>Stad får ej vara tomt</li>';	
	}
	if (isStringEmpty(inputZip)) {
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


function generateYearSelectOptionsHtml(startYear, endYear, defaultYear) {
	let yearRange = '';
	for (var year = startYear; year >= endYear; year--) {
		if (year === defaultYear) {
			yearRange += '<option selected>' + year + '</option>';
		} else {
			yearRange += '<option>' + year + '</option>';
		}
	}

	return yearRange;
}

let inputBirthYear = document.getElementById('inputBirthYear');
inputBirthYear.innerHTML = generateYearSelectOptionsHtml(2010, 1920, 1940);





function isStringEmpty(inputField) {
	let string = inputField.value;
	let trimmedString = string.trim();

	return trimmedString === '';
}

// Declaring function standard way
// This way of declaring functions. allows usage before declaration.
// Javascript automaticcally moves this kind of declaration to the top of the script
// This procedure is called hoisting
dummyFunction();
function dummyFunction() {
	console.log('This is a standard declaration of a function');
}

// Must be called after declaration
var dummyFunction2 = function() {
	console.log('Function declared with "Function expression"')
}
dummyFunction2();

// Selv invoking function
(function() {
	console.log('Self invoking, Baby!')
})();


























