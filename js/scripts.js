$(document).ready(function(){
  $(".clic1").click(function(){
    $("#toto1").toggle();
      $(".clic1").toggle();
      });

      $("#toto1").click(function(){
        $(".clic1").show();
          $("#toto1").hide();

});
});
$(document).ready(function(){
  $(".clic2").click(function(){
    $("#toto2").toggle();
      $(".clic2").toggle();
      });

      $("#toto2").click(function(){
        $(".clic2").show();
          $("#toto2").hide();

});
});

$(document).ready(function(){
  $(".clic3").click(function(){
    $("#toto3").toggle();
      $(".clic3").toggle();
      });

      $("#toto3").click(function(){
        $(".clic3").show();
          $("#toto3").hide();

});
});




$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    alert("We have received your message.Thank you for reaching out to us!." );
  });
});


$(document).ready(function(){
  $('#pic4').on("mouseover", function() {
  $('#lip4').show();
  });

  $('#pic4').on("mouseout", function() {
    $('#lip4').hide();
  });
  $('#pic5').on("mouseover", function() {
    $('#lip5').show();
  });

  $('#pic5').on("mouseout", function() {
    $('#lip5').hide();
  });
  $('#pic6').on("mouseover", function() {
    $('#lip6').show();
  });

  $('#pic6').on("mouseout", function() {
    $('#lip6').hide();
  });
  $('#pic1').on("mouseover", function() {
    $('#lip1').show();
  });

  $('#pic1').on("mouseout", function() {
    $('#lip1').hide();
  });
  $('#pic2').on("mouseover", function() {
    $('#lip2').show();
  });

  $('#pic2').on("mouseout", function() {
    $('#lip2').hide();
  });
  $('#pic3').on("mouseover", function() {
    $('#lip3').show();
  });

  $('#pic3').on("mouseout", function() {
    $('#lip3').hide();
  });
  $('#pic7').on("mouseover", function() {
    $('#lip7').show();
  });

  $('#pic7').on("mouseout", function() {
    $('#lip7').hide();
  });
  $('#pic8').on("mouseover", function() {
    $('#lip8').show();
  });

  $('#pic8').on("mouseout", function() {
    $('#lip8').hide();
  });
});
