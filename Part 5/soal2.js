// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal.
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 13; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = "7"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2090; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case "1":
        text = "Januari";
    break;
    case "2":
        text = "Februari";
    break;
    case "3":
        text = "Maret";
    break;
    case "4":
        text = "April";
    break;
    case "5":
        text = "Mei";
    break;
    case "6":
        text = "Juni";
    break;
    case "7":
        text = "Juli";
    break;
    case "8":
        text = "Agustus";
    break;
    case "9":
        text = "September";
    break;
    case "10":
        text = "Oktober";
    break;
    case "11":
        text = "November";
    break;
    case "12":
        text = "Desember";
    break;
}

console.log(tanggal,text,tahun);

//code switch case kamu disini
