function validate() {
var uname = document.querySelector('#username');
var pass = document.querySelector('#id_password');
if(uname.value==="" || pass.value==="") {
    window.alert('Fill All the Field Compulsory');
}
if(uname.value==='Abc2000' && pass.value==='Abc@2000') {
	window.alert("Login Successfully");
}
else {
	window.alert("Login Failed")
}
if(uname.value==pass.value) {
  window.alert('Username and Password Should be different');
}
var upper = /[A-Z]/g;
	if(!pass.value.match(upper)) {
		alert("Password should contain 1 Uppercase Character");
	}
	var lower = /[A-Z]/g;
	if(!pass.value.match(lower)) {
		alert("Password should contain 1 Lowercase Character");
	}
	var digit = /[0-9]/g;
	if(!pass.value.match(digit)) {
		alert("Password should contain 1 Digit");
	}
	var specialchar = /[#?!%$&*@-]/g;
	if(!pass.value.match(specialchar)) {
		alert("Password should contain 1 Special Character");
	}
	if(!pass.value.length>=8) {
		alert("Password should be 8 Character");
	}
}