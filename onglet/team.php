<!DOCTYPE html>
<html>
 <head>
        <meta charset="UTF-8">        
        <title> B&V Surfshop </title>
        <link rel="stylesheet" href="..\css\menu.css">
        <link rel="stylesheet" href="..\css\texte.css">
        <link rel="stylesheet" href="..\css\diapoteam.css">
        <link rel="icon" href="../image/icon.png" />

    </head>
    <body >
        <div class="menuBG teamBG">
            <?php include('../php/header.php'); ?>
        </div>
        <h1>
            Team :
        </h1>

        <div class="cadre-demo1">
            <div class="photos-mini">
                <div class="miniature">
                    <input type="radio" name="demo" checked class="fen" id="lightbox-1" />
                    <label for="lightbox-1">
                        <img src="../image/team/italoferreira.jpg" alt>
                    </label>
                    <img class="fenetre" src="../image/team/italoferreira.jpg" width = auto height = 400px alt>
                    <figcaption>Italo Ferreira, surfeur brésilien</figcaption>
                </div>
                <div class="miniature">
                    <input type="radio" name="demo" class="fen" id="lightbox-2" />
                    <label for="lightbox-2">
                        <img src="../image/team/kellyslater.jpg"alt>
                    </label>
                    <img class="fenetre" src="../image/team/kellyslater.jpg"   width = auto height = 400px alt>
                    <figcaption>Kelly Slater, surfeur américain</figcaption>
                </div>
            <div class="miniature">
                <input type="radio" name="demo" class="fen" id="lightbox-3" />
                <label for="lightbox-3">
                    <img src="../image/team/jeremyflores.jpg" alt>
                </label>
                <img class="fenetre" src="../image/team/jeremyflores.jpg"   width = auto height = 400px  alt>
                <figcaption>Jeremy Flores, surfeur français</figcaption>
            </div>
            <div class="miniature">
                <input type="radio" name="demo" class="fen" id="lightbox-4" />
                <label for="lightbox-4">
                    <img src="../image/team/carolinemarks.jpg" alt>
                </label>
                <img class="fenetre" src="../image/team/carolinemarks.jpg"   width = auto height = 400px  alt>
                <figcaption>Caroline Marks, surfeuse américaine</figcaption>
            </div>
            <div class="miniature">
                <input type="radio" name="demo" class="fen" id="lightbox-5" />
                <label for="lightbox-5">
                    <img src="../image/team/mikeyfebruary.jpg" alt>
                </label>
                <img class="fenetre" src="../image/team/mikeyfebruary.jpg"   width = auto height = 400px  alt>
                <figcaption>Mikey February, surfeur sud-africain</figcaption>
            </div>
        </div>
    </body>
</html>
