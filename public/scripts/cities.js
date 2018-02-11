
    const cityMenu = document.getElementById('city-menu');
    const cityButton = document.getElementById('city-button');

    cityButton.addEventListener('click', function() {
        var background = document.querySelector('body');
        
        if(cityMenu.value === 'losangeles') {
            background.classList = '';
            background.classList.add('losangeles');
        } else if(cityMenu.value === 'london') {
            background.classList = '';
            background.classList.add('london');
        } else if(cityMenu.value === 'paris') {
            background.classList = '';
            background.classList.add('paris');
        } else if(cityMenu.value === 'tokyo') {
            background.classList = '';
            background.classList.add('tokyo');
        } else if(cityMenu.value === 'sydney') {
            background.classList = '';
            background.classList.add('sydney');
        } else if(cityMenu.value === 'dubai') {
            background.classList = '';
            background.classList.add('dubai');
        } else if(cityMenu.value === 'rio') {
            background.classList = '';
            background.classList.add('rio');
        } else if(cityMenu.value === 'newyork') {
            background.classList = '';
            background.classList.add('newyork');
        }
    });


  