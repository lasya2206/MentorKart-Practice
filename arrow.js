// Traditional function representation
function ab(n){
    return n*n
    
}
const c = ab(10)
ab();
// Anonymous Functions
const a = function(n){
    return n*n
}
const d = a(10);
// Arrow Functions
// First Way
const Arrow = (n) =>{
    console.log(this)
    return n*n
}
const s = Arrow(10);
// Method2
const arrow = n => n*n
const f = arrow(10);