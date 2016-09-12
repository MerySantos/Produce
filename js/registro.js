$(document).ready(x());
	//verRegistro();
function x(){
	alert($('registro').val);
}
function verRegistro(){
	if ($('#nacio').val()=='nacional') {
		console.log('nacional');
	} 
	else if ($('#extra').val=='extranjero'){
		console.log('extranjero');
	}
	else{
		
	}	
}
