

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


let form=document.querySelector("form")
let btn = form.querySelector('[name="submit"]')

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let Nom = document.getElementById('idNom') 
    let Prenom = document.getElementById('idPrenom') 
    let Email = document.getElementById('idEmail')
    let GenreF = document.getElementById('idGenreF')
    let GenreH = document.getElementById('idGenreH')
    let DateNais = document.getElementById('idDateNais')
    let Fonction = document.getElementById('idFonction')
    let Sujet = document.getElementById('idSujet')
    let Contenu = document.getElementById('idContenu')

    if(Nom.value==''){
        Nom.style.backgroundColor="red"
        Nom.style.color="#FFF"
        return false
    }
    else{
        Nom.style.backgroundColor="#9C1"
        Nom.style.color="#FFF"
    }

    if(Prenom.value==''){
        Prenom.style.backgroundColor="red"
        Prenom.style.color="#FFF"
        return false
    }
    else{
        Prenom.style.backgroundColor="#9C1"
        Prenom.style.color="#FFF"
    }
                
    if (checkEmail(Email.value)) {
        Email.style.backgroundColor="#9C1"
        Email.style.color="#FFF"
    } 
    else {
        Email.style.backgroundColor="red"
        Email.style.color="#FFF"
        return false
    }
        
    if(DateNais.value=='') {
        DateNais.style.backgroundColor="red"
        DateNais.style.color="#FFF"
        return false
    }
    else{
        DateNais.style.backgroundColor="#9C1"
    }

    if(Fonction.value=='') {
        Fonctionstyle.backgroundColor="red"
        Fonction.style.color="#FFF"
        return false
    }
    else{
        Fonction.style.backgroundColor="#9C1"
        Fonction.style.color="#FFF"
    }

    if(Sujet.value=='') {
        Sujet.style.backgroundColor="red"
        Sujet.style.color="#FFF"
        return false
    }
    else{
        Sujet.style.backgroundColor="#9C1"
        Sujet.style.color="#FFF"
    }

    if(Contenu.value=='') {
        Contenu.style.backgroundColor="red"
        return false
    }
    else{
        Contenu.style.backgroundColor="#9C1"
        Contenu.style.color="#FFF"
    }

    console.log(`Nom : ${Nom.value}`)
    console.log(`Prenom : ${Prenom.value}`)
    console.log(`Email : ${Email.value}`)
        
    if(GenreF.checked){
        console.log(`Genre : ${GenreF.value}`)
    }

    else{
        console.log(`Genre : ${GenreH.value}`)
    }

    console.log(`Date de naissance : ${DateNais.value}`)
    console.log(`Fonction : ${Fonction.value}`)
    console.log(`Sujet : ${Sujet.value}`)
    console.log(`Contenu : ${Contenu.value}`)

    alert("Mail envoyé!")
    return true
})
