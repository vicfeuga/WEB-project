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
        <div class="menuBG evolutiveBG">
			<?php include('../php/header.php'); ?>
        </div>
        <h1>Evolutive</h1>
		<button onclick="afficher()"> Afficher/Masquer les stocks </button>
		<?php
        include '../php/categorie/catevo.php' ;    
        ?>
		
		<!-- Code javaScript-->
		<script src="../js/produit.js">
		</script>
		<!-- Execution de la fonction printplanche de produit.js à l'ouverture de la page -->
		<SCRIPT LANGUAGE="Javascript">
			zoomplanche();
		</SCRIPT>
    </body>
</html>
