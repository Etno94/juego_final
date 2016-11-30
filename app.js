// JavaScript Document
/*
function guardar()
{
	localStorage.setItem("nombre","Pepe");
}

function ver()
{
	alert(localStorage.getItem("nombre"));
}

function saludo()
{
	alert("Hola!");
}

$("#saludo").click(saludo);


window.addEventListener("online", hay);
window.addEventListener("offline", nohay);


function hay()
{
	alert("hay internet");
	}
	
	function nohay()
{
	alert("no hay internet");
	}
	
if(navigator.offline)
{
	alert("no hay señal");
}else{
	alert("hay señal");
}

$("#boton").click(guardar);
$("#botonver").click(ver);
*/
$(document).ready(function(){
   
	//$("#disponible").empty();
	$.getJSON("http://stovial.xyz/mercado.php", function(resultados){
           console.log("hola");
			for(var i=0;i<resultados.length;i++){
			$.each(resultados[i], function(i, campo){
                $("#piedra_recolectar").append(campo);
				
				console.log(campo);
				
            });
			}
        });
	
	$.getJSON("http://stovial.xyz/mercado_madera.php", function(resultados){
            window.alert(tv);
			for(var i=0;i<resultados.length;i++){
			$.each(resultados[i], function(i, campo){
                
				$("#madera_recolectar").append(campo);
				console.log(campo);
				
            });
			}
        });	
	
		
	
		
	$.getJSON("http://stovial.xyz/mercado_hierro.php", function(resultados){
            
			for(var i=0;i<resultados.length;i++){
			$.each(resultados[i], function(i, campo){
                $("#hierro_recolectar").append(campo);
				console.log(campo);
				
            });
			}
        });
		
	$.getJSON("http://stovial.xyz/mercado_carne.php", function(resultados){
            
			for(var i=0;i<resultados.length;i++){
			$.each(resultados[i], function(i, campo){
                $("#carne_recolectar").append(campo);
				console.log(campo);
				
            });
			}
        });
		
	/*	
	$("#submit_disp").click(function(){
        $.getJSON("http://localhost/json/reservar.php", function(resultados){
            for(var i=0;i<resultado.length;i++){
			$.each(resultados[i], function(i, campo){
                $("#lista").append("<p>"+campo+"</p>");
            });
			}
        });
    });*/
	$('#picar_piedra').submit(function(){
		
			
			$.getJSON("http://stovial.xyz/piedra.php", function(resultados){
            
			for(var i=0;i<resultados.length;i++){
			$.each(resultados[i], function(i, campo){
                
				console.log(campo);
				
            });
			}
        });
		
		});
		
	$('#picar_hierro').submit(function(){
		
			
			$.getJSON("http://stovial.xyz/hierro.php", function(resultados){
            
			for(var i=0;i<resultados.length;i++){
			$.each(resultados[i], function(i, campo){
                
				console.log(campo);
				
            });
			}
        });
		
		});
	
	$('#cortar_carne').submit(function(){
		
			
			$.getJSON("http://stovial.xyz/carne.php", function(resultados){
            
			for(var i=0;i<resultados.length;i++){
			$.each(resultados[i], function(i, campo){
                
				console.log(campo);
				
            });
			}
        });
		
		});
	
	$('#form_reserva').submit(function(evento){
		evento.preventDefault();
		localStorage.setItem("cantReserva", $('#input_personas').val());
		localStorage.setItem("fechaReserva", $('#input_fecha').val());
			
			$.ajax({ 
				url: 'http://stovial.xyz/reservar.php',
				data: {
					mesas:$('#input_personas').val(),
				},
				type: 'post',
				success: function(output) {
					
					alert(output+" Presiona en Home para volver al menu.");
	
				}
			});		
	});
	
	$("#verReserva").click(ver);
	function ver()
{
	alert(localStorage.getItem("cantReserva")+" mesas reservadas para el: "+localStorage.getItem("fechaReserva"));
}

	$("#updatePedido").click(setPedido);
	function setPedido()
	{
		localStorage.setItem("pizza1Reserva", $('#pizza1').val());
		localStorage.setItem("pizza2Reserva", $('#pizza2').val());
		localStorage.setItem("pizza3Reserva", $('#pizza3').val());
		localStorage.setItem("empa1Reserva", $('#empa1').val());
		localStorage.setItem("empa2Reserva", $('#empa2').val());
		localStorage.setItem("empa3Reserva", $('#empa3').val());
		localStorage.setItem("beb1Reserva", $('#bebida1').val());
		localStorage.setItem("beb2Reserva", $('#bebida2').val());
		localStorage.setItem("beb3Reserva", $('#bebida3').val());
	}
	$("#endPedido").click(feedPedido);
	function feedPedido()
	{
		alert("Pedido realizado!");
	}
	$("#verPedido").click(verPedido);
	function verPedido()
	{
		alert("Su pedido es: Pizza 1 = "+localStorage.getItem("pizza1Reserva")+" / Pizza 2 = "+localStorage.getItem("pizza2Reserva")+" / Pizza 3 = "+localStorage.getItem("pizza3Reserva")+" / Empanada 1 = "+localStorage.getItem("empa1Reserva")+" / Empanada 2 = "+localStorage.getItem("empa2Reserva")+" / Empanada 3 = "+localStorage.getItem("empa3Reserva")+" / Bebida 1 = "+localStorage.getItem("beb1Reserva")+" / Bebida 2 = "+localStorage.getItem("beb2Reserva")+" / Bebida 3 = "+localStorage.getItem("beb3Reserva"));
	}

	/*$('#form_reserva').submit(function(evento){
	
	evento.preventDefault();
	var personas_reserva= $('#input_personas').val();
	var fecha_reserva= $('#input_fecha').val();
	
	var enviar_reserva="http://localhost/Pizza/reservar.php?jsoncallback=?";
	
	$.getJSON(enviar_reserva, {mesas: personas_reserva}).done(function(respuestaServer){
			console.log(respuestaServer);
			alert("Hola!");
			$.each(respuestaServer, function(i, campo){
                
				alert(campo.feedback);
				//$( ":mobile-pagecontainer" ).pagecontainer( "change", "index.html", { role: "dialog" } );			
            });
			
		})
}
)*/
});
