//    (i) input: 10,20,10,30,20,20

//    output:   pairs : 2 
arr=[10,20,10,30,20,20]
newarr=[],sum=0
console.log("input array : "+arr)
for (a of arr){
    if(!newarr.includes(a)){
        newarr.push(a)
    }
}
// console.log(newarr)
for(i of newarr){
    c=0
    for(j of arr){
        if(i==j){
            c++
        }
    }
    if(c>1){
        v=Math.floor(sum+=c/2)
    }
}
console.log(`pairs :${v} `)



//    (ii) input: 30,50,30,50,20,50,50,20,50,50,50
//     output :   pairs: 5

arr=[30,50,30,50,20,50,50,20,50,50,50]
newarr=[],sum=0
console.log("input array : "+arr)
for (a of arr){
    if(!newarr.includes(a)){
        newarr.push(a)
    }
}
// console.log(newarr)
for(i of newarr){
    c=0
    for(j of arr){
        if(i==j){
            c++
        }
    }
    if(c>1){
        v=Math.floor(sum+=c/2)
    }
}
console.log(`pairs :${v} `)
