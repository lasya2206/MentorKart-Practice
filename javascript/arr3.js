const arr = [1,2,4,1,2,5];
console.log(`Original`);
console.log(arr);
console.log(`Operations Output`);
for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}
arr.forEach(el => console.log(el))
const ind = arr.findIndex(el => el == 1)
console.log(`Index ${ind}`)
const el = arr.find(el => el>3)
console.log(`Element ${el}`);
const els = arr.filter(el => el>3)

console.log(`Every`);
const ev = arr.every(el => el>3)
console.log(`If Every Element is greater than 3 : ${ev}`);
const sm = arr.some(el => el >3 )
console.log({sm});
console.log(`Map`)
const sqArr = arr.map(el => el * el)
console.log(sqArr);
// Unshift
const nln1 = arr.unshift(56,90);
console.log(arr);
console.log(nln1);
// Shift
const rmfsl = arr.shift()
console.log(arr);
console.log(rmfsl);
 