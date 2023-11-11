
// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }

//rekursif
// function tampilAngka(n) {
//     //base case(memberhentikan rekursif)
//     if (n === 0) {
//         return
//     }
//     console.log(n);
//     return tampilAngka(n - 1)
// }

// tampilAngka(10);

function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n - 1);

}
console.log(faktorial(5));
