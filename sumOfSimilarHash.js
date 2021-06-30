let arr1= [12, 13, 6, 10];
let arr2= [13, 10, 16, 15];
let obj={};
let sum=0
for(var i=0;i<arr1.length;i++){
    if(obj[arr1[i]] == undefined){
        obj[arr1[i]]=1
    }
    else{
    obj[arr1[i]]++
    }
}

for(var i=0;i<arr2.length;i++){
    if(obj[arr2[i]] == undefined){
    obj[arr2[i]]=1
    }
    else{
    obj[arr2[i]]++
    }
}
let hashkey= Object.keys(obj)
console.log(hashkey)
for(var i=0; i<hashkey.length;i++){
    console.log(obj[hashkey[i]])
    if (obj[hashkey[i]]>1){
        sum+=parseInt(hashkey[i])*2
    }
}
console.log(sum)