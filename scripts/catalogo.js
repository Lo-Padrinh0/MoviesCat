// catalogo
class Filmes {
    constructor (nome,valor,img,data,horario){
        this.nome = nome,
        this.valor = valor,
        this.img = img,
        this.data = data,
        this.horario = horario
    }
}

var catalogo = []

catalogo.push(new Filmes("Avengers",`R$15,50`,"Vingadores.jpg","10 de junho 2024","15hs, 19:30hs, 23hs"))
catalogo.push(new Filmes("Pânico",`R$20,99`,"panico.jpg","11 de junho 2024","15hs, 19:30hs, 23hs"))
catalogo.push(new Filmes("DeadPool",`R$18,99`,"deadpool.jpg","13 de junho 2024","15hs, 19:30hs, 23hs"))
catalogo.push(new Filmes("Avengers",`R$15,50`,"Vingadores.jpg","10 de junho 2024","15hs, 19:30hs, 23hs"))
catalogo.push(new Filmes("Pânico",`R$20,99`,"panico.jpg","11 de junho 2024","15hs, 19:30hs, 23hs"))
catalogo.push(new Filmes("DeadPool",`R$18,99`,"deadpool.jpg","13 de junho 2024","15hs, 19:30hs, 23hs"))

catalogo.forEach((elemento) => {
    document.querySelector("#catalogo").innerHTML += `
    <div id="card" class="card">
        <img src="/images/${elemento.img}" class="filmes card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${elemento.nome}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${elemento.data}</li>
            <li class="list-group-item">${elemento.horario}</li>
            <li class="text-success list-group-item">${elemento.valor}</li>
        </ul>
        <div id="button" class="card-body">
            <button type="button">COMPRAR</button>
        </div>
    </div>
    `
})

// Modal Assentos
$(document).ready(function() {
    // Adiciona evento de clique para cada filme
    $('.card-body button').click(function(event) {
        event.preventDefault(); // Previne a ação padrão do link
        $('#poltronas').modal('show'); // Abre o modal
    });
});
  
$(document).ready(function() {
    // Função para gerar poltronas
    function gerarPoltronas() {
        const poltronasCinema = $('#poltronasCinema');
        poltronasCinema.empty(); // Limpa os assentos existentes
        let total = 0; // Inicializa o total
  
        for (let i = 0; i < 3; i++) { // 3 fileiras
        const fileira = $('<div>').addClass('d-flex justify-content-center mb-2');
        for (let j = 0; j < 6; j++) { // 6 poltronas por fileira
            const poltrona = $('<button>').addClass('btn border me-1 poltrona');
            // Adiciona o ícone e o número em linhas separadas
            poltrona.html(`<i class="fa-solid fa-couch fa-xl"></i><span class="poltrona-numero">${i * 6 + j + 1}</span>`);
            poltrona.on('click', function() {
                $(this).toggleClass('btn-success'); // Muda a cor para verde
                const valorPoltrona = 29.90;
                if ($(this).hasClass('btn-success')) {
                total += valorPoltrona; // Adiciona o valor ao total
                } else {
                total -= valorPoltrona; // Subtrai o valor do total
                }
                $('#total').text(`Total: R$${total.toFixed(2)}`); // Atualiza o total
            });
            fileira.append(poltrona);
        }
        poltronasCinema.append(fileira);
    }
}
  
// Inicializa o modal com as poltronas
$('#poltronas').on('show.bs.modal', function() {
    gerarPoltronas(); // Gera as poltronas
});
  
// Limpa o total ao fechar o modal
$('#poltronas').on('hidden.bs.modal', function() {
        $('#total').text('Total: R$0.00');
    });
});