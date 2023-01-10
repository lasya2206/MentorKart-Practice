// const array = [1,2,3,4,5,6,7,8,9,10];
const array = new Array();
array.push(0);
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);
// Index of the Array
// Method 1
for(i = 0; i< array.length; i++){
    if(array[i] == 10 ){
        console.log(i)
        return
    }
}
// Method2
function check(i){
    return i >= 9
}
const position = array.findIndex(check);
console.log(position);