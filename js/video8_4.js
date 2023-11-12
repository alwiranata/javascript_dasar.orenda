//9.filter
//mencari nilai  pada array dan  mengembalikan nilai dalam bentuk array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var angka2 = angka.filter(function (x) {
//     return x > 5;
// });
// console.log(angka2.join(' - '))

//9.find
//menacari 1 nilai dan yang diambil hanay nilai pertama
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var angka2 = angka.find(function (x) {
    return x > 5;
});
console.log(angka2)//tidak menggunakan joun karena bukan array