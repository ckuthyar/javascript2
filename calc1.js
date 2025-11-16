function calc1(){
    let n1=document.getElementById("inputN1").innerHTML;
    let n2=document.getElementById("inputN2").innerHTML;
    let sum1=n1+n2;
    let diff1=n1-n2;
    document.getElementById("showSum").textContent=sum1;
    document.getElementById("showDiff").textContent=diff1;
}
calc1();


