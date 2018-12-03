/* JavaScript內建的函數： 
    setTimeOut() 是一個採用回呼方式設計的函數。 */
function printTime() {
    console.log(new Date());
    setTimeout(printTime, 3000);
}

setTimeout(printTime, 3000);