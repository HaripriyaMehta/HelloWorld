var name = prompt("What's your name?");
document.getElementById("welcome").innerHTML = "Welcome " + name;

function sayHello(){
	alert("Hello");
}

var counter = 0;
function count(){
	counter = counter + 1;
	document.getElementById("number").innerHTML = counter;
	if (document.getElementById("number").innerHTML > 5) {
		document.getElementById("counting").innerHTML = "You have more than 5 clicks.";
	}
	else if (document.getElementById("number").innerHTML == 5){
		document.getElementById("counting").innerHTML = "You have 5 clicks.";
	}
 else {
		document.getElementById("counting").innerHTML = "You have less than 5 clicks.";
}
}


function input(textbox) {
	if(event.keyCode == 13) {
		var output = document.getElementById('output');
		output.innerHTML += "<br>" + textbox.value;
}
}


function changeImage() {
    var image = document.getElementById("beaver");
	var imageURL1 = "http://web.mit.edu/graphicidentity/images/examples/tim-the-beaver-1.png";
	var imageURL2 = "https://slice.mit.edu/wp-content/uploads/2013/11/Beaver_Slice_22.jpg";
	var imageURL3 = "beaver.png";
    if (image.src == imageURL1) {
        image.src = imageURL2;
    }
    else if (image.src == imageURL2) {
    	image.src = imageURL3;
    }
    else {
        image.src = imageURL1;
    }
}