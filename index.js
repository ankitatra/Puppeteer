//npm i puppeteer

const puppeteer=require("puppeteer")


const startBrowser=async()=>{
    const browser=await puppeteer.launch({headless:"new"})
    const page=await browser.newPage()
    await page.setViewport({width:1080,height:1280,})
    await page.goto("https://www.masaischool.com/")
    await page.screenshot({path:"screenshot.png",fullPage:true})
    await browser.close()
}

startBrowser()