// operasi penjumlahan
const miegoreng = 3000;
const telur =2500;

let uang = 10000;
let hasil = miegoreng + telur;
console.log(uang - hasil, 'uang kembalian');

// uang atm
/*

cara memasukan uang ke atm
misal atm hanya bisa menerima uang maks 1 jt
lalu kita mau memasukan uang 1,5 jt

langkah awal
kita masukan uang 1 jt sekaligus ke mesin atm
jika kita masukan uang 1,5 jt maka akan ada peringatan

lalu kalau sudah memasukan uang 1 jt atau kurang dari itu
uang yang ada dikurangi uang yang masuk ke mesin atm

lakukan hal tersebut sampai semua uang masuk ke mesin atm

*/
// 

let atm = 0;
let uang1 = 1500000;
const maksatm = 1000000;

let hasil1 = uang1 - maksatm;
uang1 = hasil1;
console.log(uang1);

atm = maksatm;

let hasil2 = uang1 % maksatm;
console.log(atm + hasil2);
