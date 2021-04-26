
<?php
require("../database_infos.php");

$dsn="mysql:dbname=".BASE.";host=".SERVER;
try{
    $connexion=new PDO($dsn,USER,PASSWD);
}
catch(PDOException $e){
    printf("Échec de la connexion : %s\n", $e->getMessage());
    exit();
}
$sql="SELECT*from body";
if(!$connexion->query($sql)){
    echo "Pb d'accès à la table";
}
else{
    echo '
    <table>
        <thead>
            <tr>
                <th> Image </th>
                <th> Nom </th>
                <th> Marque </th>
                <th> Prix </th>
                <th class="hide"> Stock </th>
                <th> Quantité commandée  </th>
            </tr>
        </thead>
        <tbody id="listeplanche">  
        ';

    foreach ($connexion->query($sql) as $row){            
        echo '
        <tr>
        <td>
            <div class="img-container" style=" width="320px" height=320px""><img src='.$row['IMAGE'].'></div>
        </td>.
        <td align="center" width=55%>'. $row['NOM'].'</td>.
        <td align="center" width=15%>'.$row['MARQUE'].'</td>
        <td align="center" width=20%>'.$row['PRIX']. '€</td>
        <td align="center" width=15% class="hide">'.$row['STOCK'].'</td>
        <td>
        <button onclick=less("'.$row['ID'].'")>-</button>
        <input type="text"  style="width:90%" id='.$row['ID'].' value="0" />
        <button onclick=up("'.$row['ID'].'",'.$row['STOCK'].')>+</button>
    </td>
    <td>
        <button onclick=addToCart("'.$row['ID'].'")> Ajoutez au panier </button>
    </td>
		
    </tr>';
    }
    echo'
    </tbody>
    </table>';
    }
?>
    