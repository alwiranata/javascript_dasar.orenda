// var nama = function () {

//     console.log('Hello ' + a);
// }
// var a = prompt('Input Nama');
// nama(a);

//global scope /window scope

var a = 1;

function tes(a) {
    //name conflict
    console.log(a)

}

tes(a);
console.log(a);

