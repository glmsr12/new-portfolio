const hamburger = document.querySelector(
  '.header .nav-bar .nav-list .hamburger'
);
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll(
  '.header .nav-bar .nav-list ul li a'
);
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
//Contact form - Formspree submission
var form = document.getElementById('contact-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = 'Thanks for your submission!';
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data['errors']
              .map((error) => error['message'])
              .join(', ');
          } else {
            status.innerHTML = 'Oops! There was a problem submitting your form';
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
    });
}
form.addEventListener('submit', handleSubmit);
