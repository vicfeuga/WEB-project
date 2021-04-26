<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">        
        <title> B&V Surfshop </title>
        <link rel="stylesheet" href="..\css\texte.css">


    </head>
    <body >
        <form method="POST">  

            <label for="idNom">Nom <span class="text-danger"></span></label>
            <input type="text" name="nom" id="idNom" placeholder="Entrez votre nom">
            <br><br>

            <label for="idPrenom">Prénom <span class="text-danger"></span></label>
            <input type="text" name="prenom" id="idPrenom" placeholder="Entrez votre prenom">
            <br><br>

            <label for="idPseudo">Pseudo <span class="text-danger"></span></label>
            <input type="text" name="pseudo" id="idPseudo" placeholder="Entrez votre pseudo">
            <br><br>

            <label for="idMdp">Mot de passe <span class="text-danger"></span></label>
            <input type="password" name="mdp" id="idMdp" placeholder="Entrez votre mot de passe">
            <br><br>

            <input type="submit" name="submit" value="Envoyer">

        </form>

    </body>

    <?php 

    $pass_hache = password_hash($_POST['mdp'], PASSWORD_DEFAULT);

    // Insertion
    $req = $bdd->prepare('INSERT INTO user(id, nom, prenom, mdp, dateCrea) VALUES(:pseudo, :nom, :prenom, :mdp, CURDATE())');
    $req->execute(array(
        'pseudo' => $idPseudo,
        'nom' =>$idNom,
        'prenom'=>$idPrenom,
        'mdp' => $pass_hache));    
        ?>
</html>