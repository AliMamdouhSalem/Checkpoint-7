var arr=[12, 13, 6, 10]
var arr2=[13, 10, 16, 15]
var result=[]
var sum= 0
var check= true
for(var i=0; i<arr.length;i++){

    for(var j=0; j<arr2.length;j++){
       if(arr[i]==arr2[j]){
         sum+=arr2[j]
         console.log(arr2[j])
         check=true
       } 

    
    
}
   if(check==false){
    result.push(arr[i])
    }
}
console.log(sum)
console.log(result)