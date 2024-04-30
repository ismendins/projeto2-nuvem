const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Sorveteria Diamante!</h1> <h2>Oferecemos os seguintes sabores: </h2> <br>- Chocolate <br>- Manga <br>- Morango <br>- Napolitano <br><h3>E muito mais. Venha nos visitar!</h3>");
})

//rota do cadastro de produtos
app.get("/sabores", function(req,res){
    res.send("<h2> Lista de sabores completa: </h2> <br>- Chocolate <br>- Manga <br>- Morango <br>- Napolitano <br>- Açaí <br>- Limão <br>- Cupuaçu <br>- Tapioca");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("Verifique na lista se o sabor " + req.params.parametro + " está cadastrado.");
})

//rota com parametro opcional
app.get("/cadastro/:sabor?", function(req,res){
    //req --> dados enviados pelo cliente
    var sabor = req.params.sabor;
    if (sabor){
        res.send("<h3>Sabor " + sabor + " cadastrado no sistema!</h3>");
    }else{
        res.send("<h3>Informe um sabor válido.</h3>");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 3000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

