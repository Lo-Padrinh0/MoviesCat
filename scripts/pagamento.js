$(`#comprar`).on(`click`, function () {
    alert(`Sua compra foi realizada, este é seu bilhete : MOVIES'CAT-1001`)
})

// Modal
$(document).ready(function() {
    $('.chamamodal').click(function(event) {
        event.preventDefault();
        $('#cartao').modal('show');
    });
});