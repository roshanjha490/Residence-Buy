//  javascript for scrolling effects on navigation, go top and comparelist   

var q_new = document.getElementById('compare_list');

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
            
            q_new.style.opacity = '1';

            q_new.style.transition = '0.5s';

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



















    
  //  javascript for for closing map and closing all div 
  
  
  var e_new1 = document.getElementById('cross2');  
  
  var f_new = document.getElementById('close_all_div');  

  var g_new = document.getElementById('site_show');

  var i_new = document.getElementById('cross1');

  var j_new = document.getElementById('map_div');

  
  e_new1.onclick = function(){
      
      f_new.style.display = 'none';
  
      j_new.style.display = 'none';

  }

  i_new.onclick = function(){
      
    f_new.style.display = 'none';

    g_new.style.display = 'none';

}

  f_new.onclick = function(){
  
    f_new.style.display = 'none';

    g_new.style.display = 'none';

    j_new.style.display = 'none';    
      
    side_nav_bar.style.left = "-200%";

    side_nav_bar.style.transition = '0.2s';
    
} 


  //  javascript for closing map, closing site-show and closing all div ends here

 





    //  javascript for opening address of properties   

    var k_new = document.getElementsByClassName('addrss1');
  
    for (let i = 0; i < k_new.length; i++) {
        
        k_new[i].onclick = function(){
    
            f_new.style.display = 'inline-block';
    
            j_new.style.display = 'inline-block';
    
        }
    }

    //  javascript for opening address of properties ends here
















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


   //  javascript for opening site-show of properties   

   var h_new = document.getElementsByClassName('site_img');

   var img_for_sldsw;
 
   for (var i = 0; i < h_new.length; i++) {
 
     h_new[i].onclick = function(){
       
         g_new.style.display = 'inline';
     
         f_new.style.display = 'inline';  
         
        //  img_for_sldsw = this.firstElementChild.firstElementChild.innerHTML;
 
        //  gllry_of_img.innerHTML = img_for_sldsw;         
 
        //  console.log(gllry_of_img.innerHTML);
     
       }
       
   }  
 
     //  javascript for opening site-show of properties ends here





































    //  javascript for compare list    

    var l_new = document.getElementById('extra10');
  
    var m_new = document.getElementById('cmpr_list_shwn');
    
    var n_new = document.getElementById('close_list');      
  
    var p_new = document.getElementById('shadow_btn');    
  
    var q_new = document.getElementById('compare_list');
  
    l_new.addEventListener("click", open_cmpre_list);
    
    function open_cmpre_list(){
  
        this.style.zIndex = '22';
        
        this.style.opacity = '0';
    
        this.style.transition = '0.5s';
  
        p_new.style.zIndex = '23'; 
        
        p_new.style.opacity = '1';
    
        p_new.style.transition = '0.5s';
    
        m_new.style.height = '300px';
    
        m_new.style.zIndex = '21';
    
        m_new.style.opacity = '1';
    
        m_new.style.bottom = '100%';
    
        m_new.style.transition = '0.5s';
    }
  
    p_new.addEventListener("click", close_cmpre_list_by_btn);
  
    function close_cmpre_list_by_btn(){
  
      this.style.zIndex = '22';
      
      this.style.opacity = '0';
  
      this.style.transition = '0.5s';
  
      l_new.style.zIndex = '23'; 
      
      l_new.style.opacity = '1';
  
      l_new.style.transition = '0.5s';
  
      m_new.style.height = '100%';
    
      m_new.style.zIndex = '20';
    
      m_new.style.opacity = '0';
    
      m_new.style.bottom = '0';
    
      m_new.style.transition = '0.5s';
  }
    
    n_new.addEventListener("click", close_cmpre_list, false);
    
    
    function close_cmpre_list(){
    
        m_new.style.height = '100%';
    
        m_new.style.zIndex = '20';
    
        m_new.style.opacity = '0';
    
        m_new.style.bottom = '0';
    
        m_new.style.transition = '0.5s';
  
        p_new.style.zIndex = '22';
      
        p_new.style.opacity = '0';
   
        p_new.style.transition = '0.5s';
   
        l_new.style.zIndex = '23'; 
          
        l_new.style.opacity = '1';
  
        l_new.style.transition = '0.5s';
    } 
  
  
    var addItemInCompare = document.getElementsByClassName('AddToCompare');

    var acd = 1;    
  
    for (let i = 0; i < addItemInCompare.length; i++) {   
      
      addItemInCompare[i].onclick = function(){

        var item_img = this.parentElement.parentElement.parentElement.querySelectorAll('img');

        var item_name = this.parentElement.parentElement.parentElement.querySelectorAll('.name1');

        // console.log(item_name[0].textContent);
           
        var itm = document.getElementById("item_to_compare");

        var cln = itm.cloneNode(true);

        cln.style.display = 'inline-block';

        var cln2 = cln.querySelectorAll('img');

        cln2[0].src = item_img[0].src;

        var cln3 = cln.querySelectorAll('.cmprName');

        // alert(cln3[0].textContent);

        cln3[0].textContent = item_name[0].textContent;

        document.getElementById("compare_item_add_here").appendChild(cln);

        this.style.display = 'none';

        var acd1 = acd++;

        document.getElementById('p_no').innerHTML = acd1;

        document.getElementById('p_no1').innerHTML = acd1;

      }
    
    }

    var removeItemInCompare = document.getElementsByClassName('cmprName');

    for (let i = 0; i < removeItemInCompare.length; i++) {

      removeItemInCompare[i].onclick = function(){
          
        alert(true);  

      }
      
    }
  
      //  javascript for compare list ends here





















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



f_new.onclick = function(){
  
  f_new.style.display = 'none';

  g_new.style.display = 'none';

  j_new.style.display = 'none';    
    
  side_nav_bar.style.left = "-200%";

  side_nav_bar.style.transition = '0.2s';
  
} 


// javascript code for side navigation ends here