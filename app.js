//night mode
var night_status = false;
var night_mode_toggle = function(){
  if (!night_status) {
    $('body').addClass('night');
    $('section').addClass('night');
    $('.jumbotron').addClass('night');
    $('.landing-text').addClass('night');
    $('nav').removeClass('navbar-light');
    $('nav').addClass('navbar-dark');
    $('nav').removeClass('bg-light');
    $('nav').addClass('bg-dark');
    $('.card').addClass('bg-dark');
    night_status = !night_status;
  } else {
    $('body').removeClass('night');
    $('section').removeClass('night');
    $('.jumbotron').removeClass('night');
    $('.landing-text').removeClass('night');
    $('nav').addClass('navbar-light');
    $('nav').removeClass('navbar-dark');
    $('nav').addClass('bg-light');
    $('nav').removeClass('bg-dark');
    $('.card').removeClass('bg-dark');
    night_status = !night_status;
  }
}


//position helix container


$( window ).on('load resize', function() {
  //middle align helix and text in jumbotron
let helix_height = $("#helix-container").height();
let jumbotron_height = $(".jumbotron").height();
let nav_height = $("nav").height();
let landing_height = $(".landing-text").height();
$("#helix-container").css("top", (jumbotron_height-nav_height)/2);
$("#helix-container").css("margin-top",-helix_height/2);
$(".landing-text").css("top", (jumbotron_height-nav_height)/2);
$(".landing-text").css("margin-top",-landing_height/2);

//if screen is too short for helix hide animation
if(helix_height > jumbotron_height){
  $("#helix-container").addClass('hidden');
}




});


//get helix elements
let helix1 = document.getElementsByClassName('base1');
let helix2 = document.getElementsByClassName('base2');
console.log(helix1);
//make functions to add animation class
var move_right_left = function(elem){
  elem.classList.add('move-right-left');
}
var move_left_right = function(elem){
  elem.classList.add('move-left-right');

}

//loop over elements to add animation with delay
let delay = 0.5;

$.each(helix1, function(){
  var elem = $(this);
  $(elem).css('animation-delay', delay+'s');
  $(elem).addClass('move-right-left');
  delay = delay + 0.5;
});

var delay2 = 0.5;
$.each(helix2, function(){
  var elem = $(this);
  $(elem).css('animation-delay', delay2+'s');
  $(elem).addClass('move-left-right');
  delay2 = delay2 + 0.5;
});




// for(let i = 0; i < helix1.length; i++){
//   // helix1[i].css('animation-delay', delay+'s');
//   helix1[i].addClass('move-right-left');
//   delay = delay + i ;
  
// };
 