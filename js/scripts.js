


function menuToggle() {
    var x = document.getElementById('Menu');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}