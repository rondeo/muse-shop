//console.log('loading the app js ')
$('#newProduct').on('submit', function(e){
    e.preventDefault();
     
    let formData = $( this ).serializeArray()

    let data = {}

    formData.map(function(item){
        data[item.name] = item.value;
    })

    let url = '/admin/new-product'
    $.ajax({
        method: 'POST',
        url: url,
        data: data,
        success: function(response){
            console.log(response)
        },
        error: function(err){
            console.log(err)
        }
    })
})
