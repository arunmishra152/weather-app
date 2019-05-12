
const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(a < 0 || b < 0){
                reject('negative number')
            }
            resolve(a+b)
        }, 2000);
       
    })
}

const dowork = async ()=>{
    const sum = await add(1,3)
    const sum2 = await add(sum,5)
    const sum3 = await add(sum2,-8)
    return sum3
}

dowork().then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})


// const add = async ()=>{
//     return 'Arun'
// }

// add().then((r)=>{
//     console.log(r)
// }).catch((e)=>{
//     console.log(e)
// })