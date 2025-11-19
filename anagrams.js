function areAnagrams(str1,str2){
    let cleanStr1=str1.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('') 
    
    // split('') will covert string to arry, sort() for arry will sort, join('') arry will convert into string
    //    /[^a-zA-Z]/g is a regular expression that matches any character that is not a letter (a-z or A-Z).,
    //Without g: Only the first match is replaced.
    //With g: Every match in the string is replaced.
    
    let cleanStr2=str2.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('')
    if(cleanStr1===cleanStr2){
        console.log(`YES both ${str1} and ${str2} are Anagrames like ${cleanStr1} and ${cleanStr2}`)
    }else{
        console.log('NOO')            
    }                                                              
}
areAnagrams('listen','silent')       
