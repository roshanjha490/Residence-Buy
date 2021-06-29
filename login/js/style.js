 var r_new = document.getElementById('srt_bar1');

  var s_new = document.getElementById('srt_bar2');  

  var rkj_new = document.getElementById('srt_bar3');

  var pkj_new = document.getElementById('srt_bar4');

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


  

  r_new.onclick = function(){

    this.style.borderBottom = '2px solid #fa5b0f';

    this.style.color = '#fa5b0f';

    this.style.transition = '0.2s';

    s_new.style.borderBottom = 'none';

    s_new.style.color = 'black';

    s_new.style.transition = '0.5s';

    t_new.style.visibility = 'visible';

    t_new.style.transition = '0.2s';

    t_new.style.display = 'inline-block';

    w_new.style.visibility = 'hidden';

    w_new.style.transition = '0.2s';    

    w_new.style.display = 'none';

  }

  s_new.onclick = function(){

    this.style.borderBottom = '2px solid #fa5b0f';

    this.style.color = '#fa5b0f';

    this.style.transition = '0.5s';

    r_new.style.borderBottom = 'none';

    r_new.style.color = 'black';

    r_new.style.transition = '0.2s';

    t_new.style.visibility = 'hidden';

    t_new.style.transition = '0.2s';

    t_new.style.display = 'none';

    w_new.style.visibility = 'visible';

    w_new.style.transition = '0.2s';

    w_new.style.display = 'inline-block';

  }

  rkj_new.onclick = function(){

    this.style.borderBottom = '2px solid #fa5b0f';

    this.style.color = '#fa5b0f';

    this.style.transition = '0.2s';

    s_new.style.borderBottom = 'none';

    s_new.style.color = 'black';

    s_new.style.transition = '0.5s';

    t_new.style.visibility = 'visible';

    t_new.style.transition = '0.2s';

    t_new.style.display = 'inline-block';

    w_new.style.visibility = 'hidden';

    w_new.style.transition = '0.2s';    

    w_new.style.display = 'none';

  }

  pkj_new.onclick = function(){

    this.style.borderBottom = '2px solid #fa5b0f';

    this.style.color = '#fa5b0f';

    this.style.transition = '0.5s';

    r_new.style.borderBottom = 'none';

    r_new.style.color = 'black';

    r_new.style.transition = '0.2s';

    t_new.style.visibility = 'hidden';

    t_new.style.transition = '0.2s';

    t_new.style.display = 'none';

    w_new.style.visibility = 'visible';

    w_new.style.transition = '0.2s';

    w_new.style.display = 'inline-block';

  }














// javascript code for form validation

var reg_for_email = /^\b[A-Z0-9._%()-]+@[A-Z]+\.[A-Z]{2,3}\b$/i;

var reg_for_passwrd = /[a-zA-Z0-9.%()-_]{6,100}/i;

var email_value = document.getElementById('emal');

var psswrd_value = document.getElementById('psswrd1');

var check_valid1 = document.getElementById('login_btn_for_validation');

var email_para = document.getElementById('demo1');

var passwrd_para = document.getElementById('demo2');

check_valid1.onclick = function(){

  if (reg_for_email.test(email_value.value)){

    email_para.style.display = 'none';
  
  } 
  
  else{
    
    email_para.style.display = 'inline-block';
  }


  if (reg_for_passwrd.test(psswrd_value.value)){

    passwrd_para.style.display = 'none';
  
  } 
  
  else{
    
    passwrd_para.style.display = 'inline-block';
  }

  
}























var email_sign_up = document.getElementById('emal2');

var psswrd_sign_up = document.getElementById('psswrd2');

var passwrd_para2 = document.getElementById('demo4');

var check_valid2 = document.getElementById('signUpValidation');

var email_para2 = document.getElementById('demo6');

var repsswrd_sign_up = document.getElementById('re_psswrd');

var repasswrd_para2 = document.getElementById('demo5');


var name_sign_up = document.getElementById('nme');

var name_para2 = document.getElementById('demo3');

check_valid2.onclick = function(){

  if (reg_for_email.test(email_sign_up.value)){

    email_para2.style.display = 'none';
  
  } 
  
  else{
    
    email_para2.style.display = 'inline-block';
  }


  if (reg_for_passwrd.test(psswrd_sign_up.value)){

    passwrd_para2.style.display = 'none';
  
  } 
  
  else{
    
    passwrd_para2.style.display = 'inline-block';
  }

  if (repsswrd_sign_up.value === psswrd_sign_up.value){

    repasswrd_para2.style.display = 'none';
  
  } 
  
  else{
    
    repasswrd_para2.style.display = 'inline-block';
  }

  
  if (name_sign_up.value.length < 1){

    name_para2.style.display = 'inline-block';
  
  } 
  
  else{
    
    name_para2.style.display = 'none';
  }

}








  

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



















