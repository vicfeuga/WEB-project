<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">        
        <title> B&V Surfshop </title>
        <link rel="stylesheet" href="..\css\menu.css">
        <link rel="stylesheet" href="..\css\texte.css">
        <link rel="icon" href="../image/icon.png" />

		
		<!-- Code javaScript-->
		<script src="https://unpkg.com/js-image-zoom@0.7.0/js-image-zoom.js"></script>
		<script src="../js/produit.js"></script>

    </head>
    <body >
        <div class="menuBG fishBG">
			<?php include('../php/header.php'); ?>
        </div>
        </div>
        <h1>Fish</h1>
		<button onclick="afficher()"> Afficher/Masquer les stocks </button>
        <?php
        include '../php/categorie/catfish.php' ;    
        ?>
		
		<!-- Execution de la fonction printplanche de produit.js à l'ouverture de la page -->
		<SCRIPT LANGUAGE="Javascript">
			cacher();
            document.getElementById('listeplanche').innerHTML = listOfPlanches;
            var options = {
                widht: 200,
                height: 375,
                zoomWidth: 400,
                offset: {vertical: 0, horizon: 50},
                zoomPosition: "original",
                scale: "1"
            };
            var list = document.getElementsByClassName("img-container");
            for (var i = 0; i < list.length; i++) {
                new ImageZoom(list[i], options);
            }
		</SCRIPT>
    </body>
</html>
