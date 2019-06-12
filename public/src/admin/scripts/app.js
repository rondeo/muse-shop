//console.log('loading the app js ')
$('#newProduct').on('submit', function (e) {
    e.preventDefault();

    let formData = $(this).serializeArray()

    let data = {}

    formData.map(function (item) {
        data[item.name] = item.value;
    })
    debugger;
    let url = '/admin/new-product'
    $.ajax({
        method: 'POST',
        url: url,
        data: data,
        success: function (response) {
            debugger;
            responseHtml(response)
        },
        error: function (err) {
            responseHtml(err)
        }
    })
})

$('#editProduct').on('submit', function (e) {
    e.preventDefault();

    let formData = $(this).serializeArray()

    let data = {}

    formData.map(function (item) {
        data[item.name] = item.value;
    })

    let url = '/admin/product'
    $.ajax({
        method: 'PUT',
        url: url,
        data: data,
        success: function (response) {
            responseHtml(response)
        },
        error: function (err) {
            responseHtml(err)
        }
    })
})

function responseHtml(response) {
    $('.response').html(response)
}

$('.btn-prod-action').click(function (e) {
    e.preventDefault();
    var $this = $(this)
    var id = $this.attr('data-id')

    showPopUp('Voce tem certeza?', id)
    
    return false;
})
function buttonConsole() {
    console.log('clicking here')
    return false;
}
function deleteItem(id) {


    var data = {
        id: id
    }

    var url = '/admin/product'

    $.ajax({
        method: 'DELETE',
        url: url,
        data: data,
        success: function (response) {
            $('.message').html('Produto excluido')
            setTimeout(function () {
                window.location.reload(false);
            }, 2000)

        },
        error: function (err) {
            $('.message').html('Algo deu errado, tente mais tarde')
            setTimeout(function () {
                window.location.reload(false);
            }, 2000)

        }
    })

    return false
}
function cancelPopUp() {
    $('.popup').hide()
    return false;
}
function showPopUp(message, data) {
    $('.popup .message').html(message)
    $('.popup .buttons').append(`<button class="btn btn-danger" onclick="deleteItem(${data})"> Delete </button>`)
    $('.popup').show()
    return false;
}