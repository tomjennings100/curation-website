document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  const element = document.getElementById("spiral-3");
  Velocity(element, { translateX: 1000 }, 5000);

  var multiSlides = document.querySelector(".slider");
  console.log(multiSlides);

  lory(multiSlides, {
    infinite: 1,
    slidesToScroll: 1
  });
});

$(document).ready(() => {
  $("#contact-form").on("submit", e => {
    e.preventDefault();
    const data = $("#contact-form").serializeArray();
    const submitData = {
      name: data[1]["value"],
      email: data[2]["value"],
      company: data[3]["value"]
    };
    $.post({
      url: "https://formspree.io/xjrznggx",
      data: data,
      dataType: "json"
    }).then(res => {
      $('#contact-form').hide(); 
      $('#submit-success').show(); 
    });
  });
});
