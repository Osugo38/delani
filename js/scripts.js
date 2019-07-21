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


/*
$('#pro4').on("mouseover" , function(){
        $('.probox').show();
     });

    $('#pro4').on("mouseout", function(){;
       $('#probox').hide();
     });



$(document).ready(function(){
  $(".wrap1").mouseover(function(){
    $("#overlay1").show();
  }).mouseout(function(){
    $("#overlay1").hide();
  });
});

$(document).ready(function(){
  $(".wrap2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});

$(document).ready(function(){
  $(".wrap3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});

$(document).ready(function(){
  $(".wrap4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});


*/
