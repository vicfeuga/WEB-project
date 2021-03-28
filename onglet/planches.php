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
        <div class="menuBG planchesBG">
            <?php include('../php/header.php'); ?>
        </div>
        <h1>Toutes nos planches</h1>
		<button onclick="afficher()" class="OK"> Afficher les stocks </button>
		<button onclick="cacher()" class="OK"> Cacher les stocks </button>
		<br><br>

		<form name="select_categorie" methode="GET" >
		<label for="idCat">Choix catégorie : </label>
			<select id="idCat" name="idCat" value ="<?php if(isset($_GET['idCat'])) { echo $_GET['idCat']; } ?>">
				<option value="cattoutes">Toute</option>
				<option value="catfish">Fish</option>
				<option value="catevo">Evolutive</option>
				<option value="catfunboard">Funboard</option>
				<option value="catlongboard">Longboard</option>
				<option value="catbodyboard">Bodyboard</option>
			</select>
			<input type="submit" name="valider" value="Valider" class="OK">
		</form>

		<table>
			<thead>
				<tr>
					<th> Image </th>
					<th> Nom </th>
					<th> Marque </th>
					<th> Prix </th>
					<th class="hide"> Stock </th>
					<th> Quantité commandée  </th>
					<th> Panier </th>
				</tr>
			</thead>
			<tbody id="listeplanche">
			</tbody>
		</table>

		<?php include('../php/changecat.php') ?>
		
    </body> 
</html>
