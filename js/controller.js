$(document).ready(function(){

 var img = [
'img/22.jpg',
'img/23.jpg',
'img/24.jpg',
'img/25.jpg',
'img/26.jpg'
] 

var   total = 0,
      move = 0,
      count = 1,
      first_card=null,
      secn_card=null ;

var stop_fa = false ,
  stop_fc = true,
  stop_time = true;


var $card = $('.card'),
  $board = $('.board'),
  $start = $('.start');
  
var card_id=0 
 for(var i=1;i<6;i++){
    $('.room').append(' <div class="card" data-id="'+card_id+'"><div class="front face"></div><div  data-bid="0" class="back face" ></div></div>')
    card_id++;
  }
    $('.room').append('<br>');
  
$start.click(function(){
  total = 0;
  stop_fa = true;
  stop_fc = false;
  $('.card').removeClass('flip');
  $start.hide();
  randomIMG();
})


$board.hide();
randomIMG();
flip_click();

function randomIMG(){
  
  var c_array = [1,2,3,4,5];
  var c_length = c_array.length;
  var $card = $('.card');
  

  $card.each(function(){
    var r_id = Math.floor(Math.random() * (c_length - 1));  
    
    var temp = c_array[r_id];                 
    c_array[r_id]= c_array[c_length - 1];
    c_array[c_length - 1] = temp;


    c_length--                       
    
    $(this).find('.back').css({               
      'background-image' : 'url('+img[temp-1]+')',
      'background-size': '100%'
    })
    

    $(this).find('.back').attr('data-bid',temp)   
  })

  return 0;
}



function flip_click(){
   total = 0;  
   move = 0;
   count = 1;
   var i =0
    first_card=null;
    secn_card=null ;
  var $card = $('.card');
  
  $card.find('.front').click(function(){

    if(stop_fc == true){
      return 0;
    }
    
  $(this).parent('.card').toggleClass('flip');
  move++;
  $('.c_move').html(move);

  if(count == 1){
    first_card = $(this).parent('.card').find('.back').attr('data-bid');
  }
  else if(count == 2){
    secn_card = $(this).parent('.card').find('.back').attr('data-bid');
  }
  if(stop_fc){
    return
  }
count++
    
  });

  var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }

}

});

