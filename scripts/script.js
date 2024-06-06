class Filmes {
    constructor (nome, descricao,valor,img){
        this.nome = nome,
        this.descricao = descricao,
        this.valor = valor,
        this.img = img
    }
}

var catalogo = []

catalogo.push(new Filmes("Avengers","Fantasia e Ação!",`R$15,50`,"Vingadores.jpg"))
catalogo.push(new Filmes("Pânico","Terror e Horror!",`R$20,99`,"panico.jpg"))
catalogo.push(new Filmes("DeadPool","Ação e Comedia",`R$18,99`,"deadpool.jpg"))

catalogo.forEach((elemento) => {
    document.querySelector("#catalogo").innerHTML += `
        <div style="background-image: url(images/${elemento.img});" class="card filmes" style="width: 18rem;">
            <div class="card-body d-flex flex-column align-items-center">
                <div class="descricao d-flex flex-column align-items-center">
                    <h5 class="card-title">${elemento.nome}</h5>
                    <p class="card-text">${elemento.descricao}</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <h5 class="valor">${elemento.valor}</h5>
                    <button class="btn btn-dark">COMPRAR</button>
                </div>
            </div>
        </div>
    `
})