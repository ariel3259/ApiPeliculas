const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

//movies array
const moviesArr=[]

app.get("/",(req,res)=>{
	res.send("Hi word")
})

//add a movies
app.post("/api/movies",(req,res)=>{
//movies object saves at moviesArr
const movies = {
	name:req.body.name,
	code:req.body.code,
	releaseYear:req.body.releaseYear,
	gender:req.body.gender,
	director:req.body.director,
	viewers:req.body.viewers,
}
	moviesArr.push(movies)
	res.send("A movie has been added")
})

//get movies
app.get("/api/movies",(req,res)=>{

	console.log(moviesArr)
	res.send(moviesArr)
})

//get movie ranking by viewers
app.get("/api/views",(req,res)=>{
	//movies sorts from has many viewers to has few viewers 
	const highestRanking=moviesArr.sort((a,b)=>b.viewers-a.viewers)
	console.log(highestRanking)
	res.send(highestRanking)
})

//get a movie by code 
app.get("/api/getAMovie/:code",(req,res)=>{
	const movieCode=req.params.code
	res.send(moviesArr.find(element=>element.code===movieCode))
})

app.listen("3000",()=>console.log("Server listening at port 3000"))