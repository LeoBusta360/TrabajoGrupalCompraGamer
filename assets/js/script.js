document.addEventListener('DOMContentLoaded', function () {
    const clearButton = document.getElementById('clearButton');
    const searchInput = document.getElementById('inputSearch');
  
    clearButton.addEventListener('click', function () {
      searchInput.value = '';
      searchInput.focus();
    });
  });
  
  // Carousel 1 - Avanzar de 2 en 2 imágenes
  const imgContainer = document.querySelector('.Imagenes-Carrusel');
  const dots = document.querySelectorAll('.nav_dots .dot');
  const numImages = dots.length;
  
  let currentIndex = 0;
  let interval;
  
  function updateCarousel(index) {
      const offset = -index * 100; // Desplaza 200% para mostrar dos imágenes
      imgContainer.style.transform = `translateX(${offset}%)`;
  
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
  }
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % (numImages); // Dividido por 2 ya que avanzamos de 2 en 2
      updateCarousel(currentIndex);
  }
  
  function restartInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 6000);
  }
  
  dots.forEach(dot => {
      dot.addEventListener('click', () => {
          currentIndex = parseInt(dot.getAttribute('data-index'), 10);
          updateCarousel(currentIndex);
          restartInterval();
      });
  });
  
  interval = setInterval(nextSlide, 6000);
  updateCarousel(0);
  
  // Carousel Media Query
  const imgContainer1 = document.querySelector('.Imagenes-Carrusel1');
  const dots1 = document.querySelectorAll('.nav_dots1 .dot1');
  const numImages1 = dots1.length;
  
  let currentIndex1 = 0;
  let interval1;
  
  function updateCarousel1(index1) {
      const offset1 = -index1 * 100;
      imgContainer1.style.transform = `translateX(${offset1}%)`;
  
      dots1.forEach(dot1 => dot1.classList.remove('active'));
      dots1[index1].classList.add('active');
  }
  
  function nextSlide1() {
      currentIndex1 = (currentIndex1 + 1) % (numImages);
      updateCarousel1(currentIndex1);
  }
  
  function restartInterval1() {
      clearInterval(interval1);
      interval1 = setInterval(nextSlide1, 6000);
  }
  
  dots1.forEach(dot1 => {
      dot1.addEventListener('click', () => {
          currentIndex1 = parseInt(dot1.getAttribute('data-index1'), 10);
          updateCarousel1(currentIndex1);
          restartInterval1();
      });
  });
  
  interval1 = setInterval(nextSlide1, 6000);
  updateCarousel1(0);
  

  //Carrusel Medio

document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos-container');
    const productosSlider = document.getElementById('productos-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const mostrarPorPagina = 4;
    const cardWidth = 260; 
    let totalCartas = 0;
    let indiceInicio = 0;

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card');

        card.innerHTML = `
            <img src="${producto.Imagen}" alt="${producto.Nombre}">
            <div class="nombre">${producto.Nombre}</div>
            <div class="precio">${producto.Precio}</div>
        `;

        productosContainer.appendChild(card);
    });

    totalCartas = productos.length;

    const actualizarSlider = () => {
        const offset = -indiceInicio * cardWidth;
        productosSlider.style.transform = `translateX(${offset}px)`;
    };

    prevBtn.addEventListener('click', () => {
        if (indiceInicio <= 0) {
            indiceInicio = totalCartas - mostrarPorPagina;
        } else {
            indiceInicio--;
        }
        actualizarSlider();
    });

    nextBtn.addEventListener('click', () => {
        if (indiceInicio >= totalCartas - mostrarPorPagina) {
            indiceInicio = 0;
        } else {
            indiceInicio++;
        }
        actualizarSlider();
    });

    actualizarSlider();
});
