function sq(num){
    const n = num
    const sqr = (n*n) + 10
    return sqr
}
function dvdchck(rs){
    const dvd = rs/45
    const sts = (dvd > 6)? 'normal data' : 'bad data'
    console.log(sts)
}
const rsvl = makesqradten(7)
dvdchck(rsvl)