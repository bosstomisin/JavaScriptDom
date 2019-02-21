// var raining=false;
// if(raining==true){
// 	document.write("stay at home");
// }
// else{
// 	document.write("visit a friend");
// }

// for(var i=0; i<=1000; i++){
// 	if(i % 2 == 1){
// 	document.write(i +"<br>");
// }

// if(i % 2 == 0){
// document.write(i +"<br>");	
// }		
// }


// var i=0;
// while(i<11){
// 	document.write(i + "<br>");
// 	i++;
// }

// var i=200;
// while(i<=3000){
// 	if(i % 5 == 0){
// 	document.write(i + "<br>");
// }
// 	i++;

// }

// var i = 0;
// do{
// 	document.write(i + "<br>")
// 	i++;
// }
// while(i<=10);

// function greeting (){
// 	var name="you are welcome";
// 	document.write(name);
// }
// greeting();


// function actors(){
// 	var names=["John Dumelo", "Stella Damascus", "Mercy Aigbe", "Odunlade Adekola", "Stephanie Okeke",];
// 	for(var i = 0; i<names.length; i++){
// 		document.write(names[i] + "<br>");
// 	}
// }
// actors();


// 
// function showName(firstName,lastName){
// document.write("First name: " +firstName +"<br>");
// document.write("Last name: " +lastName);
// }
// showName("jide", "kola");



// function area(base, height){
// 	document.write("The area of the triangle is: " + (base * height)/2);
// }
// area(12,14);



// function bio(name, age, sex, address,food){
// 	document.write(name + "<br>");
// 	document.write(age + "<br>");
// 	document.write(sex + "<br>");
// 	document.write(address + "<br>");
// 	document.write(food + "<br>");
// }
// bio("funke", "67", "female", "adegun street", "beans");


// var item="gown";
// var price=1000;
// function discount(){
// 	var discountedPrice= price-(10 / 100)*price
// alert("the item is: " + item);
// alert( discountedPrice );
// }
// discount();

// var confirm = confirm("Are yousure you want to delete");
// function deleteFile(){
// 	if(confirm==true){
// 	document.write("Your file has been deleted");
// }
// else{
// 	document.write("delete cancelled")
// }
// }
// deleteFile();


// var price=2500000;
// var confirm = confirm("Discount Yes/NO")
// function prompt(){
// if (confirm==true){
// 	var discount= price-(20/100)*price;
// 	document.write("The price to pay is: " + discount);
// }
// else{
// 	document.write("The price to pay is: " + price);

// }
// }

// prompt();




// var a =100;
// var b= 25;
// function multiply(){
// document.write(a * b + "<br>");
// }
// function add(multiply){
// 	document.write(a + b);
// 	multiply();
// }
// add(multiply());



// var shopItem={
// 	'name':'television',
// 	'price': 25000,
// 	'color' :'blue',
// 	'quantity':2,
// 	'totalPrice':function(){
// 		return this.price * this.quantity;
// 	}

// };
// document.write(shopItem.name + "<br>");
// document.write(shopItem.price + "<br>");
// document.write(shopItem.color + "<br>");
// document.write(shopItem.quantity + "<br>");
// document.write(shopItem.totalPrice());



// var bankInfo=[
// {
// 	'bankName': 'ecoBank',
// 	'accountName': 'Ope seun',
// 	'accountBalance': 100000
// },
// {
// 	'bankName': 'wemaBank',
// 	'accountName': 'Olu Tope',
// 	'accountBalance': 200000
// },
// {
// 	'bankName': 'sterlingBank',
// 	'accountName': 'jide chukwu',
// 	'accountBalance': 100000
// }
// ];
// document.write(bankInfo[0].bankName +"<br>");
// document.write(bankInfo[1].bankName +"<br>");
// document.write(bankInfo[2].bankName +"<br>");




// var date = new Date(2005, 3, 15, 2, 30,40);
// document.write(date.getMonth());



var RandomNumber= Math.floor(Math.random() * 51) + 1;
document.write(RandomNumber + "<br>");