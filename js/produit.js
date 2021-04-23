function afficher()
{
	let col = document.getElementsByClassName("hide");
	if (col[1].style.display == 'none')
	{
		for (var i = 0; i < col.length; i++) {
			col[i].style.display='block';
		}
	}
	else
	{
		for (var i = 0; i < col.length; i++) {
			col[i].style.display='none';
		}
	}
	
}

function up(id, stock) {
  n = document.getElementById(id);
  if (parseInt(n.value) + 1 <= stock) {
	n.value = parseInt(n.value)+1;
  }
}

function less(id) {
  n = document.getElementById(id);
  if (parseInt(n.value) - 1 >= 0) { 
	n.value = parseInt(n.value)-1;
  }
}

//création de l'objet Planches
function Planches(img,nom,marque,prix,stock,id) {
	this.img = img,
	this.nom = nom,
	this.marque = marque,
	this.prix = prix,
	this.stock = stock,
	this.id = id
}
//création de toutes les variables 
const fish1 = new Planches('../image/planches/fish/fish1.jpg', 'Surf Fish Torq Pinline White/Blue 2021','Torq', 439,20,'fi1');
const fish2 = new Planches('../image/planches/fish/fish2.jpg', 'PLANCHES SURF FISH BLACKWINGS PERFECT STUFF FISH CLEAR 2021','Blackwings', 389,18,'fi2');
const body1 = new Planches('../image/planches/body/body1.jpg', 'PRIDE PHANTOM','Pride', 99,25,'b1');
const body2 = new Planches('../image/planches/body/body2.jpg', 'PRIDE ANSWER MINI PE RECYCLÉ SURLYN','Pride', 210,10,'b2');
const long1 = new Planches('../image/planches/long/long1.jpg', 'PLANCHES SURF LONGBOARD SURF DUKE LONGBOARD PAULOWNIA 2021','Duke', 839,35,'l1');
const long2 = new Planches('../image/planches/long/long2.jpg', 'PLANCHES SURF LONGBOARD SIC MAUI NOSE RIDER 2021','Sic', 609,25,'l2');
const fun1 = new Planches('../image/planches/fun/fun1.jpg', 'Surf Grace Demibu','Grace Demibu', 669,45,'fu1');
const fun2 = new Planches('../image/planches/fun/fun2.jpg', 'Surf Torq Newclassic Fun 2021','Torq', 459,4,'fu2');
const evo1 = new Planches('../image/planches/evo/evo1.jpg', 'Surf Manatee MINIBU','Manatee', 449,23,'e1');
const evo2 = new Planches('../image/planches/evo/evo2.jpg', 'PLANCHE DE SURF PHIPPS ONE BAD EGG - FCSII ','Phipps', 699,32,'e2');

//création du tableau planches qui contient toutes les planches
let planches = [];
planches.push(evo1,evo2,fish1,fish2,body1,body2,long1,long2,fun1,fun2);
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
    listOfPlanches += 
	`
      <tr>
		<td><div class="img-container" style=" width="320px" height=320px""><img src=${planche.img}></div></td>
       		<td align="center" width=55%>${planche.nom}</td>
        	<td align="center" width=15%>${planche.marque}</td>
		<td align="center" width=20%>${planche.prix}€</td>
		<td align="center" valign="middle" width=15% class="hide">${planche.stock}</td>
		<td>
			<button onclick=less('${planche.id}')>-</button>
			<input type="text"  style="width:90%" id=${planche.id} value="0" />
			<button onclick=up('${planche.id}',${planche.stock})>+</button>
		</td>
		<td>
			<button> Ajoutez au panier </button>
		</td>
      </tr>
	  `

)
document.getElementById('listeplanche').innerHTML = listOfPlanches;
var options = {
	widht: 200,
	height: 375,
	zoomWidth: 400,
	offset: {vertical: 0, horizon: 50},
	zoomPosition: "original",
	scale: "1"
};
var list = document.getElementsByClassName("img-container");
for (var i = 0; i < list.length; i++) {
	new ImageZoom(list[i], options);
}
}

//fonction permettant de print les tableaux des fish
function printfish(){

	let listOfPlanches = '';
	
fishs.forEach(planche=>
    listOfPlanches +=	`
      <tr>
		<td><div class="img-container" style=" width="320px" height="320px""><img src=${planche.img}></div></td>
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
	  `
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
var options = {
	widht: 200,
	height: 375,
	zoomWidth: 400,
	offset: {vertical: 0, horizon: 50},
	zoomPosition: "original",
	scale: "1"
};
var list = document.getElementsByClassName("img-container");
for (var i = 0; i < list.length; i++) {
	new ImageZoom(list[i], options);
}
}
//fonction permettant de print les tableaux des body
function printbody(){

	let listOfPlanches = '';
	
bodys.forEach(planche=>
    listOfPlanches += `
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
	  `
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
var options = {
	widht: 200,
	height: 375,
	zoomWidth: 400,
	offset: {vertical: 0, horizon: 50},
	zoomPosition: "original",
	scale: "1"
};
var list = document.getElementsByClassName("img-container");
for (var i = 0; i < list.length; i++) {
	new ImageZoom(list[i], options);
}
}

//fonction permettant de print les tableaux des longs

function printlong(){

	let listOfPlanches = '';
	
longs.forEach(planche=>
    listOfPlanches +=`
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
	  `
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
var options = {
	widht: 200,
	height: 375,
	zoomWidth: 400,
	offset: {vertical: 0, horizon: 50},
	zoomPosition: "original",
	scale: "1"
};
var list = document.getElementsByClassName("img-container");
for (var i = 0; i < list.length; i++) {
	new ImageZoom(list[i], options);
}
}
//fonction permettant de print les tableaux des funs
function printfuns(){
	let listOfPlanches = '';
	
funs.forEach(planche=>
    listOfPlanches += `
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
	  `
	  
  )

document.getElementById('listeplanche').innerHTML = listOfPlanches;
var options = {
	widht: 200,
	height: 375,
	zoomWidth: 400,
	offset: {vertical: 0, horizon: 50},
	zoomPosition: "original",
	scale: "1"
};
var list = document.getElementsByClassName("img-container");
for (var i = 0; i < list.length; i++) {
	new ImageZoom(list[i], options);
}
}


//fonction permettant de print les tableaux des evos
function printevo(){
	let listOfPlanches = '';
	
evos.forEach(planche=>
    listOfPlanches +=`
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
	  `
  )
 
document.getElementById('listeplanche').innerHTML = listOfPlanches;
var options = {
	widht: 200,
	height: 375,
	zoomWidth: 400,
	offset: {vertical: 0, horizon: 50},
	zoomPosition: "original",
	scale: "1"
};
var list = document.getElementsByClassName("img-container");
for (var i = 0; i < list.length; i++) {
	new ImageZoom(list[i], options);
}


}

