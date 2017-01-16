// import $ from "jquery";
// import * as ScrollMagic from "scrollmagic";

// export default function scrollEvents(){
//   const SLIDE_HEIGHT = 600;
//   var index = 0;
//   var controller = new ScrollMagic.Controller();
//   const $firstSlide = $('#ShowcasePiece0');
//   const $secondSlide = $('#ShowcasePiece1');
//   const $thirdSlide = $('#ShowcasePiece2');
//   const $ShowcaseTitle = $('.ShowcaseTitle');

//   $firstSlide.addClass('active');

//   function setIndex(index){
//     index = index;
//   }

//   function setActiveCase(domSelector){
//     $('.ShowcasePiece').not(domSelector).removeClass('active');
//     domSelector.addClass('active');
//   }

//   function triggerCaseAppear(triggerElement, slideHeight, selector, index){
//     return new ScrollMagic.Scene({
//       triggerElement: triggerElement,
//       offset: slideHeight/2,
//       duration: slideHeight, 
//     })
//     .on('enter', function(event){
//       setActiveCase(selector);
//       setIndex(index);
//     })
//     .setPin(triggerElement, {pushFollowers: false})
//     .addTo(controller); 
//   }

//   var transitionOne = triggerCaseAppear('#ShowcasePiece0', SLIDE_HEIGHT, $firstSlide, 0);
//   var transitionTwo = triggerCaseAppear('#ShowcasePiece1', SLIDE_HEIGHT, $secondSlide, 1);
//   var transitionThree = triggerCaseAppear('#ShowcasePiece2', SLIDE_HEIGHT, $thirdSlide, 2);

//   new ScrollMagic.Scene({
//     triggerElement: '.ShowcasePiece:nth-of-type(1)',
//     offset: SLIDE_HEIGHT/2,
//     duration: SLIDE_HEIGHT*3, 
//   })
//   .setPin('.ShowcaseTitle', {pushFollowers: false})
//   .addTo(controller); 
// }