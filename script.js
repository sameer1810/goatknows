// Get the navigation links
var homeLink = document.getElementById('home');
var aboutLink = document.getElementById('about');
var servicesLink = document.getElementById('services');
var contactLink = document.getElementById('contact');

// Add click event listeners to the links
homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  setActiveTab(homeLink);
});

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  setActiveTab(aboutLink);
});

servicesLink.addEventListener('click', function(event) {
  event.preventDefault();
  setActiveTab(servicesLink);
});

contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  setActiveTab(contactLink);
});

function setActiveTab(link) {
  // Remove the 'active' class from all links
  var links = document.querySelectorAll('nav ul li a');
  links.forEach(function(link) {
    link.classList.remove('active');
  });

  // Add the 'active' class to the clicked link
  link.classList.add('active');

  // Position the line below the active tab
  var line = document.querySelector('.line');
  var activeLinkOffset = link.offsetLeft;
  var activeLinkWidth = link.offsetWidth;
  line.style.transform = `translateX(${activeLinkOffset}px)`;
  line.style.width = `${activeLinkWidth}px`;
}


/* hover effect on card in which text changes */

var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  var originalText = card.dataset.original;
  var newText = card.dataset.new;
  var imageElement = card.querySelector('.image');
  var textElement = card.querySelector('.text');

  card.addEventListener('mouseover', function() {
    imageElement.style.display = 'none'; // Hide the image
    textElement.textContent = newText;
  });

  card.addEventListener('mouseout', function() {
    imageElement.style.display = 'block'; // Show the image
    textElement.textContent = originalText;
  });
});
