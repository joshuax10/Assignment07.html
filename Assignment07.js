// CSCI 355 Web Technologies
// Summer 2024
// Joshua Perez
// Assignment 07 - Basic Webpage
// ACK - Work alone

document.getElementById('navigator').addEventListener('click', function() {
    alert(`appName: ${navigator.appName}\nproduct: ${navigator.product}\nappVersion: ${navigator.appVersion}\nuserAgent: ${navigator.userAgent}\nplatform: ${navigator.platform}\nlanguage: ${navigator.language}`);
});

document.getElementById('window').addEventListener('click', function() {
    alert(`innerHeight: ${window.innerHeight}\ninnerWidth: ${window.innerWidth}`);
});

document.getElementById('screen').addEventListener('click', function() {
    alert(`width: ${screen.width}\nheight: ${screen.height}\navailWidth: ${screen.availWidth}\navailHeight: ${screen.availHeight}\ncolorDepth: ${screen.colorDepth}\npixelDepth: ${screen.pixelDepth}`);
});

document.getElementById('location').addEventListener('click', function() {
    alert(`href: ${location.href}\nhostname: ${location.hostname}\npathname: ${location.pathname}\nprotocol: ${location.protocol}`);
});

document.getElementById('geolocation').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            alert(`Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});