function showFriends(){
    $('#lista').empty();
    $.get('http://localhost:5000/amigos', function(data){
      data.forEach(e => { $(`<li id="${e.id}">${e.name} <button id="${e.id}" onclick="deleteFriend(${e.id})">X</button></li>`).appendTo('#lista')});
    });
}
$('#boton').click(showFriends);

$('#search').click(function(){
    let input=$("#input").val()
    if(input){
        $.get(`http://localhost:5000/amigos/${input}`, function(data){
            $('#amigo').text(data.name);
            $("#input").val("");
        });
    } else {
        $('#amigo').text("Debes ingresar un ID");
    }
});

function deleteFriend(idX){
    let input;
    if(idX){
        input=idX
    } else {
        input=$("#inputDelete").val()
    }
    if(input){
        $.ajax({
            url: `http://localhost:5000/amigos/${input}`,
            type: 'DELETE',
            success: function (){
                $("#success").text("Tu amigo ha sido eliminado"),
                $("#inputDelete").val("");
                showFriends();
            }
        });
    } else {
        $('#success').text("Debes ingresar un ID");
    }
};
$('#delete').click();