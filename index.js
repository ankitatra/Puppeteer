//npm i puppeteer

const puppeteer=require("puppeteer")
const fs=require("fs/promises")
/*
const startBrowser=async()=>{
    const browser=await puppeteer.launch({headless:"new"})
    const page=await browser.newPage()
    await page.setViewport({width:1080,height:1280,})
    await page.goto("https://www.masaischool.com/")
    await page.screenshot({path:"screenshot.png",fullPage:true})
    await browser.close()
}
*/

const startBrowser=async()=>{
    const browser=await puppeteer.launch({headless:"new"})
    const page=await browser.newPage()
    
    await page.goto("https://example.cypress.io/todo")
   const todos=await page.evaluate(()=>{
   return Array.from( document.querySelectorAll(".view label")).map(el=>el.textContent)
   })
   console.log(todos)

   await fs.writeFile("todos.txt",todos.join("\n"));
   await browser.close();
}
startBrowser()