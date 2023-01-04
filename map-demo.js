const mp = new Map([
    [0, 'Zero'],
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three']
])
mp.set(4, 'Four')
console.log(mp);

mp.delete(1)
console.log(mp);