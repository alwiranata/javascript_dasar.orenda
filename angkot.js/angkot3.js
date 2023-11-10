var jmlAngkot = 10;
var angkotBeroperasi = 6;


for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot no ' + noAngkot + ' sedang beroperasi')
    } else {
        console.log('Angkot no ' + noAngkot + ' sedang tidak Beroperasi')
    }
}