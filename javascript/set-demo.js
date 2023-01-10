const arr = [1,2,4,1,2,4]
const st = new Set(arr)
st.add(8)
console.log(st.has(10))
const ent = st.entries()
console.log(ent);
for(let el of ent){
    console.log(el)
    console.log(el[0], el[1]);
}