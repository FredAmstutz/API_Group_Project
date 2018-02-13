$(function(){
    $('.hero').on('click', 'button', getHeroImage)

});
    
 function getHeroImage () {
    console.log('clicked');
     const $this = $(this);
    //console.log($this.data);
    //$(this).parent().remove();
    const $name = $this.parent().children('input').val();
    if($name == ""){
        alert('You need to type the name of your Hero.');
        return;
    }
    console.log($name);
    const result = $.ajax({
    url: `/name/${$name.val()}`
    })
    result.then(function(data) {
        console.log(data);
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
        $('.id').on('click', function(){
            // const heroImage = $('.id');
            // let heroDetail = data.heroUrl;
            console.log('clicked');

        })
        });
    };
