const calc = document.querySelector(".calc");
const principal = document.querySelector("#principal");
const time = document.querySelector("#time");



function Commas(n) {
let parts=n.toString().split(".")
return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}


function compute_interest() {

	let principal = document.getElementById("principal").value;
	let time = document.getElementById("time").value;

 	let rate = parseFloat(10)/100;
	
	amount_interest = parseFloat(principal) * (1+ (rate *time));
 
	amt = amount_interest.toFixed(2);
	display = Commas(amt);
	results ="Amount to be paid is  " + amt+".";
 	
	document.getElementById("demo").innerHTML = results;
 }

$('#calc').click(function(e){
   e.preventDefault();
   // Code goes here
	compute_interest(); // your onclick function call here

});