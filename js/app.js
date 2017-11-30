$(document).ready(function(){
	$("#generar").click(function(){
		const valor = "hola";
		var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789@_.-,{}?¡¿=()/&%$#";
  		var contraseña = "";
  		for (i=0; i<10; i++) {
  			contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
  		}
		$("#passgenerator").val(contraseña);
		/*console.log(Math.floor(Math.random()*caracteres.length))*/
	})
})