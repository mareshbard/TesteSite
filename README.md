# TesteSite
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-P32pq3klzW3mEVG3jA2cveLcbG+K4lBKnUuGkSHwIHv8Qf7ifufTH4Gw18QFZcs1" crossorigin="anonymous">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap')
  </style>
</head>

<div class="titulo">
  <h1>CATBOOKS</h1>
</div>

<div class="base">
  <h2> AVALIE SEUS LIVROS! </h2>
  <div id="livro1">
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRstx2jNVN_3mI5ZMnEqJfstlQXrUs0twrp0jPrfHbMRvYTFrAH" alt="Persuasão">
    <h4>Persuasão, Jane Austen</h4>
    <div class="rating">
      <input type="radio" id="star5" name="rating" value="5">
      <label for="star5"></label>
      <input type="radio" id="star4" name="rating" value="4">
      <label for="star4"></label>
      <input type="radio" id="star3" name="rating" value="3">
      <label for="star3"></label>
      <input type="radio" id="star2" name="rating" value="2">
      <label for="star2"></label>
      <input type="radio" id="star1" name="rating" value="1">
      <label for="star1"></label>
    </div>
  </div>
  <div id="livro2">
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRstx2jNVN_3mI5ZMnEqJfstlQXrUs0twrp0jPrfHbMRvYTFrAH" alt="Persuasão">
    <h4>Persuasão, Jane Austen</h4>
    <div class="rating">
      <input type="radio" id="star5A" name="ratingA" value="5">
      <label for="star5A"></label>
      <input type="radio" id="star4A" name="ratingA" value="4">
      <label for="star4A"></label>
      <input type="radio" id="star3A" name="ratingA" value="3">
      <label for="star3A"></label>
      <input type="radio" id="star2A" name="ratingA" value="2">
      <label for="star2A"></label>
      <input type="radio" id="star1A" name="ratingA" value="1">
      <label for="star1A"></label>
    </div>
  </div>

  body {
        background-color:black; 
    }
.titulo{ 
  color: white;
  text-align: center;
  font-family: "Silkscreen", sans-serif;
  font-weight: 400;
  font-style: normal
  
}
.base{
  float: left;
  padding: 10px;
  background-color:white;
  padding: 50px;
  margin: 20px;
  font-family: 'Font Awesome Lathusca', sans-serif;
}
.rating {
  display: inline-block;
}

.rating input {
  display: none;
}

.rating label {
  cursor: pointer;
  font-size: 45px;
  color: grey;
  float: right;
  
}

.rating label:before {
  content: '\2605'; /* Estrela vazia */
}

.rating input:checked ~ label {
  color: #ffcc00;
}

.rating input:checked ~ label:before {
  content: '\2605'; /* Estrela preenchida */
}
.livro1{
  width: 3px;
}

const stars = document.querySelectorAll('.rating input');

stars.forEach(star => {
  star.addEventListener('change', function() {
    console.log(this.value); // Aqui você pode enviar o valor para o servidor
  });
});
