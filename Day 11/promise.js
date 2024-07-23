// // Task 1

// const promise = new Promise((res,rej)=>{
//    setTimeout(()=>{
    
    
// console.log(`this will be printed after 2 sec`);
//    },2000)
    
// })


// // Task 2

// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>{

//         rej()
//     },2000)
// }).catch(()=>{
//     console.log(`rejected after 2 seconds`);
// })


// // Task 3

// function fetchData1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("data from first fetch");
//         },1000)
//     })
// }

// function fetchData2(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("data from second fetch");
//         },800)
//     })
// }

// function fetchData3(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("data from third fetch");
//         },500)
//     })
// }

// fetchData1().then((data)=>{
//     console.log(data);
//     return fetchData2()
// }).then((data)=>{
//     console.log(data);
//     return fetchData3()
// }).then((data)=>{
//     console.log(data);
//     console.log("all data is fetched");
// }).catch((error)=>{
//     console.log(error);
// })



// // Task 4

// async function print(){
// const promise = await new Promise(()=>{
//     setTimeout(()=>{
//         console.log("hello world");
//     },3000)
// })}

// print()

// // Task 5

// async function print(){
//     try{ const promise = await new Promise((res,rej)=>{
//         setTimeout(()=>{
//             rej()
//         },3000)
//     })}
//     catch(err){
// console.log("error");
//     }
// }

// print()


// // Task 6

//  fetch('https://fakestoreapi.com/users')
// .then((res)=>{
//     return  res.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })


// Task 7 

// async function data(){
//     const val =  await fetch('https://jsonplaceholder.typicode.com/posts')
//    const newData = await val.json()
//    console.log(newData);
// }
// data()


// // Task 8

// const promise1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("promise 1 executed");
//     },4000)
// })

// const promise2 = new Promise((res,rej)=>{
//     console.log("promise 2 executed");
// },2000)

// const allPromise = Promise.all([promise1 , promise2])

// allPromise.then(values => {
// console.log(values);
// }).catch(error =>{
//     console.log(error);
// })



// // Task 9 

// const promise1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("promise 1 of time 2 sec executed");
//     },2000)
// })


// const promise2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("promise  2 of time 4 sec executed");
//     },4000)
// })


// Promise.race([promise1,promise2]).then((x)=>{
//     console.log(x);
// })

