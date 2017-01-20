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

function incrementMemberIndex(index, numTeamMembers){
  if(index < numTeamMembers){
    return index + 1;
  } else {
    return 0;
  }
}
function decrementMemberIndex(index, numTeamMembers){
  if(index > 0){
    return index - 1;
  } else {
    return numTeamMembers;
  }
}

function hideThenShow(selector){
  selector.addClass('primedRight hidden');
  setTimeout(function(){
    selector.removeClass('hidden');
  }, 1000);
}





export default function fade(){
  $('.primary-menu').addClass('active');
  const numTeamMembers = $('.TeamMember').length - 1;
  var prevMemberIndex = 0;
  var nextMemberIndex = 4;
  var interval = setInterval(fadeInNextImage, 5000);

  $('#FadeDots .dot').on('click', function(){
    clearInterval(interval);
    var num = $(this).index();
    fadeInNextImage(num);
    interval = setInterval(fadeInNextImage, 5000);
  });


  $('#MemberNext').on('click', function(){
    prevMemberIndex = incrementMemberIndex(prevMemberIndex, numTeamMembers);
    nextMemberIndex = incrementMemberIndex(nextMemberIndex, numTeamMembers);
    $('.TeamMember.primedLeft').removeClass('primedLeft');
    $('.TeamMember.prev').removeClass('prev').addClass('primedLeft');
    $('.TeamMember.current').removeClass('current').addClass('prev');
    $('.TeamMember.next').removeClass('next').addClass('current');
    $('.TeamMember.primedRight').removeClass('primedRight').addClass('next');
    hideThenShow($('.TeamMember').eq(nextMemberIndex));
  });

  $('#MemberPrev').on('click', function(){
    prevMemberIndex = decrementMemberIndex(prevMemberIndex, numTeamMembers);
    nextMemberIndex = decrementMemberIndex(nextMemberIndex, numTeamMembers);
    $('.TeamMember.primedRight').removeClass('primedRight');
    $('.TeamMember.next').removeClass('next').addClass('primedRight');
    $('.TeamMember.current').removeClass('current').addClass('next');
    $('.TeamMember.prev').removeClass('prev').addClass('current');
    $('.TeamMember.primedLeft').removeClass('primedLeft').addClass('prev');
    $('.TeamMember').eq(prevMemberIndex).addClass('primedLeft');
  })

  $(window).on('scroll', function(){
    const wPosition = $(window).scrollTop();
    const fPosition = wPosition * 0.1;
    const picPosition = wPosition * 0.025;
    const textPosition = wPosition * -0.05;
    $('#FadeContainer').css({top: fPosition });
    $('.TeamMemberPictureContainer').css({top: picPosition });
    $('.TeamMemberInfoContainer').css({top: textPosition});
  })

}