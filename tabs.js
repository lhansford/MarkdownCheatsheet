function showNormal(){
	document.getElementById("markdown").style.display = 'block';
	document.getElementById("github").style.display = 'none';
}

function showGithub(){
	document.getElementById("github").style.display = 'block';
	document.getElementById("markdown").style.display = 'none';
}
window.onload = function(){
	document.getElementById("markdown").style.display = 'none';
	document.getElementById("tab1").addEventListener("click",showNormal);
	document.getElementById("tab2").addEventListener("click",showGithub);
}
