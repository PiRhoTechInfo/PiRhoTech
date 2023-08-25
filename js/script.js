new WOW().init();

$('.menu ul li a').click(function () {
    $('.menu ul li a').removeClass('active');
    $('this').addClass('active');

  }
  );

  $(window).scroll(function(){
    var value= $('html').scrollTop();
    
    if(value>87)
    {
        $('.menu').addClass('fixedMenu');
    }
    else
    {
        $('.menu').removeClass('fixedMenu');
    }

    if(value>194)
    {
        $('.headText h1').addClass('hinge');
        $('.headText h3').addClass('hinge');
    }

    if(value>430)
    {
        $('.menu').addClass('menuColor');
    }
    else
    {
        $('.menu').removeClass('menuColor');
    }

  });