// contador.js
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // La velocidad del contador
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
  
        // Calcula la velocidad de incremento
        const inc = target / speed;
  
        // Verifica si ya alcanzó el objetivo
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  


  $('.client-logos').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 3, // Mostrar 3 logos en dispositivos móviles
      },
      768: {
        items: 5, // Mostrar 5 logos en dispositivos de escritorio
      }
    }
  });
