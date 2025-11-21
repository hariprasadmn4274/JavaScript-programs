//1.)getDuplicateNumbersFromArray

function getDuplicatesFromArray(arr){
    let set=new Set()
    let duplicates=[]
    for(let digi of arr){
        if(set.has(digi)){
            duplicates.push(digi)
        }else{
            set.add(digi)
        }
    }
    return duplicates
}
console.log(getDuplicatesFromArray([1,2,2,3,4,4,5,6]))



//2.) getDuplicateLettersFromString

function getDuplicateLettersFromString(str){

    let set=new Set();
    let duplicates=[];
    for(letter of str){
        if(set.has(letter)){
           duplicates.push(letter);  
        }
        else{
        set.add(letter);
    }
    }
    return duplicates;

}
console.log(getDuplicateLettersFromString('programming'));
