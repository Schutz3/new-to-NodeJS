//Global Variables
var name = 'Farhan';
const midname = 'Dwi';
var umur = 20;
var DOB = "2002-10-04";
var punyaKTP = true;

//Output nama / name
console.log(name +" "+ midname +"\n"+ umur +"\n"+ DOB);

console.log("\n=====================================\n");

function cekUser(userName, userAge, userDOB, userKTP){
    //Local Variables
    var KTP;
    if (userKTP == true){
        KTP = "punya";
    }else{
        KTP = "tidak punya";
    }

    return "Nama saya adalah " + userName + "\ndan saya berumur " + userAge + " tahun.\nSaya lahir pada tanggal " + userDOB + "\ndan saya " + KTP + " KTP. ("+ userKTP +")";
}

console.log(cekUser(name, umur, DOB, punyaKTP));

console.log("\n=====================================\n");







