// console.log("gayana")
// let nama = "ema"
// nama = "angel"
// console.log (nama)

// const umur = 20
// umur = 5
// console.log (umur)

// let a = 5
// let b = 4
// const penjumlahan = a+b 
// console.log (penjumlahan)

// let a = 5
// let b = 4
// const pengurangan = a-b
// console.log (pengurangan)

// let a = 10
// let b = 3
// const modulus = a%b
// console.log (modulus)

// let a = 10
// let b = 3
// const pangkat = a**b
// console.log (pangkat)

// kalo tipenya let artinya variabel bisa diubah , kalo const variable tdk bisa diubah

// alert ("awas cowo cakep")
// prompt("masukan nama")
// confirm("yakinnich??")
// const konfirmasi = confirm("yakinnich??")
// console.log (konfirmasi)

//perulangan
// for(let i = 0; i < 10; i++) {
//     console.log ("Data ke-" +i)   
// }

//pengkondisian
// let angka1 = 10
// if (angka1 > 15 && angka1 <= 20){
//     console.log ("Angka kebesaran")
// }else {
//     console.log ("angka kekecilan")

// switch (angka1){
//     case 15:
//         console.log ("angka adalah 15")
//         break
//     case 20:
//         console.log ("angka adalah 20")
//         break
//     default: 
//     console.log ("angka tdk ditemukan")
// }

//function
// function pertambahan(angka1,angka2){
//     return angka1+angka2
// }

// console.log (pertambahan(10,8))
// console.log (pertambahan(11,7))
// console.log (pertambahan(16,10))
// console.log (pertambahan(13,6))

// function isEvenOrOdd(angka){
//     if(angka % 2 == 0){
//         return "angka genap"
//     }else{
//         return "angka ganjil"
//     }
// }
// console.log (isEvenOrOdd(6))
// console.log (isEvenOrOdd(15))
// console.log (isEvenOrOdd(17))
// console.log (isEvenOrOdd(28))


function umur(age){
    if(age == null){
        return "umur tidak terdeteksi"
    }
    if(age >=0 && age <= 5 ){
        return "Balita"
    }else if(age >= 6 && age <= 12){
        return "Kanak-Kanak"
    }else if(age >= 13 && age <= 18){
        return "Remaja"
    }else if (age >= 19 && age <= 60){
        return "Dewasa"
    }else if(age >= 61){
        return "Lansia"
    }else {
        return "angka tidak boleh negatif"
    }
}
console.log (umur(4))
console.log (umur(-5))
console.log (umur(1000))
console.log (umur(0))
console.log (umur(60))
