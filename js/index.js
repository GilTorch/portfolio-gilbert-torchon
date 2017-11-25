
$(document).ready(
  function(){
      
    $("header .forScroll").click(function(){
      $("#button-scroll-up").show(300,"linear");
    })
    
     $("#button-scroll-up").click(function(){
             $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 1000);
      $(this).hide(300);
    })
    createAllProgressBar();
    $("#resume-button").click(function(){
      $("#resume").slideToggle();
    })

    $("#navbar-id").click(function(){
      $("#navbar-button-group").slideToggle();
    })
    
    $("#button-skills").click(function(){
        $("#skills").scroll();
        $("#skills").hide().show('1200');
        createAllProgressBar();
          $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
    })

    $("#download-resume-button").mouseover(function(){
      //alert("V");
        $("#resume").css("background-color","rgba(255,255,255,0.1)");

    })

    $("#download-resume-button").mouseout(function(){
      //alert("V");
        $("#resume").css("background-color","");

    })
    
    $("#button-contact").click(function(){
          $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
    })
   
        $("#button-portfolio").click(function(){
          $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
    })
    
            $("#button-about").click(function(){
          $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
    })

//=====progressbar=====



    function creerAnimerProgressBar(barId,i,level){
      //alert("Fresco");
      i=0;

      function createProgressBar(){
        i++;
        $(barId).progressbar({
        value:i
        });

        if(i<level)
        {
            setTimeout(createProgressBar,25);
        }
      }

      createProgressBar();

  }

function createAllProgressBar(){
  creerAnimerProgressBar("#barreHTML",0,98);
  creerAnimerProgressBar("#barreCSS",0,85);
  creerAnimerProgressBar("#barreJavascript",0,65);
  creerAnimerProgressBar("#barreJavascript",0,65);
  creerAnimerProgressBar("#barreBootstrap",0,65);
  creerAnimerProgressBar("#barreJQuery",0,65);
  creerAnimerProgressBar("#barreC",0,65);
  creerAnimerProgressBar("#barreActionscript",0,80);
  creerAnimerProgressBar("#barreMySQL",0,75);
  creerAnimerProgressBar("#barreJavascript",0,75);
  creerAnimerProgressBar("#barrePHP",0,80);
  creerAnimerProgressBar("#barreJQueryUI",0,80);
}
    //
    // $("#barreJavascript").progressbar({
    // value:65
    // });
    // $("#barreBootstrap").progressbar({
    // value:65
    // });
    // $("#barreJQuery").progressbar({
    // value:65
    // });
    // $("#barreC").progressbar({
    // value:65
    // });
    // $("#barreActionscript").progressbar({
    // value:80
    // });
    // $("#barreMySQL").progressbar({
    // value:75
    // });
    // $("#barreCss").progressbar({
    // value:75
    // });
    // $("#barrePHP").progressbar({
    // value:70
    // });


  }




)