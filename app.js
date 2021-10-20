const express=require("express")
const app=express()
const cors=require("cors")

app.use(express.json())
app.use(cors())

//objeto peliculas
const peliculas={
	nombre:"",
	codigo:"",
	anioEstreno:"",
	genero:"",
	director:"",
	espectadores:0
}

//arreglo de peliculas
const arregloPeliculas=[]






app.get("/",(req,res)=>{
	res.send("Hi word")
})

//ingresar peliculas
app.post("/api/peliculas",(req,res)=>{
	//campos de intermedio que son usados para agregar peliculas
	let nombre,codigoPelicula,anioEstreno,genero,director,espectadores

	peliculas.nombre=req.body.nombre
	peliculas.codigo=req.body.codigo
	peliculas.anioEstreno=req.body.anioEstreno
	peliculas.genero=req.body.genero
	peliculas.director=req.body.director
	peliculas.espectadores=req.body.espectadores

	nombre=peliculas.nombre
	codigoPelicula=peliculas.codigo
	anioEstreno=peliculas.anioEstreno
	genero=peliculas.genero
	director=peliculas.director
	espectadores=peliculas.espectadores

	arregloPeliculas.push({nombre,codigoPelicula,anioEstreno,genero,director,espectadores})
	res.send("Pelicula agregada")
})

//ver preguntas
app.get("/api/peliculas",(req,res)=>{

	console.log(arregloPeliculas)
	res.send(arregloPeliculas)
})

//mostrar peliculas con mayor cantidad de espectadores
app.get("/api/espectadores",(req,res)=>{
	//se ordena las películas desde la pelicula con menor cantidad de espectadores hasta la pelicula con mayor cantida de espectadores,y se invierte 
	const mayorRating=arregloPeliculas.sort((a,b)=>a.espectadores-b.espectadores).reverse()
	console.log(mayorRating)
	res.send(mayorRating)
})

//mostrar una pelicula determinada por su código
app.get("/api/obtenerUnaPelicula/:codigoPelicula",(req,res)=>{
	const codigoPelicula=req.params.codigo
	res.send(arregloPeliculas.find(element=>element.codigo===codigoPelicula))
})

app.listen("3000",()=>console.log("Server listening at port 3000"))