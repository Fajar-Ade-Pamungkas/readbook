//PAGE HOME
function waktu(){
	document.getElementById("waktu").innerHTML=Date();
}
//PAGE INTRODUCE
function myFunction(){ 			//page where too
	y=document.getElementById("demo");
	y.innerHTML="Hello JavaScriptor !";
}
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "../../pictures/hey.jpg";
    } else {
        image.src = "../../pictures/cool image.jpg";
    }
}
function changePar(){
	var x=document.getElementById("paragraf");
	x.style.fontSize="25px";
	x.style.color="blue";
}
function inputNumb(){
	var n, text;
	n = document.getElementById("numb").value;
	if(isNaN(n)|| n < 1 || n > 10 ){
		text="masukan Gagal";
	} else{
		text="masukan berhasil";
	}
	document.getElementById("notiv").innerHTML=text;
}

//PAGE WHERE TO
function inHead(){
	document.getElementById("inhead").innerHTML=
	"Script disimpan di tag head";
}
//PAGE OUTPUT (dalam page)
function windowAlert(){
	window.alert(15+12);			//window.alert
}
function documentWrite(){
	document.write(12+15);			//document.write (button)
}

//PAGE COMMENTS
function xyz(){
	x=document.getElementById("Xdemos");
	y=document.getElementById("Ydemos");
	x.innerHTML="FAJAR ADE PAMUNGKAS";
	y.innerHTML="I AM STILL A SINGLE";
	y.style.fontSize="20px";
	y.style.color="red";
	x.style.fontSize="20px";
	 x.style.color="blue";
	// z=document.getElementById('Zdemos').innerHTML= x + y;
}
function xyzo(){
	document.getElementById("Zdem").innerHTML="I'M THINKING OF YOU :)";
}

//PAGE VARIABLES
function variables1(){
	var x = 2;
	var y = 8;
	var z = 16;
	var a = x + y +z;
	document.getElementById("nilaiZ").innerHTML=a;
}
function variables2(){
	var price1 = 1000;
	price2 = 2000;
	price3 = 3000;
	total = price1 + price2 + price3;
	document.getElementById("allTotal").innerHTML="Rp" + " " +total;
}
function variables3(){
	var x = 5;
	document.getElementById("nilaiX").innerHTML=x + 7;
}
function variables8(){
	var carName="corvette";
	document.getElementById("namaMobil").innerHTML=carName;
}
function variables9(){
	var carName = 'BMW', home='rumah', any="YOU";
	document.getElementById("choice").innerHTML=any;
}

function variables10(){
	var sifat = "humoris"; sifat1="romantis";
	document.getElementById("choice2").innerHTML=sifat;
}
function variables11(){
var nama, text;
nama = document.getElementById("name").value;
if(isNaN(nama)){
	text="Halo" + " " +nama + "<br>" + " " +"Apa kabar?"; 
} else{
	text="masukan tidak valid";	
}
document.getElementById("notiv").innerHTML=text;
}
function variables12(){
	var carName = 'Lamborgini';
	carName;
	document.getElementById("merkMobil").innerHTML=carName;
}
function variables13(){
	var x = 2 + 2 - 2 * 2 /2;
	document.getElementById("jumlah").innerHTML=x;
}
function variables14(){
	var myName="Fajar" + " " + "Ade" + " " + "Pamungkas";
	document.getElementById("namaku").innerHTML=myName;
}
function variables15(){
	var x = "5" + 2 + 9;
	document.getElementById("jumlahX").innerHTML=x;
}

//PAGE OPERATORS
function operators3(){
	var price1 = 10;
	price2 = 9;
	price3 = 3;
	total = price1 * price2 * price3;
	document.getElementById("allPrice").innerHTML="$" + " " +total;
}
function operators4(){
	var x = 7;
	document.getElementById("operators04").innerHTML=x;
}
function operators5(){
	var x = 7;
	x += 8;
	document.getElementById("operators05").innerHTML=x;
}
function operators6(){
	var firstName = "Fajar";
	lastName = "Ade Pamungkas";
	myName = firstName + ' ' + lastName;
	document.getElementById("operators06").innerHTML=myName;
}
function operators7(){
	var myName = "Fajar";
	myName += "Ade Pamungkas";
	document.getElementById("operators07").innerHTML=myName;
}
function operators8(){
	var x= 5 +5 ;
	var y = 5 + '5';
	var z = 5 + 'heygen';
	document.getElementById("operators08X").innerHTML=x;
	document.getElementById("operators08Y").innerHTML=y;
	document.getElementById("operators08Z").innerHTML=z;		
}
//PAGE ARITHMETIC
function arithmetic1(){
	var x = 2 + 8 + 16;
	document.getElementById("arithmetic01").innerHTML=x;
}
function arithmetic2(){
	var x = 20 , y = 8 , z= 16, a = x+y+z;
	document.getElementById("arithmetic02").innerHTML=a;
}
function arithmetic3(){
	var a = 10, jumlahkeun = (5 * 5) + 50 / a ;
	document.getElementById("arithmetic03").innerHTML=jumlahkeun;
}
function arithmetic4(){
	var price1 = 70;
	price2 = 25;
	price3 = 50;
	total = price1 + price2 + price3;
	document.getElementById("arithmetic04").innerHTML="$" + " " + total;
}
function arithmetic5(){
	var price1 = 10;
	price2 = 20;
	price3 = 30;
	price4 = 40;
	price5 = 50;
	total = (price2 / price1) * (price3 + price4) - price5;
	document.getElementById("arithmetic05").innerHTML=
	"$" + " " + total;
}
function arithmetic6(){
	var price1 = 5 % 2;
	document.getElementById("arithmetic06").innerHTML=
	"$" + " " + price1;
}
function arithmetic7(){
	var price1 = 10;
	price1 ++;
	price2=price1;
	document.getElementById("arithmetic07").innerHTML=
	"$" + " " + price2;
}
function arithmetic8(){
	var price1 = 10;
	price1 --;
	price2=price1;
	document.getElementById("arithmetic08").innerHTML=
	"$" + " " + price2;
}
function arithmetic9(){
	var price1 = 10 + 5 * 9;
	document.getElementById("arithmetic09").innerHTML=
	"$" + " " + price1;
}
function arithmetic10(){
	var price1 = (10 + 5) * 9;
	document.getElementById("arithmetic10").innerHTML=
	"$" + " " + price1;
}
function arithmetic11(){
	var price1 = 10 + 70 + 50;
	document.getElementById("arithmetic11").innerHTML=
	"$" + " " + price1;
}

//PAGE ASSIGNMENT
function assignment1(){
	var x = 27;
	document.getElementById("assignment01").innerHTML=x;
}
function assignment2(){
	var x = 27;
	x += 10;
	document.getElementById("assignment02").innerHTML=x;
}
function assignment3(){
	var x = 27;
	x -= 10;
	document.getElementById("assignment03").innerHTML=x;
}
function assignment4(){
	var x = 27;
	x *= 10;
	document.getElementById("assignment04").innerHTML=x;
}
function assignment5(){
	var x = 27;
	x /= 10;
	document.getElementById("assignment05").innerHTML=x;
}
function assignment6(){
	var x = 27;
	x %= 10;
	document.getElementById("assignment06").innerHTML=x;
}

//PAGE DATA TYPES
function dataTypes1(){
	var x = 6 + "Halo";
	document.getElementById("dataTypes01").innerHTML=x;
}
function dataTypes2(){
	var x = "Halo" + 6;
	document.getElementById("dataTypes02").innerHTML=x;
}
function dataTypes3(){
	var x = 4 + 6 + "Halo";
	document.getElementById("dataTypes03").innerHTML=x;
}
function dataTypes4(){
	var x = "Halo" + 4 + 6;
	document.getElementById("dataTypes04").innerHTML=x;
}
function dataTypes5(){
	var x = "Halo! Apa kabar ? 'Kamu disana'"; //single quotes inside double quotes
	y =  'Halo! Apa kabar ? "Kamu disana"'; //double quotes inside single quotes
	document.getElementById("dataTypes05X").innerHTML=x;
	document.getElementById("dataTypes05Y").innerHTML=y;
}
function dataTypes6(){
	var cars = 
	["Corvette", "BMW", "RX-8","Nissan Sykline", "Lamborghini", "GTO Twin-Turbo"];
	document.getElementById("dataTypes06").innerHTML=cars[2];
}
function dataTypes7(){
	var person = {nama:"Fajar", umur:20, rumah:"Rain City"};
	document.getElementById("dataTypes07").innerHTML="Nama saya"+" "+person.nama;
}
function dataTypes8(){
	document.getElementById("dataTypes08O").innerHTML=typeof 30;	
	document.getElementById("dataTypes08P").innerHTML=typeof "Ade";	
	document.getElementById("dataTypes08Q").innerHTML=typeof false;	
	document.getElementById("dataTypes08R").innerHTML=typeof {nama:'fajar', umur:20};
	document.getElementById("dataTypes08S").innerHTML=typeof ["merah",'biru', "kuning"];
}
function dataTypes9(){
	var person;
	document.getElementById("dataTypes09").innerHTML=
	person+"<br>"+typeof person;
}
function dataTypes10(){
	var person = undefined;
	document.getElementById("dataTypes10").innerHTML=person;
}
function dataTypes11(){
	var car = "";
	document.getElementById("dataTypes11").innerHTML =
	"The value is: " +
	car + "<br>" +
	"The type is:" + typeof car;
}
function dataTypes12(){
	var x = null;
	document.getElementById("dataTypes12").innerHTML =
	"The value is: " +
	x + "<br>" +
	"The type is:" + typeof x;
}
function dataTypes13(){
	var x = undefined;
	document.getElementById("dataTypes13").innerHTML =
	"The value is: " +
	x + "<br>" +
	"The type is:" + typeof x;
}

//PAGE FUNCTIONS
function pageFunctions1(a,b) { 
	return a * b ;
}
document.getElementById("pageFunctions01").innerHTML= pageFunctions1(5,6);
function pageFunctions1(f) { 
	return (5/9) * (f-32);
}
document.getElementById("pageFunctions02").innerHTML= toCelcius(77);

//PAGE OBJECTS
function objects1() { 
	var me = {
		nama:"Jigol",
		alamat :"Rain City", 
		favorColor:"darkblue", 
		state:"single"
		};
	document.getElementById("objects01").innerHTML=
	"Nama saya :" + " " + me.nama + "<br>" +
	"Kota :" + " " + me.alamat + "<br>" +
	"Warna favorit :" + " " + me.favorColor + "<br>" +
	"Status :" + " " + me.state;
}
function objects2() { 
	var me = {
		nama :"Jigol",
		alamat :"Rain City", 
		favorColor:"darkblue", 
		state:"single"
	};
	document.getElementById("objects02").innerHTML=
	"Nama saya :" + " " + me["nama"] + " <br>" +
	"Kota :" + " " + me["alamat"] + "<br>" +
	"Warna favorit :" + " " + me["favorColor"] + "<br>" +
	"Status :" + " " + me["state"];
}

//PAGE SCOPE
function scope1() {
	var carName ='Gallardo'; 
	//carName hanya bisa diakses oleh fungsi scope1()
	x = document.getElementById("scope01");
	x.innerHTML=carName;
	x.style.fontSize="30px";
	x.style.color="red";
}
function scope2() {
	var carName ='Gallardo'; 
	//carName hanya bisa diakses oleh fungsi scope1()
	x = document.getElementById("scope02");
	x.innerHTML=carName;
	x.style.fontSize="30px";
	x.style.color="orange";
}
function scope3() {
	var carName ='Gallardo'; 
	//carName hanya bisa diakses oleh fungsi scope1()
	x = document.getElementById("scope03");
	x.innerHTML=carName;
	x.style.fontSize="30px";
	x.style.color="orange";
}
window.carName;
function scope4() {
	var carName ='Gallardo'; 
	//carName hanya bisa diakses oleh fungsi scope1()
	x = document.getElementById("scope04");
	x.innerHTML=window.carName;
	x.style.fontSize="30px";
	x.style.color="orange";
}

//PAGE STRINGS 
function strings1(){
	document.getElementById("strings01").innerHTML=
	"Hello JavaScript !";
}
function strings2(){
	document.getElementById("strings02").innerHTML="Hello \
	JavaScript !";
}
function strings3(){
	document.getElementById("strings03").innerHTML="Hello " +
	"JavaScript !";
}
function strings4(){
	var x ="Jigol";
	var y = new String('Jigol');
	var z = (x==y)
	a = document.getElementById("strings04");
	a.innerHTML= z;
	a.style.textTransform="uppercase";
}
function strings5(){
	var x = "Jigol";
	var y = new String('Jigol');
	var z = (x===y)
	a = document.getElementById("strings05");
	a.innerHTML= z;
	a.style.textTransform="uppercase";
}
function strings6(){
	var x = new String("Jigol");
	var y = new String('Jigol');
	var z = (x===y)
	a = document.getElementById("strings06");
	a.innerHTML= z;
	a.style.textTransform="uppercase";
}
function stringmethods1(){
	var txt ="disini aku akan mencarikan posisi kata 'kamu' di dalam kalimat ini";
	posisi = txt.indexOf("aku");
	document.getElementById("stringmethods01").innerHTML=posisi;
}
function stringmethods2(){
	var txt ="disini aku akan mencarikan posisi kata 'aku' di dalam kalimat ini";
	posisi = txt.lastIndexOf("aku");
	document.getElementById("stringmethods02").innerHTML=posisi;
}
function stringmethods3(){
	var txt ="disini aku akan mencarikan posisi kata 'aku' di dalam kalimat ini";
	posisi = txt.search("aku");
	document.getElementById("stringmethods03").innerHTML=posisi;
}
function stringmethods4(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.slice(6,12);
	document.getElementById("stringmethods04").innerHTML=posisi;
}
function stringmethods5(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.slice(-21, -15);
	document.getElementById("stringmethods05").innerHTML=posisi;
}
function stringmethods6(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.slice(6);
	document.getElementById("stringmethods06").innerHTML=posisi;
}
function stringmethods7(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.slice(-15);
	document.getElementById("stringmethods07").innerHTML=posisi;
}
function stringmethods8(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.substring(6,12);
	document.getElementById("stringmethods08").innerHTML=posisi;
}
function stringmethods9(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.substr(6,6);
	document.getElementById("stringmethods09").innerHTML=posisi;
}
function stringmethods10(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.replace("Apel","Melon");
	document.getElementById("stringmethods10").innerHTML=posisi;
}
function stringmethods11(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.replace(/Apel/g,"Melon");
	document.getElementById("stringmethods11").innerHTML=posisi;
}
function stringmethods12(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.toUpperCase();
	document.getElementById("stringmethods12").innerHTML=posisi;
}
function stringmethods13(){
	var buah ='Apel, Mangga, Jeruk, Anggur';
	posisi = buah.toLowerCase();
	document.getElementById("stringmethods13").innerHTML=posisi;
}
function stringmethods14(){
	var kata1 = "I Love You";
	kata2 = "My Family";
	kata3 = kata1.concat(" ", kata2);
	document.getElementById("stringmethods14").innerHTML=kata3;
}
function stringmethods15(){
	var kata1 = "Hello World";
	kata2 = kata1.charAt(0);
	document.getElementById("stringmethods15").innerHTML=kata2;
}
function stringmethods16(){
	var kata1 = "Hello World";
	kata2 = kata1.charCodeAt(0);
	document.getElementById("stringmethods16").innerHTML=kata2;
}
function stringmethods17(){
	var str="a, b, c, d, e, f";
	var arr=str.split(",");
	document.getElementById("stringmethods17").innerHTML=arr[0];
}
function stringmethods18(){
	var str="Hello";
	var arr=str.split("");
	document.getElementById("stringmethods18").innerHTML=arr[0];
}

//PAGE NUMBER
function numbers1(){
	var x = 999999999999999;
	var y = 9999999999999999;
	document.getElementById("numbers01").innerHTML=
	"nilai x adalah "+' ' + x + "<br>" + "nilai y adalah " +" " +y;
}
function numbers2(){
	var x = 0.2 + 0.1;
	y = document.getElementById("numbers02");
	y.innerHTML= x;
	y.style.fontSize="20px";
}
function numbers3(){
	var x = ( 0.2 * 10 + 0.1 * 10) / 10;
	y = document.getElementById("numbers03");
	y.innerHTML= x;
	y.style.fontSize="15px";
}
function numbers4(){
	var x = 0xFF;
	y = document.getElementById("numbers04");
	y.innerHTML= x;
	y.style.fontSize="15px";
}
function numbers5(){
	var myNumber = 128;
	y = document.getElementById("numbers05");
	y.innerHTML= myNumber.toString(16)+"hex"+" "+myNumber.toString(8)+
	"oct"+" "+myNumber.toString(2)+"biner";
	y.style.fontSize="13px";
}
function numbers6() {
    var myNumber = 2; 
    var txt = "";
    while (myNumber != Infinity) {
        myNumber = myNumber * myNumber;
        txt = txt + myNumber + "<br>";
    }
    document.getElementById("numbers06").innerHTML = txt;
}
function numbers7() {
    var myNumber = 2 / 0;
    var myNumber2 = -2/0;    
    document.getElementById("numbers07").innerHTML = myNumber + '<br>' + myNumber2;
}
function numbers8() {
	var x = typeof Infinity;
    document.getElementById("numbers08").innerHTML = x;
}
function numbers9() {
	var x = 100 * 'jeruk';
    document.getElementById("numbers09").innerHTML = x;
}
function numbers10() {
	var x = 100 * '90';
    document.getElementById("numbers10").innerHTML = x;
}
function numbers11() {
	var x = 100 * 'Ade';
	var y = isNaN(x);
    document.getElementById("numbers11").innerHTML = y;
}
function numbers12() {
	var x = NaN;
	var y = 27;
	var z = x + y;
    document.getElementById("numbers12").innerHTML = z;
}
function numbers13() {
	var x = NaN;
	var y = "27";
	var z = x + y;
    document.getElementById("numbers13").innerHTML = z;
}
function numbers14() {
	var x = NaN;
    document.getElementById("numbers14").innerHTML = typeof x;
}
function numbers15() {
	var x = 123;
	var y = new Number(123);
    document.getElementById("numbers15").innerHTML = 
    typeof x +"<br>"+ typeof y;
}
function numbers16() {
	var x = 123;
	var y = new Number(123);
	var z = (x==y);
    document.getElementById("numbers16").innerHTML = z;
}
function numbers17() {
	var x = 123;
	var y = new Number(123);
	var z = (x===y);
    document.getElementById("numbers17").innerHTML = z;
}
function numbers18() {
	var x = new Number(123);
	var y = new Number(123);
	var z = (x===y);
    document.getElementById("numbers18").innerHTML = z;
}
/*
function numbers19() {
	var x = 1;				//masih error
	var x = Number.MIN_VALUE;
    document.getElementById("numbers19").innerHTML = x;
}
*/
function numbers20() {
	var x = 1234567890;
	var y = new Number(123);
	var z = y.MAX_VALUE;
    document.getElementById("numbers20").innerHTML = z;
}
//PAGE NUMBER METHODS
function numbermethods1(){
	var x = 123;
	document.getElementById('numbermethods01').innerHTML=
	x.toString() +'<br>'+(123).toString()+'<br>'+(100+23).toString();
}
function numbermethods2(){
	var x = 5.2957;
	document.getElementById('numbermethods02').innerHTML=
	"Exponent 2 menjadi " + x.toExponential(2) + "<br>" + 
	"Exponent 4 menjadi " + x.toExponential(4) + '<br>' +
	"Exponent 6 menjadi " + x.toExponential(6) + "<br>" +
	"Exponent 8 menjadi " + x.toExponential(8);
}
function numbermethods3(){
	var x = 5.2957;
	document.getElementById('numbermethods03').innerHTML=
	"Fixed (pembulatan) 0 menjadi " + x.toFixed(0) + "<br>" + 
	"Fixed (pembulatan) 2 menjadi " + x.toFixed(2) + '<br>' +
	"Fixed (pembulatan) 4 menjadi " + x.toFixed(4) + "<br>" +
	"Fixed (pembulatan) 6 menjadi " + x.toFixed(6);
}
function numbermethods4(){
	var x = 5.2957;
	document.getElementById('numbermethods04').innerHTML=
	"Precision (ketelitian) menjadi " + x.toPrecision() + "<br>" + 
	"Precision (ketelitian) 2 menjadi " + x.toPrecision(2) + "<br>" +
	"Precision (ketelitian) 4 menjadi " + x.toPrecision(4) + "<br>" +
	"Precision (ketelitian) 6 menjadi " + x.toPrecision(6);
}
function numbermethods5(){
	var a = true;
	var b = false;
	var c = "10";
	var d = new Date();
	var e = "10 20";
	document.getElementById('numbermethods05').innerHTML=
	'Number (nilai) dari true adalah ' + Number(a) +"<br>"+
	"Number (nilai) dari false adalah " + Number(b) +"<br>"+
	"Number (nilai) dari '10' adalah " + Number(c) +"<br>"+
	"Number (nilai) dari new Date() adalah " + Number(d) +"<br>"+
	'Number (nilai) nilai dari "10 20 adalah "' + Number(e);
}
function numbermethods6(){
	var a = parseInt("10");
	var b = parseInt("10 20 30");
	var c = parseInt('10.99');
	var d = parseInt('10 tahun');
	var e = parseInt("tahun ke 10");
	document.getElementById('numbermethods06').innerHTML=
	a +"<br>"+ b +"<br>"+ c +"<br>"+ d +"<br>"+ e;
}
function numbermethods7(){
	var a = parseFloat("10");
	var b = parseFloat("10 20 30");
	var c = parseFloat('10.99');
	var d = parseFloat('10 tahun');
	var e = parseFloat("tahun ke 10");
	document.getElementById('numbermethods07').innerHTML=
	a +"<br>"+ b +"<br>"+ c +"<br>"+ d +"<br>"+ e;
}
function numbermethods8(){
	var a = 255 ;
	var b = a.valueOf() ;
	var c = (255).valueOf() ;
	var d = (200+50+5).valueOf() ;
	document.getElementById('numbermethods08').innerHTML=
	" a adalah " + a +"<br>"+ 
	"valueOf() dari a adalah " + b +"<br>"+ 
	'valueO() dari (255) adalah ' + c +"<br>"+
	"valuOf() dari (200+50+5) adalah "  + d ;
}

//PAGE MATH OBJECT
function mathobject1(){
	document.getElementById('mathobject01').innerHTML=
	Math.min(-100, 300, -500, 900,1,0);
}
function mathobject2(){
	document.getElementById('mathobject02').innerHTML=
	Math.max(-100, 300, -500, 900,1,0);
}
/*
function mathobject3(){
	x = (1, 2);					//belum mengerti !!!
	document.getElementById('mathobject03').innerHTML=
	Math.random(x);
}
*/
function mathobject4(){
	document.getElementById('mathobject04').innerHTML=
	'4.7 direntetkan atau dibulatkan menjadi ' + Math.round(4.7) + "<br>"+
	'4.4 direntetkan atau dibulatkan menjadi ' + Math.round(4.4);
}
function mathobject5(){
	document.getElementById('mathobject05').innerHTML=
	'4.4 direntetkan atau dibulatkan ke atas menjadi ' + Math.ceil(4.4);
}
function mathobject6(){
	document.getElementById('mathobject06').innerHTML=
	'4.4 direntetkan atau dibulatkan ke bawah menjadi ' + Math.floor(4.4);
}
function mathobject7(){
	document.getElementById('mathobject07').innerHTML=
	Math.floor(Math.random()*11);
}
function mathobject8(){
	document.getElementById('mathobject08').innerHTML=
	Math.E + "<br>"+
	Math.PI + "<br>"+
	Math.SQRT2 + "<br>"+
	Math.SQRT1_2  + "<br>"+			//masih belum mengerti
	Math.LN2  +  "<br>"+
	Math.LN10  + "<br>"+
	Math.LOG2E  + "<br>"+
	Math.LOG10E + "<br>"+
	"CONTOH INI MASIH BELUM DIMERNGERTI OLEH SAYA :)" ; 
}

//PAGE DATES
function $date1(){
	document.getElementById("$date01").innerHTML=Date();
}
function $date2(){
	var x = new Date();
	document.getElementById("$date02").innerHTML=x;
}
function $date3(){
	var x = new Date('January 14, 1998 00:00:00');
	document.getElementById("$date03").innerHTML=x;
}
function $date4(){
	var x = new Date(86400000);
	document.getElementById("$date04").innerHTML=x;
}
function $date5(){
	var x = new Date(2015,6,17,13,15,30,0);
	document.getElementById("$date05").innerHTML=x;
}
function $date6(){
	var x = new Date(2015,6,17);
	document.getElementById("$date06").innerHTML=x;
}
function $date7(){
	var x = new Date();
	document.getElementById("$date07").innerHTML=x;
}
function $date8(){
	var x = new Date();
	document.getElementById("$date08").innerHTML=x.toString();
}
function $date9(){
	var x = new Date();
	document.getElementById("$date09").innerHTML=x.toUTCString();
}
function $date10(){
	var x = new Date();
	document.getElementById("$date10").innerHTML=x.toDateString();
}

//PAGE DATE FORMATS
function $dateformats1(){
	var x = new Date("2007-12-30");
	document.getElementById("$dateformats01").innerHTML=x;
}
function $dateformats2(){
	var x = new Date("2007-12");
	document.getElementById("$dateformats02").innerHTML=x;
}
function $dateformats3(){
	var x = new Date("2007");
	document.getElementById("$dateformats03").innerHTML=x;
}
function $dateformats4(){
	var x = new Date("2007-12-30T12:30:00");
	document.getElementById("$dateformats04").innerHTML=x;
}
function $dateformats5(){
	var x = new Date(" Apr 05 1999 ");
	document.getElementById("$dateformats05").innerHTML=x;
}
function $dateformats6(){
	var x = new Date("05  Apr 1999");
	document.getElementById("$dateformats06").innerHTML=x;
}
function $dateformats7(){
	var x = new Date(" April 05 1999");
	document.getElementById("$dateformats07").innerHTML=x;
}
function $dateformats8(){
	var x = new Date(" Apr 05 1999");
	document.getElementById("$dateformats08").innerHTML=x;
}
function $dateformats9(){
	var x = new Date(" JANUARY, 14, 1998");
	document.getElementById("$dateformats09").innerHTML=x;
}
function $dateformats10(){
	var x = new Date("01/05/1999");
	document.getElementById("$dateformats10").innerHTML=x;
}
function $dateformats11(){
	var x = new Date("1998/05/27");
	document.getElementById("$dateformats11").innerHTML=x;
}
function $dateformats12(){
	var x = new Date("Wed Mar 25 2015 09:56:24 GMT+0100 (W. Europe Standard Time)");
	document.getElementById("$dateformats12").innerHTML=x;
}
function $dateformats13(){
	var x = new Date("Fri Mar 25 2015 09:56:24 GMT+0100 (Tokyo Time)");
	document.getElementById("$dateformats13").innerHTML=x;
}
function $datemethods1(){
	var x = new Date();
	document.getElementById("$datemethods01").innerHTML=x.getTime();
}
function $datemethods2(){
	var x = new Date();
	document.getElementById("$datemethods02").innerHTML=x.getFullYear();
}
function $datemethods3(){
	var x = new Date();
	document.getElementById("$datemethods03").innerHTML=x.getDay();
}
function $datemethods4(){
	var x = new Date();
	var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
	document.getElementById("$datemethods04").innerHTML=hari[x.getDay()];
}
function $datemethods5(){
	var x = new Date();
	x.setFullYear(2020,0,14);
	document.getElementById("$datemethods05").innerHTML= x;
}
function $datemethods6(){
	var x = new Date();
	x.setDate(27);
	document.getElementById("$datemethods06").innerHTML= x;
}
function $datemethods7(){
	var x = new Date();
	x.setDate(x.getDate()-50);
	document.getElementById("$datemethods07").innerHTML= x;
}
function $datemethods8(){
	var msec = Date.parse("29 Feb,2010");
	document.getElementById("$datemethods08").innerHTML= msec;
}
function $datemethods9(){
	var msec = Date.parse("29 Feb,2010");
	var d = new Date(msec);
	document.getElementById("$datemethods09").innerHTML= d;
}
function $datemethods10(){
	var today, someday, text;	 
	today = new Date();
	someday = new Date();
	someday.setFullYear(2100, 0, 14); 
	if(someday > today){
		text="Hari ini belum 14 Januari 2100";
	} else {
	text="Hari ini sudah 14 Januari 2100";
	}
	document.getElementById("$datemethods10").innerHTML=text;
}

//PAGE ARRAY
function $arrays1(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	document.getElementById("$arrays01").innerHTML=animes[0];
}
function $arrays2(){
	var animes = ["Naruto", 
	"Dragon Ball", 
	"Yu-Gi-Oh!", 
	'Doraemon'
	];
	document.getElementById("$arrays02").innerHTML=animes[2];
}
function $arrays3(){
	var cars = new Array("Gallardo", "Nissan", 'Audi', "RX-8");
	document.getElementById("$arrays03").innerHTML=cars[3];
}
function $arrays4(){
	var person = ["Fajar", "Ade", 'Pamungkas'];
	document.getElementById("$arrays04").innerHTML=person[0];
}
function $arrays5(){
	var person = {firstName: "Fajar", middleName: "Ade", lastName: 'Pamungkas'};
	document.getElementById("$arrays05").innerHTML=person.middleName;
}
function $arrays6(){
	var saudara = [
		"Andi Oka Mahendra", 
		"Iqbal Abdillah", 
		"Rizki Ade Pangestu", 
		"Fajar Ade Pamungkas"];
	document.getElementById("$arrays06").innerHTML=saudara.length;
}
function $arrays7(){
	var saudara = [
		"Andi Oka Mahendra ",  
		"Iqbal Abdillah ", 
		"Rizki Ade Pangestu ", 
		"Fajar Ade Pamungkas " ];
	saudara.push('Ella');
	document.getElementById("$arrays07").innerHTML=saudara;
}
function $arrays8(){
	var saudara = [
		"Andi Oka Mahendra ",  
		"Iqbal Abdillah ", 
		"Rizki Ade Pangestu ", 
		"Fajar Ade Pamungkas " ];
	saudara[saudara.length] = "Ella";
	document.getElementById("$arrays08").innerHTML=saudara;
}
function $arrays9(){
	var saudara = [
		"Andi Oka Mahendra ",  
		"Iqbal Abdillah ", 
		"Rizki Ade Pangestu ", 
		"Fajar Ade Pamungkas " ];
	saudara[10] = "Ella";
	document.getElementById("$arrays09").innerHTML=saudara;
}
function $arrays10(){
	var index,text, fruits;
	var text = "";
	var fruits = [" Apel", ' Mangga', " Jeruk", " Anggur"];
	for(index = 0; index < fruits.length; index++){
		text += fruits[index];
	}
	document.getElementById("$arrays10").innerHTML=text;
}
function $arrays11(){
	var player = [];
	player[0] = "Draxler";
	player[1] = 'De Bruyne';
	player[2] = "Özil";
	document.getElementById("$arrays11").innerHTML= player.length + 
	"<br>"+player[2];
}
function $arrays12(){
	var player = [];
	player["asRoma"] = "Draxler";
	player["manCity"] = 'De Bruyne';
	player["arsenal"] = "Özil";
	document.getElementById("$arrays12").innerHTML= player.length +
	 "<br>"+player[2];
}
function $arrays13(){
	var point= new Array(10);
	document.getElementById("$arrays13").innerHTML= point;
}
function $arrays14(){
	var points = [10, 9, 8, 7, 6];
	document.getElementById("$arrays14").innerHTML= typeof points;
}
function $arrays15(){
	var points = [10, 9, 8, 7, 6];
	document.getElementById("$arrays15").innerHTML= Array.isArray(points) ;
}
function $arrays17(){
	var points = [10, 9, 8, 7, 6];
	document.getElementById("$arrays17").innerHTML= points instanceof Array ;
}
// PAGE ARRAY METHODS
function $arraymethods1(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	document.getElementById("$arraymethods01").innerHTML= animes.toString();
}
function $arraymethods2(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	document.getElementById("$arraymethods02").innerHTML= animes.join("~");
}
function $arraymethods3(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	document.getElementById("$arraymethods03").innerHTML= 
	animes.pop();
}
function $arraymethods4(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	x = animes.pop();
	document.getElementById("$arraymethods04").innerHTML= x;
}
function $arraymethods5(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	x = animes.push("Boruto");
	document.getElementById("$arraymethods05").innerHTML= x;
}
function $arraymethods6(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	x = animes.push("Boruto");
	document.getElementById("$arraymethods06").innerHTML= x;
}
function $arraymethods7(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	x = animes.shift();
	document.getElementById("$arraymethods07").innerHTML= x;
}
function $arraymethods8(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	x = animes.unshift("Boruto", 'saint saiyans');
	document.getElementById("$arraymethods08").innerHTML= x;
}
function $arraymethods9(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	animes[0] = "One Piece";
	document.getElementById("$arraymethods09").innerHTML= animes[0];
}
function $arraymethods10(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	animes[animes.length] = "One Piece";
	document.getElementById("$arraymethods10").innerHTML= animes;
}
function $arraymethods11(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	delete animes[0] ;
	document.getElementById("$arraymethods11").innerHTML= animes;
}
function $arraymethods12(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon'];
	animes.splice(0, 3, "Boruto", "Saint Saiyans");
	document.getElementById("$arraymethods12").innerHTML= animes;
}
function $arraymethods13(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon',"Boruto",
	"Saint Saiyans","Bleach","One Piece","Fairy Tall"];
	animes.sort();
	document.getElementById("$arraymethods13").innerHTML= animes;
}
function $arraymethods14(){
	var animes = ["Naruto", "Dragon Ball", "Yu-Gi-Oh!", 'Doraemon',"Boruto",
	"Saint Saiyans","Bleach","One Piece", "Fairy Tall", "Saint Saiyan"];
	animes.reverse();
	document.getElementById("$arraymethods14").innerHTML= animes;
}
function $arraymethods18(){
	var premierLeague = ["Man City", "MU", "Liverpool"];
	var	BBVA = ["Barcelona", "Real Madrid"];
	var	bundesLiga = ["Bayern Munchen", "Dotchmund"]; 
	var championShip = premierLeague.concat(BBVA+bundesLiga);	
	document.getElementById("$arraymethods18").innerHTML= championShip ;
}
function $arraymethods19(){
	var club1 = ["Man City", "MU", "Liverpool"];
	var	club2 = ["Barcelona", "Real Madrid"];
	var	club3 = ["Bayern Munchen", "Dotchmund"]; 
	var championShip = club1.concat( club2, club3 );	
	document.getElementById("$arraymethods19").innerHTML= championShip ;
}
function $arraymethods20(){
	var club1 = ["Man City", "MU", "Liverpool"];
	var	club2 = ["Barcelona", "Real Madrid"];
	var	club3 = ["Bayern Munchen", "Dotchmund"]; 
	var championShip = club1.concat( club2, club3 );	
	document.getElementById("$arraymethods20").innerHTML= 
	championShip.slice(1) ;
}
function $arraymethods21(){
	var club1 = ["Man City", "MU", "Liverpool"];
	var	club2 = ["Barcelona", "Real Madrid"];
	var	club3 = ["Bayern Munchen", "Dotchmund"]; 
	var championShip = club1.concat( club2, club3 );	
	document.getElementById("$arraymethods21").innerHTML= 
	championShip.slice(1,3) ;
}
function $arraymethods22(){
	var championShip = ["Man City", 
	"MU", 
	"Liverpool",
	"Barcelona", 
	"Real Madrid",
	"Bayern Munchen", 
	"Dotchmund"
	]; 
	document.getElementById("$arraymethods22").innerHTML= championShip;
}
function $arraymethods23(){
	var championShip = ["Man City", 
	"MU", 
	"Liverpool",
	"Barcelona", 
	"Real Madrid",
	"Bayern Munchen", 
	"Dotchmund"
	]; 
	document.getElementById("$arraymethods23").innerHTML= championShip.toString();
}
function $arraymethods24(){
	var championShip = ["Man City", 
	"MU", 
	"Liverpool",
	"Barcelona", 
	"Real Madrid",
	"Bayern Munchen", 
	"Dotchmund"
	]; 
	document.getElementById("$arraymethods24").innerHTML= championShip.typeOf();
}

//PAGE BOOLEAN
function _booleans1(){
	document.getElementById("_booleans01").innerHTML=Boolean(8 > 0);
}
function _booleans2(){
	x = (8 > 0);
	document.getElementById("_booleans02").innerHTML=Boolean(8 > 0) + "<br>" + x;
}
function _booleans3(){
	b1 = "100 adalah " + Boolean(100);
	b2 ="-15 adalah "  + Boolean(-15);
	b3 = "3.14 adalah " + Boolean(3.14);
	b4 = "Bahkan string dengan kata 'false' pun adalah " + Boolean("false");
	b5 = "Expressions 6 - 7 + 8 * 5 / 0 adalah " + Boolean(6 - 7 + 8 * 5 / 0);
	b6 = "kondisi (7 > 3) adalah " + Boolean( 7 > 3 );
	document.getElementById("_booleans03").innerHTML=
	b1 + '<br>' + b2 + '<br>' + b3 + '<br>' + b4 + '<br>' + b5 + '<br>' + b6;
}
function _booleans4() {
	var x = 0;
	document.getElementById("_booleans04").innerHTML= Boolean(x);
}
function _booleans5() {
	var x = -0;
	document.getElementById("_booleans05").innerHTML= Boolean(x);
}
function _booleans6() {
	var x = "";
	document.getElementById("_booleans06").innerHTML= Boolean(x);
}
function _booleans7() {
	var x = undefined;
	document.getElementById("_booleans07").innerHTML= Boolean(x);
}
function _booleans8() {
	var x = null;
	document.getElementById("_booleans08").innerHTML= Boolean(x);
}
function _booleans9() {
	var x = false;
	document.getElementById("_booleans09").innerHTML= Boolean(x);
}
function _booleans10() {
	var x = NaN;
	document.getElementById("_booleans10").innerHTML= Boolean(x);
}

//PAGE FUNCTIONS
function fungsi1(){
	var katakan, jam;
	jam = new Date().getHours();
	if(jam < 8){
		katakan = "Selamat Pagi !";
	} else {
		katakan = "Sekarang sudah lewat jam 8 pagi ";
	}
	document.getElementById("fungsi01").innerHTML= katakan;
}
function fungsi2(){
	var katakan, jam;
	jam = new Date().getHours();
	if(jam < 18){
		katakan = " Good day ";
	} else {
		katakan = " Good evening ";
	}
	document.getElementById("fungsi02").innerHTML= katakan;
}
function fungsi3(){
	var katakan, jam;
	jam = new Date().getHours();
	if(jam < 18){
		katakan = " Good morning ";
	} else if(jam < 20) {
		katakan = " Good day ";
	} else {
		katakan = 'Good evening';
	}
	document.getElementById("fungsi03").innerHTML= katakan;
}
function mySwitch1(){
	var katakan;
	switch(new Date().getDay()) {
		case 0 :
			katakan = "Minggu";
			break;
		case 1 :
			katakan = 'Senin';
			break;
		case 2 :
			katakan = 'Selasa';
			break;
		case 3 :
			katakan = 'Rabu';
			break;
		case 4 :
			katakan = 'Kamis';
			break;
		case 5 :
			katakan = 'Jum\'at';
			break;
		case 6 :
			katakan = 'Sabtu';
			break;
	}
	document.getElementById("mySwitch01").innerHTML= "Hari ini adalah" +" "+ katakan;
}
function mySwitch2(){
	var katakan;
	switch(new Date().getDay()) {
		case 0 :
			katakan = "Minggu";
			break;
		case 6 :
			katakan = 'Sabtu';
			break;
		default :
			katakan = 'Sekarang bukan akhir pekan';
	}
	document.getElementById("mySwitch02").innerHTML= katakan;
}
function mySwitch3(){
	var katakan;
	switch(new Date().getDay()) {
		case 1 :
		case 2 :
		case 3 :
		default :
			katakan = "Weekend is still long";
			break;
		case 4 :
		case 5 :
			katakan = "Weekend is coming soon";
			break;
		case 6 :
		case 0 :
			katakan = "Right now is weekend";
			break;
	}
	document.getElementById("mySwitch03").innerHTML= katakan;
}