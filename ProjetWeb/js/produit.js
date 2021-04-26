//fonction permettant de print les tableaux des planches
function zoomplanche(){

document.getElementById('listeplanche');
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
//fonction permettant d'afficher ou de masquer les stocks
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

//fonction permettant d'augmenter la quantité d'article
function up(id, stock) {
  n = document.getElementById(id);
  if ( parseInt(n.value) + 1 <= stock) {
	n.value = parseInt(n.value) + 1;
  }
}

//fonction permettant de diminuer la quantité d'article
function less(id) {
  n = document.getElementById(id);
  if ( parseInt(n.value - 1) >= 0) { 
	n.value = parseInt(n.value)-1;
  }
}


