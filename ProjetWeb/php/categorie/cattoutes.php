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
        <tbody id="listeplanche">  ';

        $sql="SELECT * from fish";
        if(!$connexion->query($sql)){
                echo "Pb d'accès à la table fish";
        }
        else{
                foreach ($connexion->query($sql) as $row){            
        echo '<tr><td><div class="img-container" style=" width="320px" height=320px""><img src='.$row['IMAGE'].'></div></td>.
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
        <button> Ajoutez au panier </button>
    </td>
    </tr>';
    }

    $sql="SELECT * from evo";
        if(!$connexion->query($sql)){
                echo "Pb d'accès à la table evo";
        }
        else{
                foreach ($connexion->query($sql) as $row){            
        echo '<tr><td><div class="img-container" style=" width="320px" height=320px""><img src='.$row['IMAGE'].'></div></td>.
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
        <button> Ajoutez au panier </button>
    </td>
    </tr>';
    }
    }

    $sql="SELECT * from fun";
        if(!$connexion->query($sql)){
                echo "Pb d'accès à la table fun";
        }
        else{
                foreach ($connexion->query($sql) as $row){            
        echo '<tr><td><div class="img-container" style=" width="320px" height=320px""><img src='.$row['IMAGE'].'></div></td>.
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
        <button> Ajoutez au panier </button>
    </td>
    </tr>';
                }
        }

    $sql="SELECT * from long";
        if(!$connexion->query($sql)){
                echo "Pb d'accès à la table long";
        }
        else{
                foreach ($connexion->query($sql) as $row){            
        echo '<tr><td><div class="img-container" style=" width="320px" height=320px""><img src='.$row['IMAGE'].'></div></td>.
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
        <button> Ajoutez au panier </button>
    </td>
    </tr>';
    }
    }

    $sql="SELECT * from body";
        if(!$connexion->query($sql)){
                echo "Pb d'accès à la table body";
        }
        else{
                foreach ($connexion->query($sql) as $row){            
        echo '<tr><td><div class="img-container" style=" width="320px" height=320px""><img src='.$row['IMAGE'].'></div></td>.
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
        <button> Ajoutez au panier </button>
    </td>
    </tr>';
    }
    }
    
    echo'
    </tbody>
    </table>';
    }
?>
