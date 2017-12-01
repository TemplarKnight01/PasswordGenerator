$(document).ready(function(){
	$("#generar").click(function(){
		/*
		var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789@_.-,{}?¡¿=()/&%$#";
  		var contraseña = "";
  		for (i=0; i<10; i++) {
  			contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
  		}*/
  		var alfa_caracteres = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
		new_pass = "";
		for (y=0;y<4;y++){
			new_pass += alfa_caracteres[Math.floor(Math.random()*alfa_caracteres.length)];
		}
		$("#passgenerator").val(new_pass);
	})
})