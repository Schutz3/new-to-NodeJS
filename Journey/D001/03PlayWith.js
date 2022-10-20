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

//Arrow Function
const cekUserV2 = (userName, userAge, userDOB, userKTP) => {
    //Local Variables
    let KTP;
    if (userKTP == true){
        KTP = "punya";
    }else{
        KTP = "tidak punya";
    }

    return "Nama saya adalah " + userName + "\ndan saya berumur " + userAge + " tahun.\nSaya lahir pada tanggal " + userDOB + "\ndan saya " + KTP + " KTP. ("+ userKTP +")";
}

const sum = (a, b) => a + b;
const mutliply = (a, b) => a * b;
const divide = (a, b) => a / b;
const substract = (a, b) => a - b;
const addOne = (a) => a + 1;
const randFunc = () => Math.random();

console.log(cekUserV2(name, umur, DOB, punyaKTP));  
console.log(addOne(2));
console.log(sum(6, 9));
console.log(addOne(sum(6, 9)));
console.log(randFunc());


console.log("\n=====================================\n");

const person = {
    name: 'Farhan',
    age: 20,
    DOB: '2002-10-04',

    // 1st Method
    // greeting: function() {
    //     cconsole.log("Nama saya adalah " + this.name + "\ndan saya berumur " + this.age + " tahun.\nSaya lahir pada tanggal " + this.DOB);
    // }

    // 2nd Method
    greeting() {
        console.log("Nama saya adalah " + this.name + "\ndan saya berumur " + this.age + " tahun.\nSaya lahir pada tanggal " + this.DOB);
    }
    


};

console.log(person);

console.log(person.name);

person.greeting();

console.log("\n=====================================\n");








