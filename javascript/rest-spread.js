function bypass(a,b,c){
    console.log(a,b,c);
}
const ob = {a:1,b:2,c:3}
bypass(ob.a,ob.b,ob.c)
bypass ({...ob});
const arr = [1,2,3]
bypass(...arr);
const arr1 = [7,8,9,10]
bypass({...arr1});
const arr2 = [100,300]
bypass (...arr2)