document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  const element = document.getElementById("spiral-3");
  Velocity(element, { translateX: 1000 }, 5000);

  var multiSlides = document.querySelector(".slider");
  console.log(multiSlides)

  lory(multiSlides, {
    infinite: 2,
    slidesToScroll: 2
  });
});
