document.getElementById("output").style.visibility = "hidden";

document.getElementById("barInput").addEventListener('input', function(e){
	document.getElementById("output").style.visibility = "visible";
	let bar = e.target.value;
	document.getElementById('nmsqOutput').innerHTML = bar * 100000;
	document.getElementById('pascalOutput').innerHTML = bar * 100;
	document.getElementById('mmHGOutput').innerHTML = bar * 750.06158;
});



	