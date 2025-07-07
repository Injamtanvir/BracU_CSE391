// InjamTanvir

document.addEventListener('DOMContentLoaded', function(){



  document.getElementById('location').textContent = window.location.href;
  
  const lastModified = new Date(document.lastModified);
  document.getElementById('last-modified').textContent = lastModified.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
  


  const themeButton = document.getElementById('theme-btn');
  


  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark'){
    document.body.classList.add('dark-theme');
  }
  
  themeButton.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  

  

  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  

  burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function()
    {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  

  document.querySelectorAll('a[href^="#"]').forEach(link => 
    {
    link.addEventListener('click', function(e){
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') 
        return;
      const targetElement = document.querySelector(targetId);
      if(targetElement){
        window.scrollTo(
          {
          top: targetElement.offsetTop - 50, 
          behavior: 'smooth'
          }
      );
      }

    });
  });
  



  const contactForm = document.querySelector('.contact-form form');
  if (contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if(!name || !email || !message){
        alert('Please fill in all fields');
        return;
      }

      alert('Thank you for your message! We will get back to you soon.');
      
      contactForm.reset();
    });
  }
}); 