<!DOCTYPE html>
<html>
 <head>
    <meta charset="UTF-8">        
   <title> B&V Surfshop </title>
   <link rel="stylesheet" href="..\css\form.css">
   <link rel="stylesheet" href="..\css\menu.css">
   <link rel="stylesheet" href="..\css\texte.css">
   <link rel="icon" href="../image/icon.png" />
  </head>
    <body >
        <div class="menuBG contactBG">
          <?php include('../php/header.php'); ?>
        </div>
        <div>
            <h1>Formulaire de contact</h1>
            <form name="monformulaire1" method="POST" onSubmit="../php/test.php">    
                    <div>                        
                        <label for="idNom">Nom <span class="text-danger"></span></label>
                        <input type="text" name="nom" id="idNom" placeholder="Entrez votre nom" value="<?php if(isset($_POST['nom'])) { echo $_POST['nom']; } ?>">
                        <br><br>
                        
                        <label for="idPrenom">Prénom</label>
                        <input type="text" name="prenom" id="idPrenom" placeholder="Entrez votre prenom" value="<?php if(isset($_POST['prenom'])) { echo $_POST['prenom']; } ?>">
                        <br><br>
                        
                        <label for="idEmail">Email <span class="text-danger"></span></label>
                        <input type="email" name="email" id="idEmail" placeholder="Entrez votre email" value="<?php if(isset($_POST['email'])) { echo $_POST['email']; } ?>">
                        <br><br>

                        <label for="genre">Genre</label>
                        <input type="radio" name="genre" id="idGenreF" value="femme" checked>Femme
                        <input type="radio" name="genre" id="idGenreH" value="homme">Homme
                        <br><br>
                        
                        <label for="idDateNais">Date de Naissance</label>
                        <input type="date" name="dateNais" id="idDateNais" value="<?php if(isset($_POST['dateNais'])) { echo $_POST['dateNais']; } ?>">
                        <br><br>

                        <label for="idFonction">Fonction</label>
                        <select id="idFonction" name="idFonction" value="<?php if(isset($_POST['idFonction'])) { echo $_POST['idFonction']; } ?>">
                            <option value="aucune">Aucune</option>
                            <option value="autre">Autre</option>
                            <option value="vendeur">Vendeur</option>
                            <option value="plombier">Plombier</option>
                            <option value="medecin">Medecin</option>
                            <option value="pompier">Pompier</option>
                            <option value="agentImo">Agent immobilier</option>
                        </select>
                        <br><br>

                        <label for="idSujet">Sujet</label>
                        <input type="text" name="sujet" id="idSujet" placeholder="Entrez le sujet de votre mail" value="<?php if(isset($_POST['sujet'])) { echo $_POST['sujet']; } ?>">
                        <br><br>


                        <label for="idContenu">Contenu</label><br><br>
                        <textarea name="contenu" id="idContenu" placeholder="Tapez ici votre mail" rows="10" cols="50" value="<?php if(isset($_POST['contenu'])) { echo $_POST['contenu']; } ?>"></textarea>
                        <br><br>
                    </div>
                    <div>
                        <input type="submit" name="submit" value="Envoyer">
                    </div>
            </form> 
        </div>
        <script src="../js/formulaire.js"></script>
    </body>
</html>
