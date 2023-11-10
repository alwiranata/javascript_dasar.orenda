//menagngkap pilihan player
var lagi = 'true'
while (lagi) {


    var p = prompt('masukkan pilihan (gajah, semut ,orang )');
    //menagkap pilihan computer
    //menampilkan bilangan random
    var comp = Math.random();


    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }


    //menentukan rules 1
    // if (p == comp) {
    //     hasil = 'seri'
    // } else if (p == 'gajah') {
    //     if (comp == 'orang') {
    //         hasil = 'menang';
    //     } else {
    //         hasil = 'kalah';
    //     }
    // } else if (p == 'orang') {
    //     if (comp == 'semut') {
    //         hasil = 'menang';
    //     } else {
    //         hasil = 'kalah';
    //     }
    // } else if (p == 'semut') {
    //     if (comp == 'gajah') {
    //         hasil = 'menang';
    //     } else {
    //         hasil = 'kalah';
    //     }
    // } else {
    //     hasil = ' kamu memasukkan pilihan yang salah';
    // }
    //tampilkan hasilnya
    // alert('Player memlih : ' + p + '\nkomputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    //menentukan rules 2
    if (p == comp) {
        hasil = 'seri'
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'Menang' : 'Kalah'
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'kalah' : 'Menang'
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'Menang' : 'Kalah'
    } else {
        hasil = ' kamu memasukkan pilihan yang salah';
    }
    alert('Player memlih : ' + p + '\nkomputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    lagi = confirm('Main lagi');
}
alert('Terima kasih telah bermain');