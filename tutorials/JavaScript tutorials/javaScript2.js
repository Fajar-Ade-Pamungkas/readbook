//PAGE METODE ARRAY 15
var nomor = [0.1, 7, 100, 55, 70,-400];
document.getElementById("$arraymethods15").innerHTML=nomor;
/*var x=2; y=8; z=16; o=x+z*y; 
document.getElementById("angka").innerHTML= o;
*/

function $arraymethods15() {
	nomor.sort(function(a,b) {return a-b}); 
	document.getElementById("$arraymethods15").innerHTML=nomor;
}
function $arraymethods16() {
	nomor.sort(function(a,b) {return b-a}); 
	document.getElementById("$arraymethods16").innerHTML=nomor[0];
}
function $arraymethods17() {
	nomor.sort(function(a,b) {return a-b}); 
	document.getElementById("$arraymethods17").innerHTML=nomor[0];
}

//PAGE LOOP FOR

function loopfor1() {
	var teks, cars, i;
	teks = '';
	cars = ["Gallardo", 
		"Cellica", 
		"Mustang", 
		"Corvette", 
		"BMW", 
		"Lamborghini", 
		"Nissan Skyline", 
		"Mitsubishi"] 
		for (i = 0; i < cars.length; i++ ){
			teks += cars[i] + "<br>";
		}
	document.getElementById("loopfor01").innerHTML= teks;
}
function loopfor2() {
	var teks, i;
	teks ='';
	for (i = 0; i < 10; i++ ){
		teks += "Number" + " " + i + "<br>";
	}
	document.getElementById("loopfor02").innerHTML= teks;
}
function loopfor3() {
	var teks, cars, i, len;
	cars = ["Gallardo", 
		"Cellica", 
		"Mustang", 
		"Corvette", 
		"BMW", 
		"Lamborghini", 
		"Nissan Skyline", 
		"Mitsubishi"] 
		for (i = 0, len = cars.length, teks =""; i < len; i++ ){
		// i = 0, len = cars.length, teks =""; adalah statement 1
		// i < len; adalah statement 2
		// i++ adalah statement 3
			teks += cars[i] + "<br>";
		}
	document.getElementById("loopfor03").innerHTML= teks;
}
function loopfor4() {
	var cars, teks, len, i;
	cars = ["Gallardo", 
		"Cellica", 
		"Mustang", 
		"Corvette", 
		"BMW", 
		"Lamborghini", 
		"Nissan Skyline", 
		"Mitsubishi"] 
	teks = "";
	len = cars.length;
	i = 0;
		for (; i < len; i++ ){
			teks += cars[i] + "<br>";
		}
	document.getElementById("loopfor04").innerHTML= teks;
}
function loopfor5() {
	var cars, teks, len, i;
	cars = ["Gallardo", 
		"Cellica", 
		"Mustang", 
		"Corvette", 
		"BMW", 
		"Lamborghini", 
		"Nissan Skyline", 
		"Mitsubishi"] 
	teks = "";
	len = cars.length;
	i = 0;
		for (; i < len;){
			teks += cars[i] + "<br>";
			i++;
		}
	document.getElementById("loopfor05").innerHTML= teks;
}
function loopfor6() {
	var person = {fName: "Dejavu", lName: "of Devil", age: 20}; 
	var	teks = ""; 
	var	x; 
	for ( x in person ){
		teks += person[x] ;
	}
	document.getElementById("loopfor06").innerHTML= teks;
}
//PAGE RANDOM
function myRandom1(){
	document.getElementById("myRandom01").innerHTML= Math.random();
}
function myRandom2(){
	document.getElementById("myRandom02").innerHTML= Math.floor(Math.random()*10);
} 
function myRandom3(){
	document.getElementById("myRandom03").innerHTML= Math.floor(Math.random()*100);
}
function myRandom4(){
	document.getElementById("myRandom04").innerHTML= Math.floor(Math.random()*11);
}
function myRandom5(){
	document.getElementById("myRandom05").innerHTML= Math.floor(Math.random()*101);
}
function myRandom6(){
	document.getElementById("myRandom06").innerHTML= Math.floor(Math.random()*10)+1;
}
function myRandom7(){
	document.getElementById("myRandom07").innerHTML= Math.floor(Math.random()*100)+1;
}
function myRandom8(min,max) { 
	return Math.floor(Math.random() * (max - min)) + min; 
	//mengembalikan nilai acak antara 0 s/d 9
} 
function myRandom9(min,max) { 
	return Math.floor(Math.random() * (max - min + 1)) + min; 
	//mengembalikan nilai acak antara 0 s/d 10
} 

//PAGE COMAPARISON
function compare1(){
	var x = 5;
	document.getElementById("compare01").innerHTML= (x == 8);
}
function compare2(){
	var x = 5;
	document.getElementById("compare02").innerHTML= (x == '5');
}
function compare3(){
	var x = 5;
	document.getElementById("compare03").innerHTML= (x == 5);
}
function compare4(){
	var x = 5;
	document.getElementById("compare04").innerHTML=(x === 5);
}
function compare5(){
	var x = 5;
	document.getElementById("compare05").innerHTML= (x === '5');
}
function compare6(){
	var x = 5;
	document.getElementById("compare06").innerHTML= (x != 8);
}
function compare7(){
	var x = 5;
	document.getElementById("compare07").innerHTML= (x !== 8);
}
function compare8(){
	var x = 5;
	document.getElementById("compare08").innerHTML= (x !== "5");
}
function compare9(){
	var x = 5;
	document.getElementById("compare09").innerHTML= (x !== 5);
}
function compare10(){
	var x = 5;
	document.getElementById("compare10").innerHTML= (x < 8);
}
function compare11(){
	var x = 5;
	document.getElementById("compare11").innerHTML= (x > 8);
}
function compare12(){
	var x = 5;
	document.getElementById("compare12").innerHTML= (x <= 8);
}
function compare13(){
	var x = 5;
	document.getElementById("compare13").innerHTML= (x >= 8);
}
function compare14(){
	var x = 6;
	var y = 3;
	document.getElementById("compare14").innerHTML= (x > 3 && y > 1);
}
function compare15(){
	var x = 6;
	var y = 3;
	document.getElementById("compare15").innerHTML= (x == 5 || y == 5);
}
function compare16(){
	var x = 6;
	var y = 3;
	document.getElementById("compare16").innerHTML= !(x == y);
}
function compare17(){
	var teks, u;
	u = document.getElementById("umur").value;
	teks = (u < 18) ? 'Terlalu Muda' : "Usia Cukup";
	document.getElementById("compare17").innerHTML=teks;
}
function compare18(){
	f = 2 < 12;
	document.getElementById("compare18").innerHTML= f;
}
function compare19(){
	f = 2 < '12';
	document.getElementById("compare19").innerHTML= f;
}
function compare20(){
	f = 2 < "dave";
	document.getElementById("compare20").innerHTML= f;
}
function compare21(){
	f = 2 > "dave";
	document.getElementById("compare21").innerHTML= f;
}
function compare22(){
	f = 2 == "dave";
	document.getElementById("compare22").innerHTML= f;
}
function compare23(){
	f = "2" < "dave";
	document.getElementById("compare23").innerHTML= f;
}
function compare24(){
	f = "2" > "dave";
	document.getElementById("compare24").innerHTML= f;
}
function compare25(){
	f = "2" == 'dave';
	document.getElementById("compare25").innerHTML= f;
} 
function compare26(){
	var usia, teks;
	usia  = Number(document.getElementById("inputAge").value);
	if (isNaN(usia)){
		teks = 'Masukan harus berupa nomor';
	}else{
		teks = (usia < 18) ? 'Usia anda terlalu muda':"Usia anda cukup";
	}
	document.getElementById("compare26").innerHTML=teks;
}
function loopWhile1(){
	var teks, i;
	teks ="";
	i = 0;
	while (i < 10){
		teks += " <br> Nomor ke - " + i;
		i++;
	}
	document.getElementById("loopWhile01").innerHTML=teks;
}
function loopWhile2(){
	var teks, i;
	teks ="";
	i = 0;
	do {
		teks += " <br> Nomor ke - " + i;
		i++;
	}
	while (i < 10);
	document.getElementById("loopWhile02").innerHTML=teks;
}
function loopWhile3(){
	var cars, teks, i;
	cars = ['Mustang', "Gallardo", "Chevrolet", "Lamborghini", "Rx-8"];
	teks ="";
	i = 0;
	for (; cars[i] ;) {
		teks +=  cars[i] + " <br>";
		i++;
	}
	document.getElementById("loopWhile03").innerHTML=teks;
}
function loopWhile4(){
	var cars, teks, i;
	cars = ['Mustang', "Gallardo", "Chevrolet", "Lamborghini", "Rx-8"];
	teks ="";
	i = 0;
	while (cars[i]) {
		teks +=  cars[i] + " <br>";
		i++;
	}
	document.getElementById("loopWhile04").innerHTML=teks;
}
function myBreak1() {
	var teks, i;
	teks = ""; 
	for ( i = 0; i< 10; i++){
		if(i === 3) {break;}
		teks += "<br> Nomor ke - " + i;
	} 
	document.getElementById("myBreak01").innerHTML= teks;
}
function myBreak2() {
	var teks, i;
	teks = ""; 
	for ( i = 0; i < 10; i++){
		if(i === 3) {continue;}
		teks += "<br> Nomor ke - " + i;
	} 
	document.getElementById("myBreak02").innerHTML= teks;
}
function myBreak3() {
	var cars,teks;
	
	cars = ["Chevrolette", "Nissan", "Audi", "Mitsubishi", "Gallardo"]; 
	teks = ""; 
	list: {
		teks += cars[0] + "<br>";
		teks += cars[1] + "<br>";
		teks += cars[2] + "<br>";
		teks += cars[3] + "<br>";
		break list ;
		teks += cars[4] + "<br>";
		teks += cars[5] + "<br>";
	}
	document.getElementById("myBreak03").innerHTML= teks;
}

function typeConversion1(){
	document.getElementById('typeConversion01').innerHTML=
	typeof "john" + "<br>" +
	typeof 3.14 + "<br>" +
	typeof NaN + "<br>" +
	typeof false + "<br>" +
	typeof [1,2,3,4] + "<br>" +
	typeof {name:'john', age:34} + "<br>" +
	typeof new Date() + "<br>" +
	typeof function () {} + "<br>" +
	typeof myCar + "<br>" +
	typeof null;
}
function typeConversion2(){
	document.getElementById('typeConversion02').innerHTML=
	"john".constructor + "<br>" +
	(3.14).constructor + "<br>" +
	false.constructor + "<br>" +
	[1,2,3,4].constructor + "<br>" +
	{name:'john', age:34}.constructor + "<br>" +
	new Date().constructor + "<br>" +
	function () {}.constructor;
}

//PAGE ERROR
function errors2(){
	var pesan, nx;
	pesan = document.getElementById("errors02");
	pesan.innerHTML="";
	x = document.getElementById("numb").value;

	try {
		if(x == "") throw " kosong";
		if(isNaN(x)) throw "harus angka";
		Number(x);
		if(x < 5) throw "harus lebih besar daripada ini";
		if(x > 10) throw "harus lebih kecil daripada ini";
	} 
	catch(err){ pesan.innerHTML= "input " + err; }
}
function errors3(){
	var pesan, x;
	pesan = document.getElementById("errors03");
	pesan.innerHTML="";
	x = document.getElementById("numb").value;

	try {
		if(x == "") throw " kosong";
		if(isNaN(x)) throw "angka";
		Number(x);
		if(x < 5) throw "harus lebih besar daripada ini";
		if(x > 10) throw "harus lebih kecil daripada ini";
	} 
	catch(err){ 
		pesan.innerHTML= "input " + err + ".";
	}
	finally {
		document.getElementById("numb").value= "";
	}
}

//BEST PRACTICES
function bestPractices1(){
	var x = "John";         
	var y = new String("John"); 
	var z = (x === y) 
	document.getElementById("bestPractices01").innerHTML= z;
}
function bestPractices2(){
	var x = new String("John");         
	var y = new String("John"); 
	var z = (x === y) 
	document.getElementById("bestPractices02").innerHTML= z;
}
/*
function bestPractices3() {
	var x1 = {firsName:'fajar'};           // new object
	var x2 = "fajar";           // new primitive string
	var x3 = 0;            // new primitive number
	var x4 = false;        // new primitive boolean
	var x5 = ['fajar', "ade", "pamungkas"];           // new array object
	var	x6 = x2.search(/fajar/ 'i');         // new regexp object
	var x7 = function(); // new function object
	document.getElementById("bestPratices03").innerHTML= typeof x1 + "<br>" + typeof x2 + '<br>' +
	typeof x3 + '<br>' + typeof x4 +"<br>" + typeof x5 + "<br>" + typeof x6 + "<br>" + typeof x7;
}
*/
function bestPractices4() {
	var x = 'Hello';
	x = 10;
	document.getElementById('bestPractices04').innerHTML= x;
}
function bestPractices5() {
    var a = 5 + 7;       // a.valueOf() is 12,  typeof a is a number 
    var b = 5 + "7";     // b.valueOf() is 57,  typeof b is a string 
    var c = "5" + 7;     // c.valueOf() is 57,  typeof c is a string 
    var d = 5 - 7;       // d.valueOf() is -2,  typeof d is a number 
    var e = 5 - "7";     // e.valueOf() is -2,  typeof e is a number 
    var f = "5" - 7;     // f.valueOf() is -2,  typeof f is a number 
    var g = 5 - "x";     // g.valueOf() is NaN, typeof g is a number
	document.getElementById("bestPractices05").innerHTML= 
	"Nilai dari a adalah " + a.valueOf() + " " + ' dan tipe dari a adalah '  + typeof a + '<br>' +
	"Nilai dari b adalah " + b.valueOf() + " " + ' dan tipe dari b adalah '  + typeof b + '<br>' +
	"Nilai dari c adalah " + c.valueOf() + " " + ' dan tipe dari c adalah '  + typeof c + '<br>' +
	"Nilai dari d adalah " + d.valueOf() + " " + ' dan tipe dari d adalah '  + typeof d + '<br>' +
	"Nilai dari e adalah " + e.valueOf() + " " + ' dan tipe dari e adalah '  + typeof e + '<br>' +
	"Nilai dari f adalah " + f.valueOf() + " " + ' dan tipe dari f adalah '  + typeof f + '<br>' +
	"Nilai dari f adalah " + g.valueOf() + " " + ' dan tipe dari g adalah '  + typeof g + '<br>' ;
}
function bestPractices6() {
	var x = 'Hello' - "World !";
	document.getElementById('bestPractices06').innerHTML= x;
}
function bestPractices7() {
	var a, b, c, d, e, f;
	a = (0 == "");        // true
	b = (1 == "1");       // true
	c = (1 == true);      // true
	
	d = (0 === "");       // false
	e = (1 === "1");      // false
	f = (1 === true);     // false
	
	document.getElementById('bestPractices07').innerHTML= 
	"(0 == '')" + " " + a + '<br>' + 
	"(1 == '1')" + " " + b + "<br>" + 
	"(1 == true)" + " " + c + '<br>' + "<br>" +
	"(0 == '')" + " " + d + "<br>" + 
	"(1 == '1')" + " " +e + "<br>" + 
	"(1 == true)" + " " +f;
}
function bestPractices9() {
	var nameDay;
	switch(new Date().getDay()) {
		case 0:
			nameDay = "Minggu";
			break;
		case 1:
			nameDay = 'Senin';
			break;
		case 2:	
		    nameDay = "Selasa";
		    break;
		 case 3:
		 	nameDay = 'Rabu';
		 	break;
		 case 4:
		 	nameDay = 'Kamis';
		 	break;
		 case 5:
		 	nameDay = "Jumat";
		 	break;
		 case 6:
		 	nameDay = 'Sabtu';
		 	break;
		 default:
		 	nameDay = "tidak diketahui";
	}
	document.getElementById("bestPractices09").innerHTML= nameDay;
}

//PAGE MISTAKES
function mistakes1() {
	var x, teks;
	x = 0;
	teks;
	if(x == 10) {
		teks = true;
	} else {
		teks = false;
	}
	document.getElementById("mistakes01").innerHTML= teks;
}
function mistakes2() {
	var x, teks;
	x = 0;
	teks;
	if(x = 10) {
		teks = true;
	} else {
		teks = false;
	}
	document.getElementById("mistakes02").innerHTML= teks + '<br>' +
	"Alasannya karena pada fungsi if(x = 10) memberikan intruksi pada JavaScript" + " " +
	'untuk mendeklarasikan ulang atau mengubah nilai pada var x sehingga nilai x menjadi 10 bukan 0 lagi';
}
function mistakes3() {
	var x, teks;
	x = 0;
	teks;
	if(x = 0) {
		teks = true;
	} else {
		teks = false;
	}
	document.getElementById("mistakes03").innerHTML= teks + "<br>" + 
	"Alasannya karena JavaScript mengira kalau nilai x pada " +
	"fungsi if(x = 0) adalah sebuah tipe boolean." + "<br>" +
	"Karena pada tipw Boolean 0 adalah 'FALSE'";
}
function mistakes4() {
	var x, y, teks;
	x = 10;
	y = '10';
	teks;
	if(x == y) {
		teks = true;
	} else {
		teks = false;
	}
	document.getElementById("mistakes04").innerHTML= teks + "<br>" + 
	"Alasannya karena JavaScript memperlakukan nilai '10' sebagai 10" + " " +
	"walaupun termasuk kedalam tipe data string.";
}
function mistakes5() {
	var x, y, teks;
	x = 10;
	y = '10';
	teks;
	if(x === y) {
		teks = true;
	} else {
		teks = false;
	}
	document.getElementById("mistakes05").innerHTML= teks + "<br>" + 
	"Alasannya karena strict comaprison lebih telili, y memiliki nilai yang" + " " + 
	" sama dengan  x namun tipe data berbeda." + '<br>' +
	"variabel x memiliki tipe data Number, sedangkan variabel y memiliki tipe data String.";
}
function mistakes6() {
	var x, y, teks;
	x = 10;
	switch(x) {
	    case 10:
	        alert("Helo guys !");
	}
}
function mistakes7() {
	var x, y, teks;
	x = 10;
	switch(x) {
	    case "10":
	        alert("Helo guys !");
	}
}