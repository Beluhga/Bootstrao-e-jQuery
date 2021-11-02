$(document).ready(function(){
    var bannerHeight = $ ("#banner").outerHeight(true); //calcula a distancia navbar da nav pro topo q no caso e a altura do bannerHeight, selecionando o banner e utilizando a função outerHeight(true), pega a altura do baner contando as bordas e as margens//
    $("#navbar").affix({      // e para adicionar affix navbar selecionar a navbar e passa os parametros como objetos js offset como top: bannerheight
        offset: {
            top: bannerHeight
        }
    });

    $("#navbar").on("affix-bs.affix", function(){
        $("#banner").css("margin-bottom","52px");
    });

    $("navbar").on("affix-top.bs.affix", function(){
        $("#banner").css("margin-bottom","");
    });

    $("#navbar").on('click', 'a', function(event){ //para criar o evendo de scroll suave//
        event.preventDefault();
        if($(this).attr("href") != undefined){ //se tiver o atributo do href definido//
            var element =$($.attr(this, 'href')); //se tiver o href definido ira procura por um elemento q este referido neste elemento //
            if(element.length > 0){
                $('html, body').animate({
                    scrollTop: $ ($.attr (this, 'href') ). offset().top - 50
                }, 500);
            }
        }
    });


    //ao ser disparado o evento de click, ira procura dentro do iframe container o iframe e add a class Active//
    $(".iframe-container").on("click", function(){
        $(this).children("iframe").addClass("active");
    });

    // e ao reativar o mouse no iframe container ira procura pelo iframe e remove a classe active//

    $(".iframe-container").on("mouseleave", function(){
        $(this).children("iframe").removeClass("active");
    });

    $('.icon-social').tooltip(); //para iniciar o tolltip/
});