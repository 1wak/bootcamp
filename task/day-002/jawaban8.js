let i = 7;
const test = setInterval(() => {
    if (i <= 0){
        clearInterval(test);
    }
    console.log(i);
    i--;
    
}, 1000)