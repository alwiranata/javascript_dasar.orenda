//4.splice
//->( indexAwal, mauDihapusBerapa, elementBaru, elementBaru,....)
// var arr = ['aldo', 'wiranata', 'now'];
// arr.splice(1, 2, 'aldi');
// console.log(arr.join(' - '));

//5.slice
//mengambil array dari index awal ditentukan dan index akhir ditnetukukan tapi index akhir tidak terbawak
//dan memindahkan ke array baru
var arr = ['aldo', 'wira', 'nata'];
var arr2 = arr.slice(1, 3)
console.log(arr2.join(' - '));
console.log(arr.join(' - '))
