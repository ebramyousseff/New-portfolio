/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===============  MENU SHOW ===============*/
/*Validate if constant exist*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===============  MENU HIDDEN ===============*/
/*Validate if constant exist*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navlink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById("contact-form"),
//   contactMessage = document.getElementById("contact-message");

// const sendEmail = (e) => {
//   e.preventDefault()

//   emailjs.sendForm(
//     "service_4kjw0ku",
//     "template_gkhcfap",
//     "#contact-form",
//     "lgt0vCapBr4XVtcJA"
//   ).then(() => {
//     contactMessage.textContent = "Message sent successfully ✅";
//     setTimeout(() => {
//       contactMessage.textContent = "";
//     }, 5000);
//   });
// };

// contactForm.addEventListener("submit", sendEmail);

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3bxv8li",
        "template_gkhcfap",
        "#contact-form",
        "lgt0vCapBr4XVtcJA"
      )
      .then(() => {
        contactMessage.textContent = "Message sent successfully ✅";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      })
      .catch((error) => {
        contactMessage.textContent = "Failed to send message ❌";
        console.error(error);
      });
  };

  contactForm.addEventListener("submit", sendEmail);
});

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

document.getElementById("scroll-up").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__menu a");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href='#" + sectionId + "']"
    );

    if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active-link")); 
      sectionsClass.classList.add("active-link"); 
    }
  });
};

window.addEventListener("scroll", scrollActive);



/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
})
sr.reveal(`.home__perfil, .about__image, .contact__mail`,{origin:"right"})
sr.reveal(`.home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data`,
  {origin:"left"})
  sr.reveal(`.services__card, .projects__card`,{origin:"right"})
