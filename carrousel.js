window.onload = function () {
  const mainImage = document.querySelector('.main-image');
  const thumbnails = document.querySelectorAll('.thumbnails img');
  let intervalId; 

  // Mostramos la imagen al inicio
  mainImage.src = thumbnails[0].src;

  let indiceImage = 0;

  function showImage(index) {
    mainImage.src = thumbnails[index].src;
  }

  function moveNext() {
    indiceImage = indiceImage + 1;

    if (indiceImage >= thumbnails.length) {
      // Reiniciar
      indiceImage = 0;
    }

    showImage(indiceImage);
  }

  // 2 segundos
  intervalId = setInterval(moveNext, 2000);

  // agregamos  evento de hover a la imagen principal
  mainImage.addEventListener('mouseover', function () {
    // detenemos el movimiento al hacer hover
    clearInterval(intervalId);
  });

  mainImage.addEventListener('mouseout', function () {
    // renudar el movimiento al dejar de hacer hover
    intervalId = setInterval(moveNext, 2000);
  });






};