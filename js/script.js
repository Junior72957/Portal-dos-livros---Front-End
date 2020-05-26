$(document).ready(function(){
    var quantity = 1;

    $('.maisquant').click(function(e){
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1);
    });

    $('.menosquant').click(function(e){
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        if(quantity > 1){
            $('#quantity').val(quantity - 1);
        }
    });

});
