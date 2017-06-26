$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event) {
    if(event.which === 13) {
        var userInput = $(this).val()
        $('ul').append('<li><span>delete</span> ' + userInput + '</li>');
        $(this).val('')
    }
    
})