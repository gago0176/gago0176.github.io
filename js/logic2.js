$(document).ready(function() {
    $('.box-calculation').attr('disabled', 'true'); 
    $('.box-result').attr('disabled', 'true'); 
    $('.box-button button.times').attr('disabled', 'true'); 
    $('.box-button button.divide').attr('disabled', 'true');
    $('.box-button button.sqrt').attr('disabled', 'true'); 
    $('.box-button button.pow').attr('disabled', 'true'); 
    $('.box-button button.gt').attr('disabled', 'true');  
    $('.box-button button.equal').attr('disabled', 'true');
     
});

//nut so
$('.box-button button.number').click (function() {
    $char = $(this).html(); 
    $value_calculation = $('.box-calculation').val(); 
    $('.box-calculation').val($value_calculation + $char); 
    $('.box-button button.operation').removeAttr('disabled'); 
    $('.box-button button.equal').removeAttr('disabled'); 
    $('.box-button button.pow').removeAttr('disabled'); 
    $('.box-button button.gt').removeAttr('disabled');  
    $('.box-button button.sqrt').removeAttr('disabled');
});

//nut .
$('.box-button button.dot').click (function() {
    $char = $(this).html(); 
    $value_calculation = $('.box-calculation').val(); 
    $('.box-calculation').val($value_calculation + $char); 
    $('.box-button button.operation').attr('disabled', 'true'); 
    $(this).attr('disabled', 'true'); 
});

//nut CE
$('.box-button button.refresh').click (function() {
    $('.box-calculation').val(''); 
    $('.box-result').val(''); 
});

//nut DEL
 $('.box-button button.del').on('click', function() {
    $string = $('.box-calculation').val(); 
    $('.box-calculation').val($string.substring(0, $string.length - 1)); 
});
 
 //nut +-*/
    $('.box-button button.operation').click (function() {
    $char = $(this).html(); 
    $value_calculation = $('.box-calculation').val(); 
    $('.box-calculation').val($value_calculation + $char); 
    $('.box-button button.times').attr('disabled', 'true');
    $('.box-button button.divide').attr('disabled', 'true'); 
    $('.box-button button.dot').removeAttr('disabled'); 
});
 
//nut can
$('.box-button button.sqrt').click (function(){
	x = $('.box-calculation').val();
	$('.box-result').val(Math.sqrt(x));
	$('.box-button button.equal').attr('disabled', 'true');
});

//nut binh phuong
$('.box-button button.pow').click (function(){
	x = $('.box-calculation').val();
	$('.box-result').val(Math.pow(x,2));
	$('.box-button button.equal').attr('disabled', 'true');
});

//nut N!
$('.box-button button.gt').click (function(){
	n = 1;
	x = $('.box-calculation').val();
	for(var i=1;i<=x;i++){
		n*=i;
	}
	$('.box-result').val(n);
	$('.box-button button.equal').attr('disabled', 'true');
});

//nut =
$('.box-button button.equal').click (function() {
    $result = $('.box-calculation').val(); 
    $('.box-result').val(eval($result)); 
});

//nut theme
$('.one button.next').click (function(){
    $('.calculator').css({ 'width': '300px', 'height': 'auto','margin': '20px auto',
            'padding': '10px',
            'border': '1px solid #666',
            'border-radius': '4px'});
    $('.box-button button.number').css({'background-color': '#428bca'});
    $('.box-button button.operation').css({'background-color': '#5cb85c'});
    $('.box-button button.refresh').css({'background-color': '#d9534f'});
    $('.box-button button.del').css({'background-color': '#f0ad4e'});
    $('.box-button button.equal').css({'background-color': '#428bca'});
    $('body').css({'background-image': 'url(img/123.gif)'});

});