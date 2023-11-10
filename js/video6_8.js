var s = '';
var b = prompt('Masukkan jumlah kolom yang diinginkan')
var k = prompt('Masukkan total * yang diinginkan')
for (var i = 0; i < b; i++) {
    for (var j = 0; j < k; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);