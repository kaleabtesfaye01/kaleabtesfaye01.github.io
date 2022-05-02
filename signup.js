"use strict"

const $ = selector => document.querySelector(selector);

const toggle = name => { 
	name.value;

};

const processEntries = () => {
	const name = $("#name");
	const address = $("#address");
	const apt = $("#apt");
	const city = $("#city");
	const state = $("#state");
	const zip = $("#zip");
	const phone = $("#phone");
	const email = $("#email");
	
	const field = $("#title2")
	const lifetime = $("#lifetime");
	const ind = $("#ind");
	const senior = $("#senior");
	const student = $("#student");
	const family = $("#family");

	const terms = $("#terms");

	let isValid = true;

	if (name.value == ""){
		name.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}else{
		name.nextElementSibling.textContent = "";
	}

	if (address.value == ""){
		address.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}else{
		address.nextElementSibling.textContent = "";
	}

	if (apt.value == ""){
		apt.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}else{
		apt.nextElementSibling.textContent = "";
	}

	if (city.value == ""){
		city.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}else{
		city.nextElementSibling.textContent = "";
	}

	if (state.value == ""){
		state.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}else{
		state.nextElementSibling.textContent = "";
	}

	if (zip.value == ""){
		zip.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}else{
		zip.nextElementSibling.textContent = "";
	}

	if (phone.value == ""){
		phone.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}else{
		phone.nextElementSibling.textContent = "";
	}

	if (email.value == ""){
		email.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}else{
		email.nextElementSibling.textContent = "";
	}

	if (lifetime.checked == false && ind.checked == false && senior.checked == false && student.checked == false && family.checked == false){
		field.nextElementSibling.textContent = "The field below is required.";
		isValid = false;
	}else{
		field.nextElementSibling.textContent = "";
	}

	if (terms.checked == false) {
        terms.nextElementSibling.textContent = "This box must be checked.";
        isValid = false; 
    } else { 
        terms.nextElementSibling.textContent = "";
    }

    if (isValid == true){
    	$("form").submit();
    }
};

const resetForm = () => {
	$("form").reset();
	$("#name").nextElementSibling.textContent = "*";
	$("#address").nextElementSibling.textContent = "*";
	$("#apt").nextElementSibling.textContent = "*";
	$("#city").nextElementSibling.textContent = "*";
	$("#state").nextElementSibling.textContent = "*";
	$("#zip").nextElementSibling.textContent = "*";
	$("#phone").nextElementSibling.textContent = "*";
	$("#email").nextElementSibling.textContent = "*";
	$("#title2").nextElementSibling.textContent = "*";
	$("#terms").nextElementSibling.textContent = "*";
	$("#name").focus();

};
document.addEventListener("DOMContentLoaded", () => {
	$("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    $("#name").focus();

});