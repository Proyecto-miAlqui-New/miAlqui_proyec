const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "newmialquidb"
})

app.post("/create",(req ,res)=>{
    console.log("este es el body:" ,req.body)
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    const nombreAdmi = req.body.nombreAdmi;
    const email = req.body.email;
    const celular = req.body.celular;
  //prometo que voy a enviar esos valores mas adelante
    db.query('INSERT INTO alquiler(nombre,apellido,dni,nombreAdmi,email,celular) VALUE(?,?,?,?,?,?)',[nombre,apellido,dni,nombreAdmi,email,celular],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Se registro el alquiler exitosamente")
        }
    })
})

app.listen(3001,()=>{
    console.log("Servidor corriendo en el port 3001")
})