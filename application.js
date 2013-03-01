  // set picture shown to be always 2nd in postion of the 3 
  // animate the picture
  // followed by removing the first picture
  // append it to the end

$(document).ready( function() {
  //move last li child to the front of the first li child
  $(".frames li:first-child").before($(".frames li:last-child"));
  //move the 'frame' position to show the 2nd pic in the position of 3
  $(".frames").css('left' , "-360px");

  $("#next_frame").click(function(){
    //runs the animation, move it right by 360px because that's the size of the img
    $(".frames").animate({left: "-=360px" }, "slow", function(){
      //put the first child li after the last child  li
      $(".frames li:last-child").after($(".frames li:first-child"));
      //the pics have shifted so we need to 'refocus' the frame to show the middle pic always
      $(".frames").css('left' , "-360px");
    }); 
  });  

  $("#previous_frame").click(function(){
    //runs the animation, move it left
    $(".frames").animate({left: "+=360px" }, "slow", function(){
      //put the last child li before the first child li
      $(".frames li:first-child").before($(".frames li:last-child"));
      //again need to refocus the frame
      $(".frames").css('left', '-360px');
    });
  });  
});
