$(function(){
    $('.hero').on('click', 'button', getHeroImage)
});
    
 function getHeroImage () {
    const $this = $(this);
    let $name = $this.parent().children('input');
    const result = $.ajax({
    url: `/name/${$name.val()}`
    })
    result.then(function(data) {
        let imageUrl = data.thumbnailJpg;
        imageUrl += '/portrait_xlarge.jpg';
        let $heroImage = $this.parent().children('.thumbnail')
        $heroImage.attr('style',`background-image: url("${imageUrl}")`)
    });
    $name.val('');
};
