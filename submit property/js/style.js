var a = document.getElementById('extr3');

var b = document.getElementById('extr4');

var c = document.getElementById('dropdwn_form');  
  
  var a_new = document.getElementById('image_gallery');

  var b_new = document.getElementById('main_img');
  
  var e_new = document.getElementById('cross1');
  
  var e_new1 = document.getElementById('cross2');
  
  var f_new = document.getElementById('close_all_div');
  
  var g_new = document.getElementById('site_show');
  
  var h_new = document.getElementsByClassName('site_img');

  var l_new = document.getElementById('extra10');
  
  var m_new = document.getElementById('cmpr_list_shwn');
  
  var n_new = document.getElementById('close_list');  

  var o_new = document.getElementById('slide');      

  var p_new = document.getElementById('shadow_btn');    

  var q_new = document.getElementById('compare_list');

  var r_new = document.getElementById('srt_bar1');

  var s_new = document.getElementById('srt_bar2');

  var t_new = document.getElementById('frm_page1');

  var w_new = document.getElementById('frm_page2');

  var z_new = document.getElementById('scroll_to_top');


  
$(document).ready(function(){

    $(window).scroll(function() {
        var height = $(window).scrollTop();

        if(height  > 100) {

            z_new.style.opacity = '1';

            z_new.style.transition = '0.5s';


        }

        else{

            z_new.style.opacity = '0';

            z_new.style.transition = '0.5s';
        }
    });
  
  });








  


  

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
    
  side_nav_bar.style.left = "-200%";

  side_nav_bar.style.transition = '0.2s';

  this.style.display = 'none';
  
} 


// javascript code for side navigation ends here





















// javascript code for form validation

  
var submisson = document.getElementById('registerForm');

var title = document.getElementById('title');

var regFor_title = /[a-b0-9]/i;

var price = document.getElementById('price');

var regFor_price = /^[0-9]{3,10}/;

var area = document.getElementById('area');

var regFor_area = /[0-9a-b]/i;

var Address = document.getElementById('Address');

var regFor_Address = /[a-b]/i;

var PostalCode = document.getElementById('PostalCode');

var regFor_PostalCode = /[a-b]/i;

var Name = document.getElementById('Name');

var regFor_Name = /[a-b]/i;

var E_mail = document.getElementById('E_mail');

var regFor_E_mail = /^\b[A-Z0-9._%()-]+@[A-Z]+\.[A-Z]{2,3}\b$/i;

submisson.onclick = function(){

  if(!regFor_title.test(title.value)){    

    title.classList.add('your-class');

    title.placeholder = '* Enter a valid Title';

    title.value = '';

  }

  if(!regFor_price.test(price.value)){    

    price.classList.add('your-class');

    price.placeholder = '* Enter a valid Price';

    price.value = '';

  }

  if(!regFor_area.test(area.value)){    

    area.classList.add('your-class');

    area.placeholder = '* Enter a valid Area';

    area.value = '';

  }
     
  
  if(!regFor_Address.test(Address.value)){    

    Address.classList.add('your-class');

    Address.placeholder = '* Enter a valid Address';

    Address.value = '';

  }

  if(!regFor_PostalCode.test(PostalCode.value)){    

    PostalCode.classList.add('your-class');

    PostalCode.placeholder = '* Enter a valid Postal Code';

    PostalCode.value = '';

  }

  if(!regFor_Name.test(Name.value)){    

    Name.classList.add('your-class');

    Name.placeholder = '* Enter a valid Name';

    Name.value = '';

  }

  
  if(!regFor_E_mail.test(E_mail.value)){    

    E_mail.classList.add('your-class');

    E_mail.placeholder = '* Enter a valid E-mail Address';

    E_mail.value = '';

  }
    
}