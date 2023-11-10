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

function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}
var a = parseInt(prompt('Masukkan nilai A'));
var b = parseInt(prompt('MAsukkan nilai B'));

var hasil = kali(tambah(a, b), tambah(a, b));
console.log(hasil);