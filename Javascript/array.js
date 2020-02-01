let ary = [1, 2, 3, 2]
console.log(ary.every(i => typeof i === "number"))
let ary1 = [1, 2, 3, 4]
console.log([1, 2, 3, 4].copyWithin(0, 2, 3))
console.log([1, 2, 3, 4].filter(i => i > 2))
console.log([1, 2, 3, 4].reduce((i1, i2) => i1 + i2, 5))



console.log(
    [1, 2, 1].sort().reduce((i1, i2) => {
        if (i1.length === 0 || i1[i1.length - 1] !== i2) {
            i1.push(i2)
        }
        return i1
    }, [])
)