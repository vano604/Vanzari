var data = new Date();
document.getElementById('an').innerHTML = data.getFullYear();

function mobileMenu() {
    document.getElementById("navbar").classList.toggle("mobile");
  }

  const form = document.getElementById('contactForm');
      
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbwSd1tUCAR2hQgJfXNzhmtNhfjWeP9E1C6l59AmfZnPpDOGCIyCgtKmOx8o_b_g9L75/exec", {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      alert('Datele sunt trimise: ' + result);
      form.reset(); // очищаем форму после отправки
    })
    .catch(error => {
      alert('Eroare: ' + error.message);
    });
  });