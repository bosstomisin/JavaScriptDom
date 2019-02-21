// var text = document.getElementById("welcome_text") .innerHTML;
// alert(text);
// var word = document.getElementById("story") .innerHTML;
// alert(word);
// story = document.getElementById("story").style.backgroundColor ="green";
// var name = document.getElementById("enter_name") .value;
// document.write(name);
// var m = document.getElementById("enter_email") .value;
// document.write(m);
// var p = document.getElementById("enter_password") .value
// document.write(p);
// if(p !="1234"){
// 	alert("invalid password");
// }
// else{
// 	alert("correct");
// }
	
	

	// var inputTag= document.getElementsByTagName("input");
	// inputTag[0].value="reat";
	// inputTag[1].value="reat@gmail.com";
	// inputTag[2].value="12345";

// alert(name);
// alert(m);
// alert(p);

// var square = document.getElementById("square");
// function changeColor(){
// square.style.backgroundColor="blue";
// }
// function reverseColor(){
// 	square.style.backgroundColor="yellow";
// }
// document.write("<br>");



// var inputTag = document.getElementsByTagName("input")
// // if(inputTag ==""){
// // 	alert("enter a name")
// // }
// // else {
// // 	alert("welcome");
// // }

// alert(inputTag[2].value);

// function showName(){

// 	document.write("tolu");
// }
// setTimeout(showName, 1000);
var count=0;
function timer(){
		document.write(count +"<br>");
	count++;
	if(count==5){
		clearInterval(count);
	}

}
setInterval(timer,1000);
