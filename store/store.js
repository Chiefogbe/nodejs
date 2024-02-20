// // // LECTURE 04
// // const readline=require('readline')
// // const rl=readline.createInterface({
// //   input:process.stdin,
// //   output:process.stdout
// // })

// // rl.question('Please enter your name:', (name)=>{
// //   console.log(`You entered: ${name}`)
// //   rl.close()
// // })

// // rl.on('close', ()=>{
// //   console.log(`Interface closes`)
// //   process.exit(0)
// // })

// // //// LECTURE 05: READING AND WRITING FILE SYNCHRONOUSLY
// // const fs=require('fs')
// // let TextInput=fs.readFileSync('./Files/input.txt', 'utf-8')
// // console.log(TextInput)

// // const OutputData=`laudantium ratione at totam cupiditate voluptate suscipit nam quasi labore hic, perspiciatis obcaecati....ouput file node js.`

// // fs.writeFileSync('./Files/output.txt', OutputData)

// // //// LECTURE 06 - 07: READING AND WRITING FILE ASYNCHRONOUSLY (CALL BACK HELL)
// // let fs=require('fs')
// // fs.readFile('./Files/start.txt', 'utf-8', (error1, data1)=>{
// //   console.log(data1)
// //   fs.readFile(`./Files/input.txt`, 'utf-8', (error2, data2)=>{
// //     console.log(data2)
// //     fs.readFile(`./Files/append.txt`, 'utf-8', (error3, data3)=>{
// //       console.log(data3)
// //       fs.writeFile(`./Files/output.txt`, `${data1}, ${data2}, ${data3SS}`, 'utf-8', ()=>{
// //         console.log(`Written successfully`)
// //       } )
// //     })
// //   })
// // })
// // console.log(`starting file...`)

// // // LECTURE 08: CREATING SIMPLE WEB SERVER
// // const http=require('http')
// // const Server=http.createServer((req, res)=>{
// //   res.end('Hello message')
// //   console.log(`New Request Received.`)
// // })
// // Server.listen(5000, '127.0.0.1', ()=>{
// //   console.log(`server has started.`)
// // })

// // // LECTURE 09 -10: HOW REQUEST AND RESPONSE WORKS
// // const http=require('http')
// // const fs=require('fs')

// // const ReadFile=fs.readFileSync('./Files/Templat/index.html', 'utf-8')

// // const serveRr=http.createServer((request,response)=>{
// //   response.end(ReadFile)
// // })

// // serveRr.listen(5000, ()=>{
// //   console.log(`server is running...`)
// // })

// // // LECTURE 11 - 12: ROUTING AND CREATING ROUTES
// // const http=require('http')

// // const server=http.createServer((request,response)=>{
// //   let path=request.url

// //   if(path==='/' || path.toLocaleLowerCase()==='/home'){
// //     response.end(`You are in the Home page`)
// //   }
// //   else if(path.toLocaleLowerCase()==='/about'){
// //     response.end(`You are in the About page`)
// //   }
// //   else if(path.toLocaleLowerCase()==='/contact'){
// //     response.end(`You are in the Contact page`)
// //   }else{
// //     response.end(`page not found.`)
// //   }
// // })

// // server.listen(5000,()=>{
// //   console.log(`Server is running...`)
// // })

// // // LECTURE 13: SENDING HTML RESPONSES
// // const fs=require('fs')
// // const http=require('http')

// // let HomeHtml=fs.readFileSync('./Files/Templat/index.html', 'utf-8')

// // const server3=http.createServer((request, response)=>{
// //   let path=request.url
// //   if(path==='/' || path.toLocaleLowerCase()==='/home'){
// //     response.end(HomeHtml.replace('{{%CONTENT%}}', 'This is the home page.'))
// //   }
// //   else if(path.toLocaleLowerCase()==='/about'){
// //     response.end(HomeHtml.replace('{{%CONTENT%}}', 'This is the about page.'))
// //   }
// //   else if(path.toLocaleLowerCase()==='/contact'){
// //     response.end(HomeHtml.replace('{{%CONTENT%}}', 'This is the contact page.'))
// //   }else{
// //     response.end(HomeHtml.replace('{{%CONTENT%}}', 'Error: Page not found'))
// //   }
// // })

// // server3.listen(5000, ()=>{
// //   console.log(`Server is running to test the html pages...`)
// // })

// // // LECTURE 14: SETTING HEADERS FOR RESPONSE
// // const fs=require('fs')
// // const http=require('http')

// // let HomeHtml2=fs.readFileSync('./Files/Templat/index.html', 'utf-8')

// // const server5=http.createServer((request, response)=>{
// //   let path=request.url
// //   if(path==='/' || path.toLocaleLowerCase()==='/home'){
// //     response.writeHead(200, {
// //       'Content-Type':'text/html',
// //       'My-Head':'Hello World.'
// //     })
// //     response.end(HomeHtml2.replace('{{%CONTENT%}}', 'This is the home page.'))
// //   }
// //   else if(path.toLocaleLowerCase()==='/about'){
// //     response.writeHead(200, {
// //       'Content-Type':'text/html',
// //       'My-Head':'Hello World.'
// //     })
// //     response.end(HomeHtml2.replace('{{%CONTENT%}}', 'This is the about page.'))
// //   }
// //   else if(path.toLocaleLowerCase()==='/contact'){
// //     response.writeHead(200, {
// //       'Content-Type':'text/html',
// //       'My-Head':'Hello World.'
// //     })
// //     response.end(HomeHtml2.replace('{{%CONTENT%}}', 'This is the contact page.'))
// //   }else{
// //     response.writeHead(404, {
// //       'Content-Type':'text/html',
// //       'My-Head':'Error.'
// //     })
// //     response.end(HomeHtml2.replace('{{%CONTENT%}}', 'Error: Page not found'))
// //   }
// // })

// // server5.listen(5000, ()=>{
// //   console.log(`Server is running to test the html pages...`)
// // })

// // //LECTURE 15 - 19: WORKING WITH JSON DATA



// // const fs=require('fs')
// // const http=require('http')
// // const url=require('url')
// // const ReplaceHtml=require('./Files/Templat/ModulesF/replaceHtml')

// // let HomeHtml=fs.readFileSync('./Files/Templat/index.html', 'utf-8')
// // let Products=JSON.parse(fs.readFileSync('./JsonData/product.json', 'utf-8'))
// // let ProductListHtml=fs.readFileSync('./Files/Templat/productlist.html', 'utf-8')
// // let ProductDetailsHtml=fs.readFileSync('./Files/Templat/productdetails.html', 'utf-8')

// // // let ProductHtmlArray=Products.map((prod)=>{
// // //   let output=ProductListHtml.replace('{{%name%}}', prod.name)
// // //   output=output.replace('{{%id%}}', prod.id)
// // //   output=output.replace('{{%age%}}', prod.age)
// // //   output=output.replace('{{%color%}}', prod.color)
// // //   return output;
// // // })

// // // function ReplaceHtml(template, product){
// // //   let output=template.replace('{{%name%}}', product.name)
// // //   output=output.replace('{{%id%}}', product.id)
// // //   output=output.replace('{{%age%}}', product.age)
// // //   output=output.replace('{{%color%}}', product.color)
// // //   return output;
// // // }

// // const server4=http.createServer((request, response)=>{
// //   let {query, pathname:path}=url.parse(request.url, true)
// //   // console.log(UrlPath)
// //   // let path=request.url
// //   if(path==='/' || path.toLocaleLowerCase()==='/home'){
// //     response.writeHead(200, {
// //       'Content-Type':'text/html',
// //       'My-Head':'Hello World.'
// //     })
// //     response.end(HomeHtml.replace('{{%CONTENT%}}', 'This is the home page.'))
// //   }
// //   else if(path.toLocaleLowerCase()==='/about'){
// //     response.writeHead(200, {
// //       'Content-Type':'text/html',
// //       'My-Head':'Hello World.'
// //     })
// //     response.end(HomeHtml.replace('{{%CONTENT%}}', 'This is the about page.'))
// //   }
// //   else if(path.toLocaleLowerCase()==='/contact'){
// //     response.writeHead(200, {
// //       'Content-Type':'text/html',
// //       'My-Head':'Hello World.'
// //     })
// //     response.end(HomeHtml.replace('{{%CONTENT%}}', 'This is the contact page.'))
// //   }

// //   else if(path.toLocaleLowerCase()==='/product'){

// //     if(!query.id){
// //       let ProductHtmlArray= Products.map((prod)=>{
// //         return ReplaceHtml(ProductListHtml, prod)
// //       })
// //       let ProductHtmlResponse=HomeHtml.replace('{{%CONTENT%}}', ProductHtmlArray.join(''))
// //       response.writeHead(200, {
// //         'Content-Type':'text/html',
// //         'My-Head':'Hello World.'
// //       })
// //       response.end(ProductHtmlResponse)
// //     }
// //     else{
// //       let prod=Products[query.id]
// //       let ProductDetailsResponseHtml=ReplaceHtml(ProductDetailsHtml, prod )
// //       response.end(HomeHtml.replace('{{%CONTENT%}}', ProductDetailsResponseHtml))
// //     } 
// //   }
// //   else{
// //     response.writeHead(404, {
// //       'Content-Type':'text/html',
// //       'My-Head':'Error.'
// //     })
// //     response.end(HomeHtml.replace('{{%CONTENT%}}', 'Error: Page not found'))
// //   }
// // })

// // server4.listen(5000, ()=>{
// //   console.log(`Server is running to test the html pages...`)
// // })

// const fs=require('fs')
// const http=require('http')
// const url=require('url')
// const ReplaceHtml=require('./Files/Templat/ModulesF/replaceHtml')
// const events=require('events')

// let HomeHtml=fs.readFileSync('./Files/Templat/index.html', 'utf-8')
// let Products=JSON.parse(fs.readFileSync('./JsonData/product.json', 'utf-8'))
// let ProductListHtml=fs.readFileSync('./Files/Templat/productlist.html', 'utf-8')
// let ProductDetailsHtml=fs.readFileSync('./Files/Templat/productdetails.html', 'utf-8')

// // let ProductHtmlArray=Products.map((prod)=>{
// //   let output=ProductListHtml.replace('{{%name%}}', prod.name)
// //   output=output.replace('{{%id%}}', prod.id)
// //   output=output.replace('{{%age%}}', prod.age)
// //   output=output.replace('{{%color%}}', prod.color)
// //   return output;
// // })

// // function ReplaceHtml(template, product){
// //   let output=template.replace('{{%name%}}', product.name)
// //   output=output.replace('{{%id%}}', product.id)
// //   output=output.replace('{{%age%}}', product.age)
// //   output=output.replace('{{%color%}}', product.color)
// //   return output;
// // }

// const server4=http.createServer((request, response)=>{
//   let {query, pathname:path}=url.parse(request.url, true)
//   // console.log(UrlPath)
//   // let path=request.url
//   if(path==='/' || path.toLocaleLowerCase()==='/home'){
//     response.writeHead(200, {
//       'Content-Type':'text/html',
//       'My-Head':'Hello World.'
//     })
//     response.end(HomeHtml.replace('{{%CONTENT%}}', 'This is the home page.'))
//   }
//   else if(path.toLocaleLowerCase()==='/about'){
//     response.writeHead(200, {
//       'Content-Type':'text/html',
//       'My-Head':'Hello World.'
//     })
//     response.end(HomeHtml.replace('{{%CONTENT%}}', 'This is the about page.'))
//   }
//   else if(path.toLocaleLowerCase()==='/contact'){
//     response.writeHead(200, {
//       'Content-Type':'text/html',
//       'My-Head':'Hello World.'
//     })
//     response.end(HomeHtml.replace('{{%CONTENT%}}', 'This is the contact page.'))
//   }

//   else if(path.toLocaleLowerCase()==='/product'){

//     if(!query.id){
//       let ProductHtmlArray= Products.map((prod)=>{
//         return ReplaceHtml(ProductListHtml, prod)
//       })
//       let ProductHtmlResponse=HomeHtml.replace('{{%CONTENT%}}', ProductHtmlArray.join(''))
//       response.writeHead(200, {
//         'Content-Type':'text/html',
//         'My-Head':'Hello World.'
//       })
//       response.end(ProductHtmlResponse)
//     }
//     else{
//       let prod=Products[query.id]
//       let ProductDetailsResponseHtml=ReplaceHtml(ProductDetailsHtml, prod )
//       response.end(HomeHtml.replace('{{%CONTENT%}}', ProductDetailsResponseHtml))
//     } 
//   }
//   else{
//     response.writeHead(404, {
//       'Content-Type':'text/html',
//       'My-Head':'Error.'
//     })
//     response.end(HomeHtml.replace('{{%CONTENT%}}', 'Error: Page not found'))
//   }
// })

// server4.listen(5000, ()=>{
//   console.log(`Server is running to test the html pages...`)
// })

// let MyEmitter= new events.EventEmitter()
// MyEmitter.on(`UserCreated`, ()=>{
//   console.log(`A user was created.`)
// })
// // MyEmitter.emit(`UserCreated`)

// LECTURE 22 - 24: NODE JS STREAMS
// const http=require('http')
// const server=http.createServer()
// const fs=require('fs')

// server.listen(5000, ()=>{
//   console.log(`App is listening on port 5000`)
// })

// server.on(`request`, (req,res)=>{
//   const rs=fs.createReadStream('./Files/Templat/largefile/largefile.txt')
//   // rs.on(`data`, (chunk)=>{
//   //     res.write(chunk)
//   //     res.end()
//   // })

//   // rs.on(`end`, ()=>{
//   //   res.end()
//   // })

//   // rs.on(`error`, (error)=>{
//   //   res.end(`error ocuured.`)
//   // })

//   rs.pipe(res)
// })

