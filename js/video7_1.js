// var a = prompt('Masukkan sisi kubus a :');
// var b = prompt('Masukkan sisi kubus b :');
// var c = prompt('Masukkan sisi kubus c :');

// var volumeA;
// var volumeB;
// var volumeC;

// volumeA = a * a * a;
// volumeB = b * b * b;
// volumeC = c * c * c;

// total = volumeA + volumeB + volumeC;
// console.log(total);


function jumlahVolumeTigaKubus(a, b, c) {
    volumeA = a * a * a;
    volumeB = b * b * b;
    volumeC = c * c * c;

    total = volumeA + volumeB + volumeC;

    return total;
}

var a = prompt('Masukkan sisi kubus a :');
var b = prompt('Masukkan sisi kubus b :');
var c = prompt('Masukkan sisi kubus c :');

console.log(jumlahVolumeTigaKubus(a, b, c));
