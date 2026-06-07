document.addEventListener('DOMContentLoaded', function() {
    // Fade-in on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));
  
    // Highlight active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) { current = section.getAttribute('id'); }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) link.classList.add('active');
      });
    });
  });

// Below is the code for the contact form popup using Tally widget
document.addEventListener('DOMContentLoaded', function () {

    const contactLink = document.getElementById('contact-link');

    if (contactLink) {

        contactLink.addEventListener('click', function (e) {

            e.preventDefault();

            if (typeof Tally !== 'undefined') {

                Tally.openPopup('eqzxRk', {
                    layout: 'modal',
                    width: 700,
                    overlay: true,
                    autoClose: 5000
                });

            } else {

                console.error('Tally widget not loaded.');

            }

        });

    }

});
// Below is the code for the consultation button popup using Calendly widget
document.addEventListener('DOMContentLoaded', function () {

    const consultationBtn = document.getElementById('consultation-btn');

    if (consultationBtn) {

        consultationBtn.addEventListener('click', function (e) {

            e.preventDefault();

            Calendly.initPopupWidget({
                url: 'https://calendly.com/tmkhalid/30min'
            });

        });

    }

});