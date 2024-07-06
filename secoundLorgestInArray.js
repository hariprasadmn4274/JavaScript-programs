function secoundLorgest(arr){
    if(arr.length<2){
        throw new console.Error('give valid array');
    }
    let lorgest=Math.max(arr[0],arr[1])
    let secoundLorgest=Math.min(arr[0],arr[1])

    for(let i= 2; i<arr.length;i++){
        if(arr[i]>lorgest){
            secoundLorgest=lorgest;
            lorgest=arr[i]
        }else if(arr[i]>secoundLorgest && arr[i]!==lorgest)// you have to give else if only not only else to check both the conditions properly
        {
            secoundLorgest=arr[i];
        }
    }
    return secoundLorgest;

}
console.log(secoundLorgest([1,2,3,4,5,6,7,8]))