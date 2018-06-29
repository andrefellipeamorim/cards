$(document).ready(function(){
	$('.card').mouseover(function(){
		var id = this.id;		
		$('#'+id).addClass('cardtop');		
	});

	$('.card').mouseout(function(){
		var id = this.id;
		$('#'+id).removeClass('cardtop');
	});

	$('.fundo').mouseover(function(){
		$('#card2').addClass('cardtop');
	});

	$('.fundo').mouseout(function(){
		$('#card2').removeClass('cardtop');
	});	

	$('#card-sm-1').mouseover(function(){
		$('#card-sm-2').addClass('cardmid');
	});

	$('#card-sm-1').mouseout(function(){
		$('#card-sm-2').removeClass('cardmid');		
	});
});

