fetch('http://localhost:3000',{
    body: 'data',
    method: 'POST'  
})
.then(res=>{
    return res.text()
})
.then(res=>{
    console.log(res)
})