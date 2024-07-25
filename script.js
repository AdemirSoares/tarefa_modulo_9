$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nome-tarefa').val();
    const novoItem =$('<li></li>');
    $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();
    $('#nome-tarefa').val('');
})