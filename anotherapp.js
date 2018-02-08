$(function() {
    const result = $.ajax({
        url: 'http://gateway.marvel.com/v1/public/characters',
        data: {
            name: 'spider-man',
            ts: 60,
            apikey: 'b657ce51c096cc18084526e359a33a19',
            hash: '0eeab4983b0ffe8f95baf8ffa6b125fd'
        }
    })
    console.log(result);
    result.then(function(data) {
        console.log(data)
    })
})

