// Toggle Menu Functionality Start

function openMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}
// Toggle Menu Functionality End


// Scroll to next section Start

(function() {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    const nextSection = window.innerHeight;

    window.scrollTo({
      top: nextSection,
      behavior: "smooth"
    });
  }

  btnScrollDown.addEventListener('click', scrollDown);
})();

// Scroll to next section End

// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End

window.addEventListener("load", function () {
  if (window.location.hash === "#contact_page") {
    const section = document.getElementById("contact_page");
    const offset = 150;

    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  }
});



window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-container");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});




// Cookies JS Start
(function () {
  "use strict";

  var cookieAlert = document.querySelector(".cookie-alert");
  var acceptCookies = document.querySelector(".accept-cookies");
  var rejectCookies = document.querySelector(".reject-cookies");

  cookieAlert.offsetHeight;

  if (!getCookie("acceptCookies") && !getCookie("rejectCookies")) {
    cookieAlert.classList.add("show");
  }

  acceptCookies.addEventListener("click", function () {
    setCookie("acceptCookies", true, 60);
    cookieAlert.classList.remove("show");
  });

  rejectCookies.addEventListener("click", function () {
    setCookie("rejectCookies", true, 60);
    cookieAlert.classList.remove("show");
  });
})();

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Cookies JS END

// Loader JS Start
window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
});
// Loader JS End