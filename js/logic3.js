$(document).ready(function(){

 var img = ['img/22.jpg',
'img/23.jpg',
'img/24.jpg',
'img/25.jpg',
'img/26.jpg'
]	

var	 total = 0,
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
 for(i=0; i<2; i++){
	for(j=0; j<5; j++){
		$('.room').append('	<div class="card" data-id="'+card_id+'"><div class="front face"></div><div  data-bid="0" class="back face" ></div></div>')
		card_id++;
		}
		$('.room').append('<br>')
	}




$start.click(function(){
	total = 0;
	stop_fa = true;
	stop_fc = false;
	stop_time = false;
	$('.card').removeClass('flip');
	$start.hide();
	randomIMG();
})



$board.hide();
randomIMG();
flip_click();



function randomIMG(){
	
	var c_array = [1,1,2,2,3,3,4,4,5,5];
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
			'background-repeat' : 'no-repeat',
			'background-size': '100%'
		})

		$(this).find('.back').attr('data-bid',temp)		
	})

	return 0;
}





function flip_click(){  
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
		document.getElementById('click-music').play();
	document.getElementById('click-music').volume =0.1;
	}
	else if(count == 2){
		secn_card = $(this).parent('.card').find('.back').attr('data-bid');
	}

	if(first_card == secn_card){

		setTimeout(function(){
		$('[data-bid="'+first_card+'"]').parent('.card').css('opacity','0');
		document.getElementById('lose-music').volume =0;
		},300);
		document.getElementById('music').play();

	}
	
count++
		if(count>2){
			console.log(first_card,secn_card)
			count = 1;
			document.getElementById('lose-music').play();
			document.getElementById('lose-music').volume =1;
			setTimeout(function(){
			first_card=null;
			secn_card=null;
			$card.removeClass('flip');
		},400)
			
	}		
	});
}

});