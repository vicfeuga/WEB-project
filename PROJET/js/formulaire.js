function Verification() {

    let DateCont = document.getElementById('idDateCont').value
    let Nom = document.getElementById('idNom').value 
    let Prenom = document.getElementById('idPrenom').value 
    let Email = document.getElementById('idEmail').value
    let GenreF = document.getElementById('idGenreF').value
    let GenreH = document.getElementById('idGenreH').value
    let DateNais = document.getElementById('idDateNais').value
    let Fonction = document.getElementById('idFonction').value
    let Sujet = document.getElementById('idSujet').value
    let Contenu = document.getElementById('idContenu').value



        if(DateCont=='') {
            document.getElementById('idDateCont').style.backgroundColor="red"
            document.getElementById('idDateCont').style.color="#FFF"
            return false
        }
            
        else{
            document.getElementById('idDateCont').style.backgroundColor="#9C1"
            document.getElementById('idDateCont').style.color="#FFF"
            console.log(`Contacte le : ${DateCont}`)
        }

        if(Nom==''){
            document.getElementById('idNom').style.backgroundColor="red"
            document.getElementById('idNom').style.color="#FFF"
            return false
        }
        else{
            document.getElementById('idNom').style.backgroundColor="#9C1"
            document.getElementById('idDateCont').style.color="#FFF"
            console.log(`Nom : ${Nom}`)

        }

        if(Prenom==''){
            document.getElementById('idPrenom').style.backgroundColor="red"
            document.getElementById('idPrenom').style.color="#FFF"
            return false
        }
        else{
            document.getElementById('idPrenom').style.backgroundColor="#9C1"
            document.getElementById('idDateCont').style.color="#FFF"
            console.log(`Prenom : ${Prenom}`)

        }
        
        
        if(Email=='') {
            document.getElementById('idEmail').style.backgroundColor="red"
            document.getElementById('idEmail').style.color="#FFF"
            return false
        }
        
        else{
        document.getElementById('idEmail').style.backgroundColor="#9C1"
        document.getElementById('idDateCont').style.color="#FFF"
        console.log(`Email : ${Email}`)

        }

        if(GenreF=='' && GenreH=='') {
            document.getElementById('idGenreF').style.backgroundColor="red"
            document.getElementById('idGenreF').style.color="#FFF"
            document.getElementById('idGenreH').style.backgroundColor="red"
            document.getElementById('idGenreH').style.color="#FFF"
            return false
        }
        
        else if (GenreF==''){
            document.getElementById('idGenreH').style.backgroundColor="#9C1"
            document.getElementById('idDateCont').style.color="#FFF"
            console.log(`Genre : ${GenreF}`)
        }
        else{
            document.getElementById('idGenreF').style.backgroundColor="#9C1"
            document.getElementById('idDateCont').style.color="#FFF"
            console.log(`Genre : ${GenreH}`)

        }

        if(DateNais=='') {
            document.getElementById('idDateNais').style.backgroundColor="red"
            document.getElementById('idDateNais').style.color="#FFF"
            return false
        }
        else{
            document.getElementById('idDateNais').style.backgroundColor="#9C1"
            console.log(`Date de naissance : ${DateNais}`)

        }

        if(Fonction=='') {
            document.getElementById('idFonction').style.backgroundColor="red"
            document.getElementById('idFonction').style.color="#FFF"
            return false
        }
        else{
            document.getElementById('idFonction').style.backgroundColor="#9C1"
            document.getElementById('idDateCont').style.color="#FFF"
            console.log(`Fonction : ${Fonction}`)

        }

        if(Sujet=='') {
            document.getElementById('idSujet').style.backgroundColor="red"
            document.getElementById('idSujet').style.color="#FFF"
            return false
        }
        else{
            document.getElementById('idSujet').style.backgroundColor="#9C1"
            document.getElementById('idDateCont').style.color="#FFF"
            console.log(`Sujet : ${Sujet}`)

        }


        if(Contenu=='') {
            document.getElementById('idContenu').style.backgroundColor="red"
            return false
        }
        else{
            document.getElementById('idContenu').style.backgroundColor="#9C1"
            document.getElementById('idDateCont').style.color="#FFF"
            console.log(`Contenu : ${Contenu}`)

        }

}
