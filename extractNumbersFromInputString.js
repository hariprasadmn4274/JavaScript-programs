function extractNumbers(str){

        let num=[]
        for(let char of str){
            if(!/[a-zA-Z]/.test(char)){ 
                    // if(/[^a-zA-Z]/.test(char)){ you can use this one also
                    ///[0-9]/.test(char))

                num.push(char)
            }
        }
        return num
}
console.log(extractNumbers('hari123prasad456'))
