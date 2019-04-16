const http = require("http")
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end('<h1>大家好，我是刘洋，这是我的主页，以后请多指教</h1>')
}).listen(80)