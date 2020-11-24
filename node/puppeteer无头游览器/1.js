const puppeteer = require('puppeteer');
const $ = require('cheerio');
const fs = require('fs');
const { resolve } = require('path');
async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://juejin.cn/books', {
        waitUntil: 'networkidle0'
    });

    // await page.screenshot({
    //     path: './juejin.png'
    // })
    //在获取html之前 执行几次 下拉动作
    let r = await page.evaluate(function() {
            function req() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        document.querySelector('.copy-right').scrollIntoView()
                        resolve();
                    }, 2000);
                })
            }
            async function run() {
                for (let i = 0; i < 3; i++) {
                    await req();
                }
            }
            //async 执行完 返回就是 promise
            //run()这个promise 只有三次下拉加载结束(for)才会resolve
            //page.evaluate 将等待promise完成
            return run();
        })
        //第一页数据
    const html = await page.content();
    // console.log(html);
    const books = $('.info', html);
    let booksInfo = [];
    books.each(function() {
        const book = $(this);
        let name = $(book.find('.title')).text().trim();
        let auth = $(book.find('.author-name')).text().trim();
        console.log(name, auth);
        booksInfo.push({
            name,
            auth
        })
    })
    fs.writeFile('./books.json', JSON.stringify(booksInfo, null, 2), (err) => {
        if (!err) {
            console.log('写入成功');
        }
    })
    await browser.close();
}