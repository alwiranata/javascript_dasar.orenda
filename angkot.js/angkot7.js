var penumpang = ['aldo', undefined, 'wiranata'];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0) {
        //tambahpenumpang di awal array
        penumpang.push(namaPenumpang)
        //kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        //telusuri dari awal 
        for (var i = 0; i < penumpang.length; i++) {
            //jika ada kursi kosong
            if (penumpang[i] == undefined) {
                //tambah penumpang dikursi kosong
                penumpang[i] = namaPenumpang;
                //kembalikan isi array dan keluar dari function
                return penumpang;

            } else if (penumpang[i] == namaPenumpang) {
                //tampilkan pesan salah
                console.log('Penumpang sudah ada')
                //kembalikan isi array dan keluar dari function
                return penumpang;

            } else if (i == penumpang.length - 1) {
                //tambah penumpang diakhir array
                penumpang.push(namaPenumpang)

                //kembalikan isi array dan keluar dari function
                return penumpang;
            }



        }


    }
}