//Global Variables
let name = 'Farhan';
//Const = Var Tetap
const midname = 'Dwi';
//Let = Var yang bisa diubah
let umur = 20;
let DOB = "2002-10-04";
let punyaKTP = true;

//Output nama / name
console.log(name +" "+ midname +"\n"+ umur +"\n"+ DOB);

console.log("\n=====================================\n");

function cekUser(userName, userAge, userDOB, userKTP){
    //Local Variables
    let KTP;
    if (userKTP == true){
        KTP = "punya";
    }else{
        KTP = "tidak punya";
    }

    return "Nama saya adalah " + userName + "\ndan saya berumur " + userAge + " tahun.\nSaya lahir pada tanggal " + userDOB + "\ndan saya " + KTP + " KTP. ("+ userKTP +")";
}

console.log(cekUser(name, umur, DOB, punyaKTP));

console.log("\n=====================================\n");

punyaKTP = false;

console.log(cekUser(name, umur, DOB, punyaKTP));

console.log("\n=====================================\n");









