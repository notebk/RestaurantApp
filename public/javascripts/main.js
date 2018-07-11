var $new = $('#newIngredient');
var $edit = $('#editIngredient');

var onError = function(data, status) {
    console.log("status", status);
    console.log("error", data);
};

$new.on("submit", function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    var name = $new.find("[name='name']").val();
    var price = $new.find("[name='price']").val();
    var stock = $new.find("[name='stock']").val();
    $.post("ingredients/add", {
        name: name,
        price: price,
        stock: stock
    })
        .done($("#results").load("/ingredients #list"))
        .error(onError);
});

$edit.on("click", function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    var item = $edit.find("[name=")
})