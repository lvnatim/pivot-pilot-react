import $ from "jquery";
export default function scroll(){

$(document).ready(function(){
  $('#PortfolioContainer').scroll(function(){

    const containerTop = $(this).position().top;
    const insideTop = $(this).scrollTop();

    if($('body').scrollTop() !== containerTop){
      $('body').animate({scrollTop: containerTop}, '1000');
    } else {
      $('body').stop();
    }


    $('.PortfolioPiece').each(function(){
      if(Math.abs($(this).position().top) < 192){
        if(!$(this).hasClass('active')){
          $('#drop').attr('data-position', $(this).index());
          $('#drop').addClass('animate');
          setTimeout(function(){
            $('#drop').removeClass('animate');
          },250);
        }
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }

    })

  });


  $('.dot:not(.drop)').on('click',function(){
    const eHeight = $('.PortfolioPiece').eq($(this).data('slide')).height() + 48;
    const totalScroll = $(this).data('slide') * eHeight;
    $('#PortfolioContainer').animate({scrollTop: totalScroll});
  });

});

}