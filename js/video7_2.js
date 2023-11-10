// function tambah(a, b) {
//     return a + b;
// }
// var a = parseInt(prompt('Masukkan nilai A'));
// var b = parseInt(prompt('MAsukkan nilai B'));
// console.log(tambah(a, b));

// function tambah(a, b) {
//     return a + b;
// }
// var a = parseInt(prompt('Masukkan nilai A'));
// var b = parseInt(prompt('MAsukkan nilai B'));
// var hasil = tambah(a, b);
// console.log(hasil);

// function tambah(a, b) {
//     return a + b;
// }
// var a = parseInt(prompt('Masukkan nilai A'));
// var b = parseInt(prompt('MAsukkan nilai B'));
// var hasil = tambah(a * b, a * b);
// console.log(hasil);

// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b;
// }
// var a = parseInt(prompt('Masukkan nilai A'));
// var b = parseInt(prompt('MAsukkan nilai B'));

// var hasil = kali(tambah(a, b), tambah(a, b));
// console.log(hasil);

//argument kalau berlebih maka nilai nya akan diabaikan
// function tambah(a, b) {
//     return a + b;
// }

// var a = parseInt(prompt('Masukkan nilai A'));
// var b = parseInt(prompt('MAsukkan nilai B'));
// console.log(tambah(a, b, c));

// parameter kalau berlebih maka nilai nya akan undefined
// function tambah(a, b, c) {
//     return a + b;
// }

// var a = parseInt(prompt('Masukkan nilai A'));
// var b = parseInt(prompt('MAsukkan nilai B'));
// console.log(tambah(a, b));


//sudo variabel arguments
function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil
}

var coba = tambah(1, 2, 3, 4, 5);
console.log(coba);


