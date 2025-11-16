function calculator(n1,n2){
    let sum1=n1+n2;
    let diff1=n1-n2;
    document.getElementById("showSum").textContent=sum1;
    document.getElementById("showDiff").textContent=diff1;
}
function factorial(n1){
    let fact1=n1;
    for(let i=n1-1;i>1;i--){
        fact1=fact1*i;
    }
    document.getElementById("showFactorial").textContent=fact1;
}
function emiCalculator(p,t,r){
    let si=p*t*r;
    let amt=p+si;
    let emi=amt/(t*12);
    document.getElementById("showEMI").textContent=emi;
}
function date1(){
    let dt1=new Date();
    document.getElementById("showToday").textContent=dt1;
}
function date2(y1,M1,d1,y2,M2,d2){
    let dt1=new Date(y1,M1,d1);
    let dt2=new Date(y2,M2,d2);
    let time1=dt2-dt1;
    const milliday=1000*60*60*24;
    let elapsedDays=time1/milliday;
    document.getElementById("showElapsedDays1").textContent=elapsedDays;
}
function date3(y2,M2,d2){
    let dt1=new Date();
    let dt2=new Date(y2,M2,d2);
    let time1=dt2-dt1;
    const milliday=1000*60*60*24;
    let elapsedDays=time1/milliday;
    document.getElementById("showElapsedDay2").textContent=elapsedDays;

}
calculator(8,4);
factorial(5);
emiCalculator(10000,5,8);
date1();
date2(1962,11,12,2025,1,1);
date3(1962,11,12)