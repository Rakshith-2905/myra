$(document).ready(function() {
  
  //Add identifying class and count how many images there are and set orders
  var imageno = 0,
      imagesTotal = 0;
  $(".item").each(function(){
    imageno++;
    $(this).attr("data-item", imageno);
    imagesTotal = imageno;
  });
  var order = 1;
  
  $("#next").click(function(){
    $(".item").each(function(){
      var oldO = $(this).attr("data-item"),
          newV = parseInt(oldO)+1;
      $(this).attr("data-item", newV).css("order",newV);
    });
    var onePlus = imagesTotal+1;
    $("*[data-item="+onePlus+"]").attr("data-item",1).css("order",1);
  });
  
  $("#prev").click(function(){
    $(".item").each(function(){
      var oldO = $(this).attr("data-item"),
          newV = parseInt(oldO)-1;
      $(this).attr("data-item", newV).css("order",newV);
    });
    $("*[data-item=0]").attr("data-item",imagesTotal).css("order",imagesTotal);
  });
  
});

$("switch2").click(function(){
    $.ajax({url: "http://127.0.0.1:5000/?mode=mime", success: function(result){
        $("#div1").html(result);
    }});
});