<?php
$reserva = $_POST["mesas"];


if($link = mysqli_connect("localhost","jw000188_almacen","gaVImulo43","jw000188_almacen"))
{
	//echo "se conecto";
	$consulta="SELECT disp_local FROM locales WHERE id_local=1";
	$respuesta = mysqli_query($link,$consulta);	
	$obj = mysqli_fetch_object($respuesta);

	
	if(($obj->disp_local - $reserva)>=0)
	{
		$disp = $obj->disp_local - $reserva;
		$restar_mesas="UPDATE locales SET disp_local = '$disp' WHERE id_local=1";
		if(mysqli_query($link,$restar_mesas))
		{
			/*
			$matriz[]= array('feedback'=>'Reserva hecha!');	
			$matriz_json = json_encode($matriz);
			echo $_GET['jsoncallback'].$matriz_json;
			*/
			echo "Se ha realizado la reserva correctamente!";

		}
		else{
			$matriz[]= array('feedback'=>'Ocurrio un error!'
			);	
			$matriz_json = json_encode($matriz);
			echo $_GET[‘jsoncallback’] . ‘(‘ . $matriz_jason . ‘);
		}
	}
	else
	{
		$matriz[]= array('feedback'=>'No hay lugar!'
			);	
			$matriz_json = json_encode($matriz);
			echo $_GET[‘jsoncallback’] . ‘(‘ . $matriz_jason . ‘);
		}
	
}
else
{
	echo json_encode("No se conecto");
}

?>