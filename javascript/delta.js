function avgSum1(){
    let delta = 10
    const retire = () => 10*delta++
    delta = 322
    return retire
}
function avgSum2(sm){
    sm()
}
const avg1 = avgSum1()
console.log(avg1())
const calcDelta = () => 0.5
avgSum2(calcDelta)