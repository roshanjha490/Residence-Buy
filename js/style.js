
// javascript for choosing property type in search bar 

var a = document.getElementById('extr3');

var b = document.getElementById('extr4');

var c = document.getElementById('dropdwn_form');

a.onclick = function(){
     
    this.style.display = 'none';

    b.style.display = 'inline';    

    c.style.display = 'inline';
}

b.onclick = function(){
     
    this.style.display = 'none';

    a.style.display = 'inline';

    c.style.display = 'none';
}

var d = document.getElementsByClassName('type');

for(var i = 0; i<d.length; i++){

    d[i].onclick = function(){

    var e = document.getElementById('btn1');

        e.textContent = this.textContent;

        b.style.display = 'none';

        a.style.display = 'inline';

        c.style.display = 'none';
    }
}


// javascript for choosing property type in search bar ends here





















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



















    
  //  javascript for  closing map and closing all div 
  
  
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

        opcty_rmve();
        
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

        cln2[0].src = item_img[2].src;

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





$(document).ready(function(){
  $(".owl-carousel").owlCarousel();

  
  document.getElementsByClassName('owl-dots')[0].disabled = 'false';

  document.getElementsByClassName('owl-nav')[0].disabled = 'false';

// $(.owl-dots).ready

  

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})

});










//   javascript for ajax bassed search

var countries = ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi","Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal","Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi (Tuticorin)", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar","Alipurduar", "Bankura", "Birbhum", "Burdwan (Bardhaman)", "Cooch Behar", "Dakshin Dinajpur (South Dinajpur)", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur (West Medinipur)", "Purba Medinipur (East Medinipur)", "Purulia", "South 24 Parganas", "Uttar Dinajpur (North Dinajpur)","Chandigarh","Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi (Chatrapati Sahuji Mahraj Nagar)", "Amroha (J.P. Nagar)", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur (Panchsheel Nagar)", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kanshiram Nagar (Kasganj)", "Kaushambi", "Kushinagar (Padrauna)", "Lakhimpur - Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur", "Saharanpur", "Sambhal (Bhim Nagar)", "Sant Kabir Nagar", "Shahjahanpur", "Shamali (Prabuddh Nagar)", "Shravasti", "Siddharth Nagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi","Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr (Shahid Bhagat Singh Nagar)", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar (Mohali)", "Sangrur", "Tarn Taran","Delhi","Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar","Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"];

 

  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

  autocomplete(document.getElementById("myInput"), countries);

