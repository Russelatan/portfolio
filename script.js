document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Calculate the offset to center the section
      const elementRect = targetElement.getBoundingClientRect();
      const elementTop = elementRect.top + window.scrollY; // Get the top position of the element
      const offset = (window.innerHeight / 2) - (elementRect.height / 2); // Calculate offset to center

      // Smooth scroll to the target element
      window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth'
      });
  });
});






document.querySelector('.shapeshooter').addEventListener('click', function() {
  
  const url = 'https://github.com/Russelatan/Shapeshooter.git';
  
  window.open(url, '_blank');
});

document.querySelector('.sinking_fund').addEventListener('click', function() {
  
  const url = 'https://drive.google.com/drive/folders/1H_3HXVQpsaVtzdbQXPBH1Xa7LCzQnj9D?usp=sharing';
  
  window.open(url, '_blank');
});

document.querySelector('.weather').addEventListener('click', function() {
  
  const url = 'https://drive.google.com/drive/folders/1NXBpMEF3ApUjSTE5BtkG3q5ib05hAQp1?usp=sharing';
  
  window.open(url, '_blank');
});


