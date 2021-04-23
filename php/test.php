<!doctype html>
<html>
    <head>
       <title>Connexion à MySQL avec PDO</title
       ><meta charset="utf-8">
    </head>
    <body>
        <h1>Interrogation de la table fish avec PDO</h1>
        <table>
        <?php
        include '../php/categorie/catfish.php' ;    
        ?>
        </table>
<?php
    /*
    require("database_infos.php");

    $dsn="mysql:dbname=".BASE.";host=".SERVER;
    try{
        $connexion=new PDO($dsn,USER,PASSWD);
    }
    catch(PDOException $e){
        printf("Échec de la connexion : %s\n", $e->getMessage());
        exit();
    }
    $sql="SELECT*from fish";
    if(!$connexion->query($sql)){
        echo "Pb d'accès à la table";
    }
   else{
       echo"<table>";
        foreach ($connexion->query($sql) as $row){            
            echo "<tr><td>" .$row['IMAGE']."</td><td>".
            $row['NOM']."</td><td>".
            $row['MARQUE']."</td><td>".
            $row['PRIX']."</td><td>". 
            $row['STOCK']."</td></tr>";
        }
        echo"</table>";
    }
    /* <table>
            $row['NOM']." "
        $row['MARQUE']." ".
        $row['PRIX']." ". 
        $row['STOCK']." .<br/>\n";
            <tr>
            <td><div class="img-container" style=" width="320px" height=320px""><img src=${planche.img}></div></td>
            <td align="center" width=55%>${planche.nom}</td>
            <td align="center" width=15%>${planche.marque}</td>
            <td align="center" width=20%>${planche.prix} €</td>
            <td align="center" width=15% class="hide">${planche.stock}</td>
            <td>
                <button onclick=less('${planche.id}')>-</button>
                <input type="text"  style="width:90%" id=${planche.id} value="0" />
                <button onclick=up('${planche.id}',${planche.stock})>+</button>
            </td>
            <td>
                <button> Ajoutez au panier </button>
            </td>
            </tr>
        </table> */
    ?>
    </body>
</html>