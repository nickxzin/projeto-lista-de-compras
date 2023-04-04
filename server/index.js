const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "",
    user: "root",
    password: "",
    database: "crudloja"
})


app.get('/', (req, res) => {
    let SQL = "INSERT INTO lista( name, cost, category ) VALUES ('Maça', 'R$15', 'Ação')";

    db.query(SQL, (err, result) => {
        console.log(err)
    })
});

app.listen(3001, ()=>{
    console.log("rodando servidor");
});