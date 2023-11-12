//this
// var a = 10;
// console.log(this.a);


//membuat object
//1. function declaration
// function hello() {
//     console.log(this);
//     console.log('halo');
// }
// this.hello();
//mengembalikan object global

//2. object literal
// var obj = { a: 10, nama: 'Aldo' };
// obj.halo = function () {
//     console.log(this);
//     console.log('halo')
// }
// obj.halo();
//mengembalikan object yang bersangkutan

//3.constructor function
// function Siswa() {
//     console.log(this);
//     console.log('halo');
// }
// var obj1 = new Siswa();
// var obj2 = new Siswa();
//mengembalikan object yang baru dibuat
