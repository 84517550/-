// let fs=require("fs")
// let http=require("http")
// var num=0
//  const a= http.createServer(function(a,b){
// 	 b.setHeader('Content-Type','text/html;charset=utf-8;');
// 	if(a.url=="/xiaomi.html"){
// 		 num++
// 		 console.log(num)
// 		fs.readFile("./xiaomi.html",function(aa,bb){
// 			b.end(bb)
// 		})
		
// 	}
// })
// a.listen(80,function(){
// 	console.log("OK")
// })

const fs=require("fs")
const http=require("http")
var a=http.createServer(function(a,b){
	if(a.url=="/index.html"){
		fs.readFile("./index.html","utf8",function(aa,bb){
			if(aa){
				console.log(aa)
				return
			}
			b.end(bb)
		})
	}
})
a.listen(8080,function(){
	console.log("aa")
})