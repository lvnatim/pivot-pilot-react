import $ from "jquery";

export default function popupImage(){
  if($('.font-image').length > 0){
    const element = $('.font-image');
    $(window).on('scroll', ()=>{
      var eTop = $('.font-image').offset().top;
      var wTop = $(window).scrollTop();
      if(eTop - wTop < 260){
        $('.font-image').addClass('active');
      } else {
        $('.font-image').removeClass('active');
      }
    })
  } else {
    console.log('nothing found');
  }
}