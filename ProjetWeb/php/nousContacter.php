<?php
        if(isset($_POST['submit'])){
            if(!empty($_POST['nom']) AND !empty($_POST['prenom']) AND !empty($_POST['email']) AND !empty($_POST['dateNais']) AND !empty($_POST['sujet']) AND !empty($_POST['contenu']))
                {
                $nom = htmlentities($_POST['nom']);
                $prenom = htmlentities($_POST['prenom']);
                $email = $_POST['email'];
                $genre = $_POST['genre'];
                $dateNais = $_POST['dateNais'];
                $fonction = $_POST['idFonction'];
                $sujet = htmlentities($_POST['sujet']);
                $contenu = htmlentities($_POST['contenu']);

                $mailTo = "vicfeuga@orange.fr";
                $headers = "From: ".$email;
                $txt = "Message de ".$nom." ".$prenom." ".$genre." ".$dateNais." ".$fonction."\n\n".$contenu;

                mail($mailTo, $sujet, $txt, $headers);

                $fichier=fopen('../mail.txt', 'w');
                fwrite($fichier,  "Salut");
                fwrite($fichier,  "From: ".$email."Message de ".$nom." ".$prenom." ".$genre." ".$dateNais." ".$fonction."\n\n".$contenu);
                fclose($fichier);  
        
            }
        }
?>
