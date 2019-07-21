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
