

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsiven';
    } else {
        x.className = 'navtoggle';
    }
}
