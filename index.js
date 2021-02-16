function delay(milliseconds, count) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(count);
        }, milliseconds);
    });
}
// async function always returns a Promise
async function dramaticWelcome() {
    console.log("Hello");
    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count = await delay(500, i);
        console.log(count);
    }
    console.log("World!");
}
dramaticWelcome();
