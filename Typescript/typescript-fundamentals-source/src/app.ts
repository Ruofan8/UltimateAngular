// We import the 3rd-party library called lodash,
// which we installed via npm/yarn as a dependency
// of our project
import { random } from 'lodash'
// We import two utilities we created ourselves
// from "utils.ts"
import { generateRandomId, Component } from './utils'

// We create one example of our "component class".
// It is a class which has been decorated using our
// `@Component` decorator (factory). The decorator
// takes and options object with an `id` property.
@Component({
    id: 'app'
})
class App {
    // We define a single instance method, which will
    // be responsible for generating a random ID every
    // one second, and updating the given DOM element
    // with the result.
    onInit(el: HTMLElement | null): void {
        setInterval(function() {
            if (el) {
                el.innerHTML = generateRandomId({
                    symbol: '#',
                    length: random(7, 10)
                })
            }
        }, 1000)
    }
}

// Our main function will accept a component class
// and use its static `id` property to lookup our
// container element in the DOM.
//
// It will also instantiated the component class,
// and call our `onInit()` method, passing in the
// result of the call to `document.getElementById`.
function main(ComponentClass) {
    const el = document.getElementById(ComponentClass.id)
    const cmp = new ComponentClass()
    cmp.onInit(el)
}

// We kick-off our application by calling our main() function
// with our `App` component class
main(App)