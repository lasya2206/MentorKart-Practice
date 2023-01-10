const dt = new Date();
const ob1 = {}
const ob2 = {
    'one' : 1,
    'two' : 2,
    cb : () => console.log('called'),
    arr : [1,2,3,4,5],
    ob : {
        dt : '2023-01-01'
    },
    // st : newSet()
}
console.log(ob2);
console.log(`one ${ob2.one}`);


const ob3 = {a:1}
console.log(ob3)

for (let key in ob3){
    console.log(key);
    console.log(`key ${key}, value ${ob3[key]}`);
}

const obj3Keys = Object.keys(ob3);
console.log(ob3);
const ob3Values = Object.values(ob3)
console.log(ob3values)

const ob2keys = Object.keys(ob2)
console.log(ob2keys);

const bothKeys = [ob2Keys, ob3Keys]
console.log(bothKeys);

const empObj = {}
 const ob4 = {j : 1}

 Object.assign(empObj, ob4)
 console.log(empObj);