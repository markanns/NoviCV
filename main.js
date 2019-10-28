//going down slow to specific section on page
$(' ul li a').on('click', function (event) {
  var $anchor = $(this);
  $('html, body').animate({
    scrollTop: $($anchor.attr('href')).offset().top + "px"
  }, 1500);
  event.preventDefault();
});

//validation input field
$('#submit').click(function (e) {
  e.preventDefault();
  var first_name = $('#name').val();
  var email = $('#email').val();
  var subject = $('#sub').val();
  var msg = $('#message').val();

  $(".error").remove();

  if (first_name.length < 1) {
    $('#name').after('<span class="error" >Ovo polje je obavezno</span>');
    return false;
  }
  else {
    var reg = /^[a-zA-ZČčĆćĐđŠšŽžАаБбВвГгДдЂђЕеЖжЗзИиЈјКкЛлЉљНнмМЊњОоПпРрСсТтЋћУуФфХхЦцчЧЏџШш\s]+$/;
    var validName = reg.test(first_name);
    if (!validName) {
      $('#name').after('<span class="error">Unesite ime u odgovarajucem formatu</span>');
      return false;
    }
  }
  if (email.length < 1) {
    $('#email').after('<span class="error">Ovo polje je obavezno</span>');
    return false;
  } else {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = re.test(email);
    if (!validEmail) {
      $('#email').after('<span class="error">Unesite odgovarajucu email adresu</span>');
      return false;
    }

  }
  if (subject.length < 1) {
    $('#sub').after('<span class="error">Ovo polje je obavezno</span>');
    return false;
  }
  if (msg.length < 1) {
    $('#message').after('<span class="error">Ovo polje je obavezno</span>');
    return false;
  }


  //jquery for email 
  var emailid = "m.kostresevic@hotmail.com"

  jQuery.post("sendEmail.php", {
    name: $('#name').val(),
    email: $("#email").val(),
    subject: $("#sub").val(),
    message: $("#message").val(),

    emailid: emailid
  }, function (data, textStatus) {
    if (data == 1) {
      $("#submit").after('<span class="error">Email nije poslat</span>');
      e.preventDefault();
    }
    else {
      $("#submit").after('<span class="success">Email poslat</span>');
      e.preventDefault();
    }
  });

  $('#name').val("");
  $("#email").val("");
  $("#sub").val("");
  $("#message").val("");
  $('#submit').attr('disabled', true);

});
//code for arrow to go to top slow
$(document).ready(function () {
  var offset = 220;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.goUp').fadeIn(duration);
    } else {
      $('.goUp').fadeOut(duration);
    }
  });

  $('.goUp').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })
});



var x = window.matchMedia("(max-width: 400px)");

function myFunction(x) {
  if (x.matches) {
     document.getElementById('swc').style.display='block';
    document.getElementById('div').style.display='none';
    document.getElementById('addBefore').style.display='none';
    document.getElementsByClassName('heading')[0].style.display='none';
    document.getElementsByClassName('heading')[1].style.display='none';
    document.getElementsByClassName('heading')[2].style.display='none';
    document.getElementsByClassName('goUp')[0].style.display='none';
    document.getElementsByClassName('education')[0].style.display='none';
    document.getElementsByClassName('section-book')[0].style.display='none';
    document.getElementsByClassName('icons')[0].style.display='none';

    $(window).scroll(function () {
      $('.sideAnimation').removeAttr('data-aos');
    });
  }
}
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


//script for mobile view cube

var swiper= new Swiper('.swiper-container',{
  effect:'cube',
  
  autoHeight:true,
  grabCursor	:false, 
  simulateTouch: true,      
  cubeEffect:{
    shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
  }
})