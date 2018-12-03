/* 1 + 2 + 3 + ...... + 9 + 10 = 55*/
sum = 0;
i = 1;

while (i <= 10) {
    sum = sum + i;
    console.log("i=", i);
    console.log("sum=", sum);
    console.log("i=", i, " sum=", sum);
    i = i + 1;
}