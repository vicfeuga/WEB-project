<!doctype html>
<html>
    <head>
       <title>Connexion à MySQL avec PDO</title>
       <link rel="stylesheet" href="..\css\texte.css">
       <link rel="stylesheet" href="..\css\texte.css">
        <link rel="icon" href="../image/icon.png" />

       <script src="https://unpkg.com/js-image-zoom@0.7.0/js-image-zoom.js"></script>
       <script src="./js/produit.js"></script>

       <meta charset="utf-8">
    </head>
    <body>
        <div class="menuBG fishBG">
			<?php include('../php/header.php'); ?>
        </div>
        <h1>Interrogation de la table fish avec PDO eae</h1>
        <button onclick="afficher()"> Afficher/Masquer les stocks </button>
        <?php
        include './php/categorie/catfish.php' ;    
        ?>
    	
        <SCRIPT LANGUAGE="Javascript">
			cacher();
		</SCRIPT>

    </body>
</html>