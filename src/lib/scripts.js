///counter
document.addEventListener('DOMContentLoaded', () => {
  const contenedores = document.querySelectorAll('.flex.flex-col.text-center.gap-2');

  const velocidad = 1000;

  const animarContador = (contador) => {
    const cantidadMaxima = +contador.dataset.cantidadTotal;
    const incremento = cantidadMaxima / velocidad;

    const actualizar = () => {
      const valorActual = +contador.innerText;
      if (valorActual < cantidadMaxima) {
        contador.innerText = Math.ceil(valorActual + incremento);
        setTimeout(actualizar, 5);
      } else {
        contador.innerText = cantidadMaxima;
      }
    };

    actualizar();
  };

  const mostrarContadores = (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const contador = entrada.target.querySelector('.counter');
        entrada.target.classList.add('animar');
        entrada.target.classList.remove('close');
        setTimeout(() => animarContador(contador), 300);
      }
    });
  };

  const observer = new IntersectionObserver(mostrarContadores, {
    threshold: 0.75,
  });

  contenedores.forEach((contenedor) => {
    observer.observe(contenedor);
  });
});

///random flotante
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.float-animation');

  images.forEach((img) => {
    const delay = (Math.random() * 1).toFixed(2); // Retraso entre 0s y 1s

    img.style.animationDuration = `3s`;
    img.style.animationDelay = `${delay}s`;
  });
});
