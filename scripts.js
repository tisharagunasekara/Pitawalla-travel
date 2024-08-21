document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const contactInfo = document.querySelector('.contact-info');
    const intro = document.querySelector('#intro');
    const introParagraph = document.querySelector('#intro p');
    const serviceItems = document.querySelectorAll('.service-item');

    // Toggle hamburger menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        contactInfo.classList.toggle('hide');
    });

    // Intersection Observer for intro section
    const introObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                intro.classList.add('show');
                introParagraph.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger animation when 50% of the element is visible
    });

    // Intersection Observer for service items
    const serviceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger animation when 50% of the element is visible
    });

    // Observe service items
    serviceItems.forEach(item => {
        serviceObserver.observe(item);
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
function showMoreImages() {
    // Select the hidden row of images
    const hiddenRow = document.querySelector('.gallery-row.hidden');
    
    // Remove the 'hidden' class to make the images visible
    hiddenRow.classList.remove('hidden');
    
    // Hide the "See More" button after it's clicked
    document.getElementById('seeMoreBtn').style.display = 'none';
}