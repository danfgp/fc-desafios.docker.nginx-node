const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    database: 'nodedb',
    user: 'nodeuser',
    password: 'nodepass'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = "INSERT INTO people(name) VALUES('Danilo')" 
//connection.query(sql)
connection.end()



app.get('/', (req,res) => {

    res.send('<h1>Full Cycle Rocks!</h1>')
    //listar nomes do banco de dados
})

app.listen(port, () => {
    console.log('Ouvindo porta ' + port)
})