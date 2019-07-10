function formValidation() {
	var uname = document.registration.username;
	var ucountry = document.registration.country;
	var uzip = document.registration.zip;

	if(allLetter(uname)) {
		if(countryselect(ucountry)) {
			if(allnumeric(uzip)) {
				return true;
			}
		}
	}
	return false;
}

function allLetter(uname) { 
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters)) {
		return true;
	}
	else {
		alert('Username must have alphabet characters only');
		uname.focus();
		return false;
	}
}

function countryselect(ucountry) {
	if(ucountry.value == "Default") {
		alert('Select your country from the list');
		ucountry.focus();
		return false;
	}
	else {
		return true;
	}
}


function allnumeric(uzip) { 
	var numbers = /^[0-9]+$/;
	if(uzip.value.match(numbers)) {
		return true;
	}
	else {
		alert('ZIP code must have numeric characters only');
		uzip.focus();
		return false;
	}
}
