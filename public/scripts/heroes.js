$(function(){
    $('.hero').on('click', 'button', getHeroImage);
    $('.thumbnail').on('click', getHeroDetail);
});
    
 function getHeroImage () {
    const $this = $(this);
    const $name = $this.parent().children('input');
    if($name == ""){
        alert('You need to type the name of your Hero.');
        return;
    }
    const result = $.ajax({
        url: `/name/${$name.val()}`
    })
    result.then(function(data) {
        if(data == '404'){
            alert('Your name is wrong.');
            return false;
        }
        const $id = data.heroId;
        let imageUrl = data.thumbnailJpg;
        imageUrl += '/portrait_xlarge.jpg';
        let $heroImage = $this.parent().children('.thumbnail')
        $heroImage.attr('id', `${$id}`);
        $heroImage.attr('style',`background-image: url("${imageUrl}")`)
    });
};

function getHeroDetail (){
    const $this = $(this);
    const $name = $this.parent().children('input').val();
    const result = $.ajax({
        url: `/name/${$name}`
    })
    result.then(function (data) {
        const $heroDetailUrl = data.heroUrl;
        $('.thumbnail').attr('href', $heroDetailUrl);
        window.open($heroDetailUrl, '_blank');
    })
};
