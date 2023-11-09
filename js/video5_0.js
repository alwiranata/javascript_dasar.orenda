// var nama = prompt('Masukkan Nama')//'Input Nama
// console.log("Welcome " + nama);

// var tes = confirm('Are you sure?');
// alert(tes);
// console.log(tes);

// var nama = prompt('Your Name :');
// var test = confirm("Kamu Yakin?");
// if (test === true) {
//     alert('Welcome' + nama);
// } else {
//     alert('Not Found');
// }
alert('Welcome');
var next = confirm('Daftar SMK Muhammadiyah 2 Pekanbaru')
while (next === true) {
    var n = prompt('Masukkan Nama ');
    alert('Nama Kamu ' + n);

    var jur = prompt('Masukkan Jurusan ');
    alert('Jurusan Kamu ' + jur);

    console.log('Nama anda :' + n);
    console.log('Jurusan anda :' + jur);
    next = confirm('Ulangi lagi? ');

}

alert('Terima kasih telah mendaftar ');