$(function(){
    console.log('loaded');
    $('.hero').on('click', 'button', getHeroImage)
});
    
 function getHeroImage () {
    console.log('clicked');
     const $this = $(this);
     console.log($this.data);
    //  $(this).parent().remove();
    const $name = $this.parent().children('input').val();
    console.log($name);
    const result = $.ajax({
    url: `/name/${$name}`
    })
    result.then(function(data) {
        let imageUrl = data.thumbnailJpg;
        imageUrl += '/portrait_xlarge.jpg';
        let $heroImage = $this.parent().children('.thumbnail')
        $heroImage.attr('style',`background-image: url("${imageUrl}")`)
        });
    };