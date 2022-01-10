//const dta = require('./one');
// const data = require('./two');
    
// var s = new data.myClass('Subash Vetri');
// s.myfunc();
// s.mytask();

// dta.my();
// console.log(dta.num);
// dta.dummy();
// dta.my();
// console.log(dta.num);

// <---- Comment 1----->
//const readline = require('readline');

// const r1 = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// r1.question('what is your name? ', (ans) => {
//     if(ans === 'vetri')
//     {
//         r1.close();
//     }
//     else
//     {
//         r1.setPrompt('Wrong Answer Try Again');
//         r1.prompt();
//         r1.on('line',(inp) =>{
//             if(inp === 'vetri')
//             {
//                 r1.close();
//             }
//             else
//             {
//                 r1.setPrompt(inp + ' is wrong \n');
//                 r1.prompt();
//             }
//         })
//     }
// })

// r1.on('close',()=>{
//     console.log('Corrct!!!')
// })


// const events = require('events');

// const myEmitter = new events.EventEmitter();

// var x = ['John','Sheba','Vasanthi'];

// myEmitter.on('my',()=>{

//     for(i=0;i<x.length;i++)
//     {
//         console.log(i + " " + x[i])
//     }
//     console.log('Ooops Fired !!!!!');
// })

// setTimeout(() => {
//     myEmitter.emit('my')
// },3000);
// const cypto = require('crypto');
// const readline = require('readline');

// const r1 = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// r1.question('what is your name? ', (ans) => {
//     const hash = cypto.createHmac('sha256','gthifjks').update(ans).digest('hex');
//     console.log(hash);
//     r1.close();

   
// })

// r1.on('close',()=>{
//     console.log('Name Encrypted!!!')
// })


const path = require('path');
const fs = require('fs');

fs.mkdir('test',(err) => {
    if(err)
     {
         throw err
        }
    fs.writeFile(path.join(`${__dirname}/test/test.js`),'I love u_S',(err) => {
        if(err)
        {
            throw err
        }
        console.log('File Created');
    })
    
})



// console.log(__dirname);
// console.log(__filename);

