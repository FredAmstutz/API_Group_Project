$(function(){
    console.log('loaded');
    $('#first-hero button').on('click', function() {
        console.log('clicked');
        const _this = $(this);
        const $name = _this.data('heroName');

        const result = $.ajax({
            url: `/name/${$name}`
        })

        result.then(function(data) {
            let imageUrl = data.thumbnailJpg;
            imageUrl += '/portrait_xlarge.jpg';
            let $heroImage = $('#first-hero .thumbnail');
            $heroImage.attr('style',`background-image: url("${imageUrl}")`)
        })
    });
})