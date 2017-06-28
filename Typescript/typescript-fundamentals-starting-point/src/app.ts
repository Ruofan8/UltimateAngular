type validSymbal = '#' | '@' | '$'; 

function generateRandomId( symbal:validSymbal, length:number ) {
    return symbal + Math.random().toString(36).substr(2, length)
}

function main() {
    var appComponent = document.getElementById('app')
    setInterval(function() {
        appComponent.innerHTML = generateRandomId('#', 7);
    }, 1000)
}