$(document).ready(function(){
 $(".page").hover(function(){
    $(this).fadeTo('fast', 0.25);
  }, function() {
  $(this).fadeTo('fast', 1);

  });
  });

  $(document).ready(function(){
  $('.page').click(
    function(){
  $(this).change("background-color" , "purple");
});
});

$(document).ready(function(){
$('.page').click(
  function(){
$(this).change("text" , "Clicked!");
});
});


    /*$(this).fadeToggle(
    function(){
      $(".size").change("background-color", "purple");

    $(".size").click(
      function(){
    $(this).text("Clicked!");
      });
    });*/
