function swapString(str1,str2){
    let a=str1;
    b=str2;
    [a,b]=[b,a];
    return `a= ${a} and b=${b}`;

}
console.log(swapString('hariprasad','chethanKumar'))

// function swapString(str1,str2){

//     let a= str1+str2;
//     let b=a.slice(0,str1.length);
//     a=a.slice(str1.length)
//     console.log(`a= ${a} and b=${b}` );
// }
// console.log(swapString('hariprasad','chethanKumar'))




