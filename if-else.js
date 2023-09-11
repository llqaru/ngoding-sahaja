let nilai = 55; 
// nilai siswa

console.log(nilai >=65);

if (nilai > 65){
    console.log("lulus")
    // kondisi pertama
} else {
    console.log("tidak lulus")
    // kondisi kedua
}

if (nilai >= 80 && nilai <=100){
    nilai = "A"
} else if (nilai >=70 && nilai <80){
    nilai = "B"
} else if (nilai >=60 && nilai <70){
    nilai = "C"
} else {
    nilai = "D"
}

console.log(nilai);

nilai = 50; //menyeting ulang nilai

let hasil = nilai >=80 && nilai <= 100;
console.log(hasil, "&&"); //harus terpenuhi semua kondisi untuk menghasilkan nilai true
let hasil2 = nilai >=80 || nilai <100;
console.log(hasil2, "||"); //salah satu kondisi terpenuhi maka akan menghasilkan nilai true

let x = nilai;
let y = "50";

hasil3 = x == y;
console.log(hasil3, "==");
hasil4 = x === y;
console.log(hasil4, "===");

// if else bersarang
let number = 3;
if (number > 5) {
   if (number % 2 === 0){
    console.log("lebih besar dari 5 dan genap");
   } else {
    console.log("lebih besar dari 5 dan ganjil");
   }
} else{
    if (number % 2 === 0){
        console.log("lebih kecil dari 5 dan genap");
    } else {
        console.log("lebih kecil dari 5 dan ganjil");
    }
}