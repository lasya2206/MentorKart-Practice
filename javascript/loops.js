function f(){
    const start = 0
    const end = 10
    for(let n = start;n<end;n++){
        if(n%2 == 0){
            console.log('iteration' + n)
        }
    }
    function w(){
        let isUploading = false
        while(isUploading){
            console.log('Uploading Files')
        }
    }
    function d(){
        const isLive = false
        do{
            console.log('Trying to connect')
        }while(!isLive){
            console.log('Error')
        }
    }
}
