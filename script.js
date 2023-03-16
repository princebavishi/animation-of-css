let toggleMenu = document.querySelector('.close');
    let navigation = document.querySelector('.navigation');

    toggleMenu.onclick = function()
    {
        navigation.classList.toggle('active');
    }