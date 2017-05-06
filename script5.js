//Change CSS
ul {
	list-style-type:none;
	margin: 0;
	padding: 0;
}

li {
	float: left;
}
li a {
	display: block;
	padding: 8px;
	background-color: anything

function changeCSS(){
	if (document.body.style.background == "lightgreen") {
        document.body.style.background = "pink";
    }
	else{
		document.body.style.background = "lightgreen";
	}

	if (document.getElementById("colorful").style.color == "darkblue") {
        document.getElementById("colorful").style.color = "red";
    }
	else{
		document.getElementById("colorful").style.color = "darkblue";
	}

}

function changeMargin(){
	if (document.getElementById("margintester").style.margin == "75px") {
        document.getElementById("margintester").style.margin="200px";
    }
	else{
		document.getElementById("margintester").style.margin="75px";
	}

}

function toggle(element) {
	var menu=document.getElementById(element);
	if (menu.style.display == 'inline-grid') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'inline-grid';
	}
}
