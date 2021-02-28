//création de l'objet Planches
function Planches(img,nom,marque,prix) {
	this.img = img,
	this.nom = nom,
	this.marque = marque,
	this.prix = prix
}
//création de toutes les variables 
const fish1 = new Planches('../image/planches/fish/fish1.jpg', 'Surf Fish Torq Pinline White/Blue 2021','Torq', 439);
const fish2 = new Planches('../image/planches/fish/fish2.jpg', 'PLANCHES SURF FISH BLACKWINGS PERFECT STUFF FISH CLEAR 2021','Blackwings', 389);
const body1 = new Planches('../image/planches/body/body1.jpg', 'PRIDE PHANTOM','Pride', 99);
const body2 = new Planches('../image/planches/body/body2.jpg', 'PRIDE ANSWER MINI PE RECYCLÉ SURLYN','Pride', 210);
const long1 = new Planches('../image/planches/long/long1.jpg', 'PLANCHES SURF LONGBOARD SURF DUKE LONGBOARD PAULOWNIA 2021','Duke', 839);
const long2 = new Planches('../image/planches/long/long2.jpg', 'PLANCHES SURF LONGBOARD SIC MAUI NOSE RIDER 2021','Sic', 609);
const fun1 = new Planches('../image/planches/fun/fun1.jpg', 'Surf Grace Demibu','Grace Demibu', 669);
const fun2 = new Planches('../image/planches/fun/fun2.jpg', 'Surf Torq Newclassic Fun 2021','Torq', 459);
const evo1 = new Planches('../image/planches/evo/evo1.jpg', 'Surf Manatee MINIBU','Manatee', 449);
const evo2 = new Planches('../image/planches/evo/evo2.jpg', 'PLANCHE DE SURF PHIPPS ONE BAD EGG - FCSII ','Phipps', 699);

//création du tableau planches qui contient toutes les planches
let planches = [];
planches.push(fish1,fish2,body1,body2,long1,long2,fun1,fun2,evo1,evo2);
//création du tableau planches qui contient toutes les fish
let fishs = [];
fishs.push(fish1,fish2);
//création du tableau planches qui contient toutes les bodys
let bodys = [];
bodys.push(body1,body2);
//création du tableau planches qui contient toutes les longs
let longs = [];
longs.push(long1,long2);
//création du tableau planches qui contient toutes les funs
let funs = [];
funs.push(fun1,fun2);
//création du tableau planches qui contient toutes les evos
let evos = [];
evos.push(evo1,evo2);



//fonction permettant de print les tableaux des planches
function printplanche(){

	let listOfPlanches = '';
	
planches.forEach(planche=>
    listOfPlanches += `
      <tr>
        <td><img src=${planche.img}></td>
        <td>${planche.nom}</td>
        <td>${planche.marque}</td>
		<td>${planche.prix}</td>
      </tr>
      ` 
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
}
//fonction permettant de print les tableaux des fish
function printfish(){

	let listOfPlanches = '';
	
fishs.forEach(planche=>
    listOfPlanches += `
      <tr>
        <td><img src=${planche.img}></td>
        <td>${planche.nom}</td>
        <td>${planche.marque}</td>
		<td>${planche.prix}</td>
      </tr>
      ` 
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
}
//fonction permettant de print les tableaux des body
function printbody(){

	let listOfPlanches = '';
	
bodys.forEach(planche=>
    listOfPlanches += `
      <tr>
        <td><img src=${planche.img}></td>
        <td>${planche.nom}</td>
        <td>${planche.marque}</td>
		<td>${planche.prix}</td>
      </tr>
      ` 
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
}

//fonction permettant de print les tableaux des longs
function printlong(){

	let listOfPlanches = '';
	
longs.forEach(planche=>
    listOfPlanches += `
      <tr>
        <td><img src=${planche.img}></td>
        <td>${planche.nom}</td>
        <td>${planche.marque}</td>
		<td>${planche.prix}</td>
      </tr>
      ` 
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
}
//fonction permettant de print les tableaux des funs
function printfuns(){
	let listOfPlanches = '';
	
funs.forEach(planche=>
    listOfPlanches += `
      <tr>
        <td><img src=${planche.img}></td>
        <td>${planche.nom}</td>
        <td>${planche.marque}</td>
		<td>${planche.prix}</td>
      </tr>
      ` 
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
}
//fonction permettant de print les tableaux des evos
function printevo(){
	let listOfPlanches = '';
	
evos.forEach(planche=>
    listOfPlanches += `
      <tr>
        <td><img src=${planche.img}></td>
        <td>${planche.nom}</td>
        <td>${planche.marque}</td>
		<td>${planche.prix}</td>
      </tr>
      ` 
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
}
