for (i = 0; i <= 10; i++) {
    if (i == 3) continue;
    if (i == 8) break;
    console.log("i=", i);
}
/* 當 i==3 時，會執行 continue，繼續執行下一輪迴圈，因此不會印出 i=3。
   當 i==8 時，會執行 break 而跳出迴圈，因此後面的 i=8, i=9, i=10 都將不會印出。 */