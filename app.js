const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
//Contact form - Formspree submission JS
var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
	method: form.method,
	body: data,
	headers: {
		'Accept': 'application/json'
	}
  }).then(response => {
	if (response.ok) {
	  status.innerHTML = "Thanks for your submission!";
	  form.reset()
	} else {
	  response.json().then(data => {
		if (Object.hasOwn(data, 'errors')) {
		  status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
		} else {
		  status.innerHTML = "Oops! There was a problem submitting your form"
		}
	  })
	}
  }).catch(error => {
	status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

/*
window.addEventListener("DOMContentLoaded", function(){
	var form = document.getElementById("contact-form");
	var status = document.getElementById("status");
// After submitting the form
	function success() {
		form.reset();
		status.classList.add('success');
		status.innerHTML = "Thank You!";
	}

	function error() {
		status.classList.add('error');
		status.innerHTML = "Opps! There was a problem.";

	}
	//Handle the form submisson event

	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var data = new FormData (form);
		ajax(form.method, form.action, data, success, error);

	});	
});

//Helper function for sending on AJAX reguest 

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpReguest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}

	}

	xhr.send(data);

}

*/






















