

//  javascript for scrolling effects on navigation, go top and comparelist  

var z_new = document.getElementById('scroll_to_top');

$(document).ready(function(){

    $(window).scroll(function() {
        var height = $(window).scrollTop();
    
        if(height  > 1) {
            
            var h = document.getElementById('nav_bar');

            h.style.backgroundColor = '#eaeaea';

            h.style.transition = '0.5s';

            var i = document.getElementById('extr6');

            i.style.color = 'black'; 

            i.style.transition = '0.5s';

        }

        else{

            var h = document.getElementById('nav_bar');

            h.style.backgroundColor = 'transparent';

            h.style.transition = '0.5s';

            var i = document.getElementById('extr6');

            i.style.color = 'white';

            i.style.transition = '0.5s';

        }

        if(height  > 500) {

            z_new.style.opacity = '1';

            z_new.style.transition = '0.5s';


        }

        if(height  > 300) {

            z_new.style.opacity = '1';

            z_new.style.transition = '0.5s';


        }

        else{

            z_new.style.opacity = '0';

            z_new.style.transition = '0.5s';

        }
    });
  
  });

  //  javascript for scrolling effects on navigation, go top and comparelist ends here


















  

// javascript code for side navigation starts here

var open_side_nav = document.getElementById('extr6');

var side_nav_bar = document.getElementById('side_navigation'); 

open_side_nav.onclick = function(){
      
      side_nav_bar.style.left = "0%";

      side_nav_bar.style.transition = '0.2s';

      f_new.style.display = 'inline-block';
}


$(document).ready(function(){
  $('#side_extra_link').hide();
  $('#home_link2').hide();
  $("#home_link").click(function(){

    $('#home_link2').toggle();
   
    $("#side_extra_link").show(1000);

     $(this).hide();
  });
  $("#home_link2").click(function(){

    $('#home_link').show();
   
    $("#side_extra_link").hide(1000);

     $(this).hide();
  });
});




$(document).ready(function(){
  $('#page_link2').hide();
  $('#side_extra_link2').hide();
  $("#page_link").click(function(){

    $('#page_link2').show();
   
    $("#side_extra_link2").show(1000);

     $(this).hide();
  });
  $("#page_link2").click(function(){

    $('#page_link').show();
   
    $("#side_extra_link2").hide(1000);

     $(this).hide();
  });
});

  
var f_new = document.getElementById('close_all_div');  


f_new.onclick = function(){
  
  f_new.style.display = 'none';
    
  side_nav_bar.style.left = "-200%";

  side_nav_bar.style.transition = '0.2s';
  
} 


// javascript code for side navigation ends here


