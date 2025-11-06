import express from 'express';
import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    host:'localhost',
    port: 5432,
    user: 'postgres',
    password: '952547249',
    database: 'produtosdb'
});

try{
    await pool.connect();
    console.log("Conectado com sucesso!");
} catch(error){
    console.error('Erro ao conectar:", ${error}');
    
}

/* Fazer um select  para testar a conexão */
const result = await pool.query('SELECT * FROM produtos')
console.log(result);


/* CRIANDO API */
app.get ('/', (req, res) => {

    res.send('Servidor Rodando!')
});

app.get('/produtos', (req, res) => {
    const result = pool.query('SELECT * FROM produtos')
    res.send(result.rows);

})

app.post('/produtos', (req, res) => {
    const result = pool.query('SELECT * FROM produtos')
    res.send(result.rows);

})  

app.put('/produtos', (req, res) => {
    const result = pool.query('SELECT * FROM produtos')
    res.send(result.rows);

})


app.delete('/produtos', (req, res) => {
    const result = pool.query('SELECT * FROM produtos')
    res.send(result.rows);

})
app.listen (3000)
