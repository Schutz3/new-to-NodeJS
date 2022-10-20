//Global Variables
let nama = 'Farhan';
//Const = Var Tetap
const midnama = 'Dwi';
//Let = Var yang bisa diubah
let umur = 20;
let DOB = "2002-10-04";
let punyaKTP = true;

//Output nama / nama
console.log(nama +" "+ midnama +"\n"+ umur +"\n"+ DOB);

console.log("\n=====================================\n");

function cekUser(usernama, userAge, userDOB, userKTP){
    //Local Variables
    let KTP;
    if (userKTP == true){
        KTP = "punya";
    }else{
        KTP = "tidak punya";
    }

    return "Nama saya adalah " + usernama + "\ndan saya berumur " + userAge + " tahun.\nSaya lahir pada tanggal " + userDOB + "\ndan saya " + KTP + " KTP. ("+ userKTP +")";
}

console.log(cekUser(nama, umur, DOB, punyaKTP));

console.log("\n=====================================\n");

punyaKTP = false;

console.log(cekUser(nama, umur, DOB, punyaKTP));

console.log("\n=====================================\n");

//Arrow Function
const cekUserV2 = (usernama, userAge, userDOB, userKTP) => {
    //Local Variables
    let KTP;
    if (userKTP == true){
        KTP = "punya";
    }else{
        KTP = "tidak punya";
    }

    return "Nama saya adalah " + usernama + "\ndan saya berumur " + userAge + " tahun.\nSaya lahir pada tanggal " + userDOB + "\ndan saya " + KTP + " KTP. ("+ userKTP +")";
}

const sum = (a, b) => a + b;
const mutliply = (a, b) => a * b;
const divide = (a, b) => a / b;
const substract = (a, b) => a - b;
const addOne = (a) => a + 1;
const randFunc = () => Math.random();

console.log(cekUserV2(nama, umur, DOB, punyaKTP));  
console.log(addOne(2));
console.log(sum(6, 9));
console.log(addOne(sum(6, 9)));
console.log(randFunc());


console.log("\n=====================================\n");
//Playing With Object
const person = {
    nama: 'Farhan',
    age: 20,
    DOB: '2002-10-04',

    // 1st Method
    // greeting: function() {
    //     cconsole.log("Nama saya adalah " + this.nama + "\ndan saya berumur " + this.age + " tahun.\nSaya lahir pada tanggal " + this.DOB);
    // }

    // 2nd Method
    greeting() {
        console.log("Nama saya adalah " + this.nama + "\ndan saya berumur " + this.age + " tahun.\nSaya lahir pada tanggal " + this.DOB);
    }
    


};

console.log(person);

console.log(person.nama);

person.greeting();

console.log("\n=====================================\n");
//Playing With Array
//THIS IS CONST SEE AT LINE 3
const hobbies = ['Membaca', 'Menulis', 'Menggambar', 'Mendengarkan Musik', 'Bermain Game'];
for (let hobby of hobbies){
    console.log(hobby);
}


console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

console.log("\n=====================================\n");
//Playing With Array Object Refrence Types

hobbies.push('Perogremming');
console.log(hobbies);

//THIS IS LET SEE AT LINE 5
let judulBuku = ['Harry Potter', 'The Hobbit', 'The Lord of the Rings', 'The Silmarillion', 'The Chronicles of Narnia'];
console.log(judulBuku);
judulBuku.push('The Hobbit');
judulBuku.push('The Lord of the Rings');
console.log(judulBuku);

console.log("\n=====================================\n");
//Playing Spread Rest Operators

const copiedArray1 = judulBuku.slice();
console.log(copiedArray1);
//OR
const copiedArray2 = [...judulBuku];
console.log(copiedArray2);

const toArray = (...args) => {
    return args;
};

console.log(toArray( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log(toArray( nama, midnama, umur,));

console.log("\n=====================================\n");
//Playing With Destructuring

const printnama = (person) => {
    console.log(person.nama);
}

const printnamaV2 = ({DOB}) => {
    console.log(DOB);
}

const { name, age } = person;
console.log(nama, age);

printnama(person);
printnamaV2(person);

const [Book1, Book2] = judulBuku;
console.log(Book1, Book2);

console.log("\n=====================================\n");
//Async Code Promises
//LEL
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('HaCkInG NASA On PrOgReSs');
        }, 1500);
    });
    return promise;
    }; 


setTimeout(() => {
    console.log('InJeCtInG ViRuS To NASA');
    fetchData()
    .then(text => {
        console.log(text + ' 10%');
        return fetchData();
    })
    .then(text2 => {
        console.log(text2 + ' 20%');
        return fetchData();
    })
    .then(text3 => {
        console.log(text3 + ' 30%');
        return fetchData();
    })
    .then(text4 => {
        console.log(text4 + ' 40%');
        return fetchData();
    })
    .then(text5 => {
        console.log(text5 + ' 50%');
        return fetchData();
    })
    .then(text6 => {
        console.log(text6 + ' 60%');
        return fetchData();
    })
    .then(text7 => {
        console.log(text7 + ' 70%');
        return fetchData();
    })
    .then(text8 => {
        console.log(text8 + ' 80%');
        return fetchData();
    })
    .then(text9 => {
        console.log(text9 + ' 90%');
        return fetchData();
    })
    .then(text10 => {
        console.log(text10 + ' 100% \nHaCkInG SuCcEsS');
        return fetchData();
    })
    .then(text11 => {
        console.log("\n=====================================\n");
    })

}, 2000); 

console.log("Hello "+nama+" Staring To Hack Nasa");



// setTimeout(() => {
//     console.log('NASA Hacked');
// }, 6000);









