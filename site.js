const stars = document.querySelectorAll('.rating input');

stars.forEach(star => {
  star.addEventListener('change', function() {
    console.log(this.value); // Aqui você pode enviar o valor para o servidor
  });
});
