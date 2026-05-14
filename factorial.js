function factorial(num){
   if(num==0)
    return 1;
   let factorial=1;
   for(let i=1;i<=num;i++){
        factorial*=i;
   }
   return factorial;
}
let result=factorial(3)
console.log(result)

or

function factorial(num){
    let fact=1;
    for(let i=num; i>0;i--){
        fact*=i;
    }
    return fact;
}
console.log(factorial(0))
