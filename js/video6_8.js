// var s = '';
// var h = prompt('Masukkan  horizontal yang diinginkan')
// var v = prompt('Masukkan veritkal yang diinginkan')
// for (var i = 0; i < v; i++) {
//     for (var j = 0; j < h; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// //atas ke bawah
// var s = '';
// var h = prompt('Masukkan  horizontal yang diinginkan')
// var v = prompt('Masukkan veritkal yang diinginkan')
// for (var i = 0; i < v; i++) {
//     for (var j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//bawah ke atas
var s = '';
for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);