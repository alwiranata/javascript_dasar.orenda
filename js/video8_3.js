//6.forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8,];
// var nama = ['Aldo', 'Wiranata', 'aldi'];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// var cetak = (function (e) {
//     console.log(e);
// });
// angka.forEach(cetak)

// nama.forEach(function (e, i) {
//     console.log('Siswa ke- ' + (i + 1) + ' : ' + e)
// });

// //7.map
// var angka = [1, 2, 10, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// //8.sort 
//mengurutkan dari yang kecil ke - besar
var angka = [1, 2, 10, 4, 5, 6, 7, 8];
angka.sort(function (a, b) {
    return a - b;
});
console.log(angka.join(' - '))



