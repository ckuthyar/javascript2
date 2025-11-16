function factorial(){
    let n1=5;
    let fact1=n1;
    for(let i=n1-1;i>1;i--){
        fact1=fact1*i;
    }
    document.getElementById("showFactorial").textContent=fact1;
}
factorial();