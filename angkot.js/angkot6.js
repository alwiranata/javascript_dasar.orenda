var jmlAngkot = 10;
var angkotBeroperasi = 6;


for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('Angkot no ' + noAngkot + ' sedang beroperasi')
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot no ' + noAngkot + ' sedang lembur')
    } else {
        console.log('Angkot no ' + noAngkot + ' sedang tidak Beroperasi')
    }
}