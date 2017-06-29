type validSymbal = '#' | '@' | '$'; 

interface config {
    symbal:validSymbal, 
    length:number
}
function generateRandomId( options:config ) :string {
    return options.symbal + Math.random().toString(36).substr(2, options.length)
}

function main() {
    var appComponent = document.getElementById('app');
    setInterval(function() {
        if(appComponent) {
            appComponent.innerHTML = generateRandomId({ symbal:'#', length: 7});
        }
    }, 1000)
}