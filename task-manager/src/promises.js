const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(4,4).then((result)=>{
//     console.log(result)
//     add(result, 5).then((sum)=>{
//         console.log(sum)
//     }).catch((e)=>{
//         console.log(e)
//     })
// }).catch((err)=>{
//     console.log(err);
// })

add(4, 3).then((sum) => {
    console.log(sum)
    return add(sum, 3)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 5)
}).then((sum3) => {
    console.log(sum3)
}).catch((e) => {
    console.log(e)
})