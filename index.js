const express= require("express");
const app= express();

app.get('/', (req,res)=>{
    console.log(req);
    res.send('Serwer działa')
})

app.listen(80,()=>{
    console.log(`Aplikacja wystartowala`)
})