//npm i puppeteer

const puppeteer = require("puppeteer");
const fs = require("fs/promises");
/*
const startBrowser=async()=>{
    const browser=await puppeteer.launch({headless:"new"})
    const page=await browser.newPage()
    await page.setViewport({width:1080,height:1280,})
    await page.goto("https://www.masaischool.com/")
    await page.screenshot({path:"screenshot.png",fullPage:true})
    await browser.close()
}



const startBrowser=async()=>{
    const browser=await puppeteer.launch({headless:"new"})
    const page=await brodwser.newPage()
    
    await page.goto("https://example.cypress.io/todo")
   const todos=await page.evaluate(()=>{
   return Array.from( document.querySelectorAll(".view label")).map(el=>el.textContent)
   })
   console.log(todos)

   await fs.writeFile("todos.txt",todos.join("\n"));
   await browser.close();
}

const startBrowser = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("https://unsplash.com/");
  const images = await page.$$eval(".MorZF img", (el) => {
    return el.map((el) => el.src);
  });
  console.log(images);
//   for (let i = 0; i < images.length; i++) {
//     const obj = {
//       id: i + 1,
//       image: images[i],
//     };
//     fs.writeFile(
//       "images.json",
//       `\n${JSON.stringify(obj)}`,
//       { flag: "a+" },
//       (err) => {
//         if (err) {
//           console.log(err);
//         }
//       }
//     );
//   }
 let index=0
  for(let img of images){
    const realImage=await page.goto(img)

    fs.writeFile(`images/images${++index}.jpeg`,
    await realImage.buffer(),
    {flag:"a+"},(err)=>{
        if(err){
            console.log(err)
        }
    })
  }
  await browser.close();
};

const startBrowser = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("https://unsplash.com/");

  const links=await page.$$(".p7aj0")

  for(let link of links){
    const linkText=await link.evaluate((el)=>el.textContent)
    if(linkText.trim()==="Animals"){
      await link.click();
      await new Promise((r)=>setTimeout(r,2000))
      break;
    }
  }
  const images = await page.$$eval(".MorZF img", (el) => {
    return el.map((el) => el.src);
  });
  console.log(images);
 let index=0
  for(let img of images){
    const realImage=await page.goto(img)

    fs.writeFile(`images/images${++index}.jpeg`,
    await realImage.buffer(),
    {flag:"a+"},(err)=>{
        if(err){
            console.log(err)
        }
    })
  }
  await browser.close();
};*/


const startBrowser = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("https://unsplash.com/");

   const searchInput=await page.$('input[type="search"]');

   await searchInput.type("cars")
   await searchInput.press("Enter")

  const images = await page.$$eval(".MorZF img", (el) => {
    return el.map((el) => el.src);
  });
  console.log(images);
 let index=0
  for(let img of images){
    const realImage=await page.goto(img)

    fs.writeFile(`images/images${++index}.jpeg`,
    await realImage.buffer(),
    {flag:"a+"},(err)=>{
        if(err){
            console.log(err)
        }
    })
  }
  await browser.close();
};

startBrowser();
