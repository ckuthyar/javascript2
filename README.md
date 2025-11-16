# JavaScript Assignments and Tutorial   
## Assignment 1 - Show Sum and Difference of 2 numbers in HTML page    
Let n1=8, n2=4, compute Sum and Difference and place them in 2 different lines in HTML. Create a function called calculator() and include these 2 lines.
```
document.getElementById("showSum").textContent=sum1;
document.getElementById("showDiff").textContent=diff1;
```
The corresponding lines in HTML files are
```
<p>Sum is <span id="showSum"></span></p>   
<p>Diff is <span id="showDiff"></span></p>   
<script src="calculator.js"></script>   
```
Refer https://github.com/ckuthyar/javascript2/blob/main/2.html
## Assignment 2 - Take inputs n1 and n2 from a HTML page. Show Sum and Difference of these 2 numbers


## Assignment 3 - Take inputs Principal, Time and Rate of Interest from a HTML page. Show Monthly EMI payable for the Loan taken.
Minimum Loan amount: Rs 5,000   
Maximum loan amount: Rs 5,00,000    
Min Time: 6 month    
Max Time: 60 months    
Min Rate: 5%     
Max Rate: 15%     

## Assignment 4 - Principal, Time and Rate of Interest as a Slider Input. Show Monthly EMI payable for the Loan taken.

## Assignment 5 - Show Today's Date
Show today's date after clicking a button called Submit.    
The JavaScript code is shown below        
```
<script>
        function date1(){
            let dt1=new Date();
            document.getElementById("showToday").textContent=dt1;
        }
</script>
```
The HTML code is shown below
```
<button id="submit" onclick="date1()">Submit</button>
<p>Today is <span id="showToday"></span></p>
```
Refer https://github.com/ckuthyar/javascript2/blob/main/6.html   