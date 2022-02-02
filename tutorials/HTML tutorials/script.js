function tampilkan01(){
    x = document.getElementById("sembunyikan01");
    x.style.display = "block";
}
function tampilkan02(){
    x = document.getElementById("sembunyikan02");
    x.style.display = "block";
}
function tampilkan03(){
    x = document.getElementById("sembunyikan03");
    x.style.display = "block";
}
function tampilkan04(){
    x = document.getElementById("sembunyikan04");
    x.style.display = "block";
}
function tampilkan05(){
    x = document.getElementById("sembunyikan05");
    x.style.display = "block";
}
function tampilkan06(){
    x = document.getElementById("sembunyikan06");
    x.style.display = "block";
}
function tampilkan07(){
    x = document.getElementById("sembunyikan07");
    x.style.display = "block";
}
function tampilkan08(){
    x = document.getElementById("sembunyikan08");
    x.style.display = "block";
}
function tampilkan09(){
    x = document.getElementById("sembunyikan09");
    x.style.display = "block";
}
function tampilkan10(){
    x = document.getElementById("sembunyikan10");
    x.style.display = "block";
}
function tampilkan11(){
    x = document.getElementById("sembunyikan11");
    x.style.display = "block";
}
function tampilkan12(){
    x = document.getElementById("sembunyikan12");
    x.style.display = "block";
}
function tampilkan13(){
    x = document.getElementById("sembunyikan13");
    x.style.display = "block";
}
function tampilkan14(){
    x = document.getElementById("sembunyikan14");
    x.style.display = "block";
}
function tampilkan15(){
    x = document.getElementById("sembunyikan15");
    x.style.display = "block";
}
function tampilkan16(){
    x = document.getElementById("sembunyikan16");
    x.style.display = "block";
}
function tampilkan17(){
    x = document.getElementById("sembunyikan17");
    x.style.display = "block";
}
function tampilkan18(){
    x = document.getElementById("sembunyikan18");
    x.style.display = "block";
}
function tampilkan19(){
    x = document.getElementById("sembunyikan19");
    x.style.display = "block";
}
function tampilkan20(){
    x = document.getElementById("sembunyikan20");
    x.style.display = "block";
}
function tampilkan21(){
    x = document.getElementById("sembunyikan21");
    x.style.display = "block";
}
function tampilkan22(){
    x = document.getElementById("sembunyikan22");
    x.style.display = "block";
}
function tampilkan23(){
    x = document.getElementById("sembunyikan23");
    x.style.display = "block";
}
function tampilkan24(){
    x = document.getElementById("sembunyikan24");
    x.style.display = "block";
}
function tampilkan25(){
    x = document.getElementById("sembunyikan25");
    x.style.display = "block";
}



/*SEARCH ENGINES*/
function mySearch() {
	var to;
	to = document.getElementById("myDropdown");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}


// FUNGSI PENCARIAN 2
function mySearch2() {
	var to;
	to = document.getElementById("myDropdown2");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction2() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput2");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown2");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}


// FUNGSI PENCARIAN 2
function mySearch3() {
	var to;
	to = document.getElementById("myDropdown3");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction3() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput3");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown3");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}

// FUNGSI PENCARIAN 4
function mySearch4() {
	var to;
	to = document.getElementById("myDropdown4");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction4() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput4");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown4");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}

// FUNGSI PENCARIAN 5
function mySearch5() {
	var to;
	to = document.getElementById("myDropdown5");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction5() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput5");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown5");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}


// FUNGSI PENCARIAN 6
function mySearch6() {
	var to;
	to = document.getElementById("myDropdown6");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction6() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput6");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown6");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}




// FUNGSI PENCARIAN 7
function mySearch7() {
	var to;
	to = document.getElementById("myDropdown7");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction7() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput7");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown7");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}

// FUNGSI PENCARIAN 8
function mySearch8() {
	var to;
	to = document.getElementById("myDropdown8");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction8() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput8");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown8");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}


// FUNGSI PENCARIAN 9
function mySearch9() {
	var to;
	to = document.getElementById("myDropdown9");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction9() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput9");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown9");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}


// FUNGSI PENCARIAN 10
function mySearch10() {
	var to;
	to = document.getElementById("myDropdown10");
	to.classList.toggle("show");
}
//SELALU PERHATIKAN NAMA ID DAN BAGIAN TAG NAME!!!!
function filterFunction10() {
	//Mendeklarasikan Variabel 
	var input, filter, ul, li, a, i;
	// Mencari element HTML dengan id="myInput"
	input = document.getElementById("myInput10");
	//Mengubah nilai input menjadi  Uppercase
	filter = input.value.toUpperCase();
	// Mencari element Element HTML dengan id="mydropdown"
	div = document.getElementById("myDropdown10");
	//mencari Element HTML dengan Nama Tag  a (untuj link)
	a = div.getElementsByTagName("a");
	// Program utama
	for (i = 0; i < a.length; i++) {
		if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display= 'none';
		}
	}
}