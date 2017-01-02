(function($){
  $(function(){


    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.materialboxed').materialbox();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('#textarea1').trigger('autoresize');
  }); // end of document ready
})(jQuery); // end of jQuery name space

var width_ = 0;


$(document).ready(function(){

      width_ = $(window).width();

      if(width_ >= 982){
        document.getElementById('boton_bar').style.display = 'none';
      }
      else if(width_ < 982){
        document.getElementById('boton_bar').style.display = '';
      }


      $('#cancel_button').click(function(){
        document.forms["form_contacto"]["first_name"].value = "";
        document.forms["form_contacto"]["last_name"].value = "";
        document.forms["form_contacto"]["email"].value = "";
        document.forms["form_contacto"]["textarea1"].value = "";
      });

      $('.button-collapse').sideNav();
});





$(window).resize(function(){
  width_ = $(window).width();
  if(width_ >= 982){
    document.getElementById('boton_bar').style.display = 'none';
  }
  else if(width_ < 982){
    document.getElementById('boton_bar').style.display = '';
  }

});

var load;

function loading(){
  load = setTimeout(showPage, 2000);
}


function showPage() {
  document.getElementById("loader").style.display = 'none';
  document.getElementById("pagina").style.display = 'block';
}
