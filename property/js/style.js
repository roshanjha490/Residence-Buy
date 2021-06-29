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





















    // javascript for site_show Code Here   
  
  var gllry_of_img = document.getElementById('slct_img_');

  var prprts_img = gllry_of_img.getElementsByTagName('img');       
  
  var shwn_img_div = document.getElementById('showing_img');

  var parent_ele = 0;

    var img_nodes = gllry_of_img.querySelectorAll('img');       

    var pkj = img_nodes.length;

    var kkj = img_nodes[parent_ele];

    kkj.style.opacity = '1';

    var rkj = img_nodes[parent_ele].src;

    shwn_img_div.src = rkj;

  for (var i = 0; i < prprts_img.length; i++) {

    prprts_img[i].onclick = function(){    

      //  parent_ele = i;

       shwn_img_div.src = this.src;

       function opcty_rmve(){

        var no_opcty_img = gllry_of_img.getElementsByTagName('img');

        for (let _i = 0; _i < no_opcty_img.length; _i++) {

          no_opcty_img[_i].style.opacity = '0.2';
          
        } 
    }        

        opcty_rmve()
        
        this.style.opacity = '1';  
        
        // alert(parent_ele);
    }       
    
  }


  var frwrd_img = document.getElementById('next_img_');

  frwrd_img.onclick = function(){    

    if(parent_ele >= 18){

      parent_ele = -1;

    }

    function opcty_rmve(){

      var no_opcty_img = gllry_of_img.getElementsByTagName('img');

      for (let _i = 0; _i < no_opcty_img.length; _i++) {

        no_opcty_img[_i].style.opacity = '0.2';
        
      } 
  }        

      opcty_rmve() 
      
     parent_ele++;        

    var rkj = img_nodes[parent_ele].src;

    shwn_img_div.src = rkj;

    var kkj = img_nodes[parent_ele];

    kkj.style.opacity = '1';
     
  }

  var backwrd_img = document.getElementById('prev_img_');

  backwrd_img.onclick = function(){    

   if(parent_ele <= 0){

    parent_ele = pkj;

  }

  function opcty_rmve(){

    var no_opcty_img = gllry_of_img.getElementsByTagName('img');

    for (let _i = 0; _i < no_opcty_img.length; _i++) {

      no_opcty_img[_i].style.opacity = '0.2';
      
    } 
}        

    opcty_rmve() 
      
    parent_ele--;        

   var rkj = img_nodes[parent_ele].src;

   shwn_img_div.src = rkj;

   var kkj = img_nodes[parent_ele];

   kkj.style.opacity = '1';
    
 }

  // javascript for site_show Code Here ends here




































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