function Verification() {

    var DateCont = document.getElementById('idDateCont').value;
    var Nom = document.getElementById('idNom').value;
    var Prenom = document.getElementById('idPrenom').value;
    var Email = document.getElementById('idEmail').value;
    var GenreF = document.getElementById('idGenreF').value;
    var GenreH = document.getElementById('idGenreH').value;
    var DateNais = document.getElementById('idDateNais').value;
    var Fonction = document.getElementById('idFonction').value;
    var Sujet = document.getElementById('idSujet').value;
    var Contenu = document.getElementById('idContenu').value;


    
    if(DateCont=='') {
        document.getElementById('idDateCont').style.backgroundColor="red";
        document.getElementById('idDateCont').style.color="#FFF";
        return false;
    }
        
    else{
        document.getElementById('idDateCont').style.backgroundColor="#9C1";
    }

    if(Nom==''){
        document.getElementById('idNom').style.backgroundColor="red";
        document.getElementById('idNom').style.color="#FFF";
        return false;
    }
    else{
        document.getElementById('idNom').style.backgroundColor="#9C1";
    }

    if(Prenom==''){
        document.getElementById('idPrenom').style.backgroundColor="red";
        document.getElementById('idPrenom').style.color="#FFF";
        return false;
    }
    else{
        document.getElementById('idPrenom').style.backgroundColor="#9C1";
    }
    
    
    if(Email=='') {
        document.getElementById('idEmail').style.backgroundColor="red";
        document.getElementById('idEmail').style.color="#FFF";
        return false;
    }
    
    else{
      document.getElementById('idEmail').style.backgroundColor="#9C1";
    }

    if(GenreF=='' && GenreH=='') {
        document.getElementById('idGenreF').style.backgroundColor="red";
        document.getElementById('idGenreF').style.color="#FFF";
        document.getElementById('idGenreH').style.backgroundColor="red";
        document.getElementById('idGenreH').style.color="#FFF";
        return false;
    }
    
    else if (GenreF==''){
        document.getElementById('idGenreH').style.backgroundColor="#9C1";
    }
    else{
        document.getElementById('idGenreF').style.backgroundColor="#9C1";
    }

    if(DateNais=='') {
        document.getElementById('idDateNais').style.backgroundColor="red";
        document.getElementById('idDateNais').style.color="#FFF";
        return false;
    }
    else{
        document.getElementById('idDateNais').style.backgroundColor="#9C1";
    }

    if(Fonction=='') {
        document.getElementById('idFonction').style.backgroundColor="red";
        document.getElementById('idFonction').style.color="#FFF";
        return false;
    }
    else{
        document.getElementById('idFonction').style.backgroundColor="#9C1";
    }

    if(Sujet=='') {
        document.getElementById('idSujet').style.backgroundColor="red";
        document.getElementById('idSujet').style.color="#FFF";
        return false;
    }
    else{
        document.getElementById('idSujet').style.backgroundColor="#9C1";
    }

    if(Contenu=='') {
        document.getElementById('idContenu').style.backgroundColor="red";
        document.getElementById('idContenu').style.color="#FFF";
        return false;
    }
    else{
        document.getElementById('idContenu').style.backgroundColor="#9C1";
    }


}
