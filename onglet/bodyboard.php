<!DOCTYPE html>
<html>
 <head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title> B&V Surfshop </title>
        <link rel="stylesheet" href="..\css\menu.css">
        <link rel="stylesheet" href="..\css\texte.css">
        <link rel="icon" href="../image/icon.png" />

		<!-- Code javaScript-->
		<script src="https://unpkg.com/js-image-zoom@0.7.0/js-image-zoom.js"></script>
		<script src="../js/produit.js"></script>

    </head>
    <body >
        <div class="menuBG bodyboardBG">
			<?php include('../php/header.php'); ?>
        </div>
        <h1>Bodyboard</h1>
		<button onclick="afficher()"> Afficher/Masquer les stocks </button>
		<?php
        include '../php/categorie/catbodyboard.php' ;    
        ?>
		
		<!-- Execution de la fonction printplanche de produit.js à l'ouverture de la page -->
		<SCRIPT LANGUAGE="Javascript">
			cacher();
		</SCRIPT>
    </body>
</html>
