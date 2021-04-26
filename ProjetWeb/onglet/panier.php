<!DOCTYPE html>
<html>
 <head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title> B&V Surfshop </title>
        <link rel="stylesheet" href="..\css\menu.css">
        <link rel="stylesheet" href="..\css\texte.css">
        <link rel="icon" href="../image/icon.png" />

		<!-- Code javaScript-->
		<script src="../js/produit.js"></script>

    </head>
    <body >
        <div class="menuBG bodyboardBG">
			<?php include('../php/header.php'); ?>
        </div>
        <h1>Panier</h1>
			<table>
				<thead>
					<tr>
						<th> Id </th>
						<th> Qt </th>
					</tr>
				</thead>
				<tbody id="panier">
				</tbody>
			</table>

		
		<!-- Execution de la fonction printplanche de produit.js à l'ouverture de la page -->
		<SCRIPT LANGUAGE="Javascript">
            printPanier();
		</SCRIPT>
    </body>
</html>