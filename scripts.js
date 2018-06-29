$(document).ready(function(){

	//Funções referentes ao Deck principal. ->

	$('.card').mouseover(function(){
		var id = this.id;		
		$('#'+id).addClass('cardtop');		
	});

	$('.card').mouseout(function(){
		var id = this.id;
		$('#'+id).removeClass('cardtop');
	});

	/*Esta função não é necessária do meu ponto de vista, 
	fiz apenas para que o lay-out fique sempre como pedido na imagem -> */

	$('.fundo').mouseover(function(){
		$('#card2').addClass('cardtop');
	});

	$('.fundo').mouseout(function(){
		$('#card2').removeClass('cardtop');
	});

	//Funções referentes ao Deck horizontal. ->	

	$('#card-sm-1').mouseover(function(){
		$('#card-sm-2').addClass('cardmid');
	});

	$('#card-sm-1').mouseout(function(){
		$('#card-sm-2').removeClass('cardmid');		
	});
});

