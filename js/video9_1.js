//membuat object
//1.object literal
var mhs1 = {
    nama: "Aldo",
    nrp: "9320912819",
    email: "aldowiranata16@gmail.com",
    jurusan: "PPLG"
}

var mhs2 = {
    nama: "Alwi",
    nrp: "9320912810",
    email: "aldowiranata17@gmail.com",
    jurusan: "PPLG"
}

//2.Function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Aldo', '9321839',
    'alwiranata263@gmail.com', 'PPLG');


//3.constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    //var this = {} ;(sudah disediakan jika menggunakan constructor)
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    //return this; (sudah disediakan jika menggunakan constructor)
}

var mhs4 = new Mahasiswa('aldo', '93238191',
    'aldi10@gmail.com', 'PPLG');
