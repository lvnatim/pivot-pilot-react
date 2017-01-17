import $ from 'jquery';


function findNextPosition(){
  var nextIndex;
  var currentIndex = $('#FadeContainer').data('activeImage');
  var numImages = $('#FadeContainer > .img-responsive').length - 1;
  if( currentIndex < numImages ){
    nextIndex = currentIndex + 1;
  } else {
    nextIndex = 0;
  }
  return nextIndex;
}

function fadeInNextImage(index=null){
  if(index !== null){
    $('#FadeContainer').attr('data-active-image', index);
    $('#FadeContainer').data('activeImage', index);
    $('#FadeDots').attr('data-active-dot', index);
    $('#FadeDots').data('activeDot', index);
  } else {
    var nextIndex = findNextPosition();
    $('#FadeContainer').attr('data-active-image', nextIndex);
    $('#FadeContainer').data('activeImage', nextIndex);
    $('#FadeDots').attr('data-active-dot', nextIndex);
    $('#FadeDots').data('activeDot', nextIndex);
  }
}

export default function fade(){

  var interval = setInterval(fadeInNextImage, 5000);

  $('#FadeDots .dot').on('click', function(){
    clearInterval(interval);
    var num = $(this).index();
    fadeInNextImage(num);
    interval = setInterval(fadeInNextImage, 5000);
  });

}