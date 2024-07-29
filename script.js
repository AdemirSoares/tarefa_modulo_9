$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nome-tarefa').val();
    const novoItem =$('<li></li>');
    novoItem.append(novaTarefa);
    $(novoItem).appendTo('#lista-tarefas');
    $('#nome-tarefa').val('');
})

$('#lista-tarefas').on('click', 'li', function() {
    $(this).toggleClass('line-through');
});