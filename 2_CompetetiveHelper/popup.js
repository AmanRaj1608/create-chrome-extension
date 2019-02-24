$(function() {
    $('#a').keyup(function(){
        $('#greet').text('Hello' + $('#a').val());
    })
})