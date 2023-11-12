// ini untuk input nama
// var nama = function (n) {
//     console.log(n)
// }
// var b = prompt('input your name');
// nama(b);


//1.menambah isi array
// var arr = [];
// arr[0] = "aldo";
// arr[1] = "wiranata";
// arr[2] = "16";
// arr[4] = "16";
// console.log(arr);

// 2.menghapus isi array
// var arr = ['Aldo', 'Wiranata'];
// arr[1] = undefined;
// console.log(arr)

// 3.Menampilkan isi array
// var arr = ['Aldo', 'Wiranata', 'alwi'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('Siswa ke ' + (i + 1) + ' : ' + arr[i]);
// }

//Method pada array
//1.join//memisahkan antara element array supaya rapi
// var arr = ['aldo', 'wiranata', '16'];
// console.log(arr.join(' - '));

//2.push dan pop
//push menamabahkan array paling belakang
// var arr = ['aldo', 'wiranata', '16'];
// arr.push('aldo', 'wiranata');//bisa tambah lebih dari 1
// console.log(arr.join(' - '));

//pop menghilangkan array paling belakang
// var arr = ['aldo', 'wiranata', '16'];
// arr.pop();//hanya mengahapus 1
// console.log(arr.join(' - '));

//unshift dan shift

//unshif menamabahkan array paling depan
// var arr = ['aldo', 'wiranata', '16'];
// arr.unshift('aldo', '12'); //bisa tambah lebih dari 1
// console.log(arr.join(' - '))

//shift menghilangkan array paling depan
var arr = ['aldo', 'wiranata'];
arr.shift()//menghapus 1
console.log(arr.join(' - '));


