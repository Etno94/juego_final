<?php
//CHEQUEAR LUGARES LIBRES
//conexion a base de datos
if($link = mysqli_connect("localhost","jw000188_almacen","gaVImulo43","jw000188_almacen"))
{
	//echo "se conecto";
	$consulta="SELECT * FROM locales WHERE id_local=1";
	$respuesta = mysqli_query($link,$consulta);	
	
	$matriz = array();
	
	while($obj = mysqli_fetch_object($respuesta))
	{
		$matriz[]= array('disponible'=>$obj->disp_local
		);		
		}	
	echo json_encode($matriz);
	
	
}
else
{
	echo "No se conecto";
}
?>