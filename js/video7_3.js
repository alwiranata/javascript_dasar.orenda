function jumlahVolumeTigaKubus(a, b, c) {


    return a * a * a + b * b * b + c * c * c;
}

var a = prompt('Masukkan sisi kubus a :');
var b = prompt('Masukkan sisi kubus b :');
var c = prompt('Masukkan sisi kubus c :');

console.log(jumlahVolumeTigaKubus(a, b, c));
