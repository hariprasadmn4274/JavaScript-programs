function primeNumber(num){
    if(num<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false
        }else{
            return true
        }
    }
    return true//this is for missing numbers ie 2 and 3 bcs their sqrt ils less than 2 so
}
let result=primeNumber(3)
console.log(result)