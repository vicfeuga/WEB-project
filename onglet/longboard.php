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
        <div class="menuBG longboardBG">
			<?php include('../php/header.php'); ?>
        </div>
        <h1>Longboard</h1>
		<button onclick="afficher()"> Afficher les stocks </button>
		<table>
			<thead>
				<tr>
					<th> Image </th>
					<th> Nom </th>
					<th> Marque </th>
					<th> Prix </th>
					<th class="hide"> Stock </th>
					<th> Quantité commandée </th>
				</tr>
			</thead>
			<tbody id="listeplanche">
			</tbody>
		</table>

		<!-- Execution de la fonction printplanche de produit.js à l'ouverture de la page -->
		<SCRIPT LANGUAGE="Javascript">
			printlong();
			cacher();
		</SCRIPT>
    </body>
</html>
