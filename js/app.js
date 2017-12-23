$(document).ready(function(){
	$("#generar").click(function(){
		// Definiendo arreglo de caracteres.
		//De 0 a 18 simbolos.
		//De 19 a 44 minúsculas.
		//De 45 a 70 mayúsculas.
		//De 71 a 80 números.
  		var all_caracteres = ["#","$","=","@","-","_","/","%","&","+","<",">","!","¡","*","(",")","[","]",
  							"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  							"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  							"0","1","2","3","4","5","6","7","8","9"];
  		//Definiendo tamaño de contraseña a generar, por "select" en index.
  		var tamano_pass = $("#selector_tamano").val();
  		//Variable donde se almacenara la contraseña generada.
  		var new_pass = "";
  		//Variables de selección de inclución de caracteres.
  		var select_num = $(".check-num").prop('checked');
  		var select_minus = $(".check-minus").prop('checked');
  		var select_mayus = $(".check-mayus").prop('checked');
  		var select_sims = $(".check-sims").prop('checked');
  		var select_all = $(".check-all").prop('checked');

  		//Función que generar la contraseña con todos los caracteres.
  		function Generar_pass(){
  			for(y=0; y<tamano_pass; y++){
  				var caracter_generado = all_caracteres[Math.floor(Math.random()*all_caracteres.length)];
  				new_pass += caracter_generado;
  			}
  			//Imprimiendo en pantalla.
  			$("#passgenerator").val(new_pass);
  		}

  		Generar_pass();
	});
})