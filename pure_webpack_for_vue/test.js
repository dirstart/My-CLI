const sleep = (time) => new Promise((resolve) => {
    console.log("开始进行阻塞");
    setTimeout(resolve, time);
});

(async () => {
    await sleep(1000);
    console.log('123');
})();