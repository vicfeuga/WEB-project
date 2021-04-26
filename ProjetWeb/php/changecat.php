<?php 
    $cat = $_GET['idCat'];
	if($cat == 'catfish'){
		include('../php/categorie/catfish.php');
	}
	elseif($cat == 'catevo'){
		include('../php/categorie/catevo.php');
	}
	elseif($cat == 'catfunboard'){
		include('../php/categorie/catfunboard.php');
	}
	elseif($cat == 'catlongboard'){
		include('../php/categorie/catlongboard.php');
	}
	elseif($cat == 'catbodyboard'){
		include('../php/categorie/catbodyboard.php');
	}
	else{
		include('../php/categorie/cattoutes.php');
	}
?>
