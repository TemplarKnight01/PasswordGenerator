$(document).ready(function(){
	$("#generar").click(function(){
		//Variable donde se almacenara la contraseña generada.
  		var new_pass = "";
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
  		//Variables de selección de inclución de caracteres.
  		var select_num = $(".check-num").prop('checked');
  		var select_minus = $(".check-minus").prop('checked');
  		var select_mayus = $(".check-mayus").prop('checked');
  		var select_sims = $(".check-sims").prop('checked');
  		var select_all = $(".check-all").prop('checked');
  		/*
  		//Variables de cantidiad de caracteres minimos de cada tipo, si son seleccionados.
  		var cant_num_minimos;
  		var cant_minus_minimos;
  		var cant_mayus_minimos;
  		var cant_sims_minimos;
  		//Si el tipo es seleccionado el valor minimos será de 1.
  		if(select_num = true){
  			cant_num_minimos = 1;
  		}else{
  			cant_num_minimos = 0;
  		};

  		if(select_minus = true){
  			cant_minus_minimos = 1;
  		}else{
  			cant_minus_minimos = 0;
  		};

  		if(select_mayus = true){
  			cant_mayus_minimos = 1;
  		}else{
  			cant_mayus_minimos = 0;
  		};

  		if(select_sims = true){
  			cant_sims_minimos = 1;
  		}else{
  			cant_sims_minimos = 0;
  		};*/
 		
  		//Función que genera un número al azar, entre los valores que recibe.
  		function Generar_val_caracter(numero_inferior, numero_superior){
  			var val_caracter = Math.floor((Math.random() * (numero_superior - numero_inferior + 1)) + numero_inferior);
  			return val_caracter;
  		};

  		//Función que genera un caracter del arreglo inicial, entre los valores que recibe (Por ahora sin combinaciones).
  		function Generar_caracter(){
  			var caracter_generado;
  			var array_num_menor;
  			var array_num_mayor;

  			if(select_num == false && select_mayus == false && select_minus == false && select_sims == true){
  				var array_num_menor = 0;
  				var array_num_mayor = 18;
  			};

  			if(select_num == false && select_mayus == false && select_minus == true && select_sims == false){
  				var array_num_menor = 19;
  				var array_num_mayor = 44;
  			};

  			if(select_num == false && select_mayus == true && select_minus == false && select_sims == false){
  				var array_num_menor = 45;
  				var array_num_mayor = 70;
  			};

  			if(select_num == true && select_mayus == false && select_minus == false && select_sims == false){
  				var array_num_menor = 71;
  				var array_num_mayor = 80;
  			};

  			caracter_generado = all_caracteres[Generar_val_caracter(array_num_menor, array_num_mayor)];
  			return caracter_generado;
  		};

  		//Función que generar la contraseña con todos los caracteres.
  		function Generar_pass(){
  			for(y=0; y<tamano_pass; y++){
  				//var caracter_generado = all_caracteres[Math.floor(Math.random()*all_caracteres.length)];
  				new_pass += Generar_caracter();
  			};
  			//Imprimiendo en pantalla.
  			$("#passgenerator").val(new_pass);
  		};
  		Generar_pass();
	});
})