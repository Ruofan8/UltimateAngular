// We create a custom "type alias",
// which is the union type of the string literal type "#"
// and the string literal type "$"
export type ValidSymbol = '#' | '$'
// We create a custom interface which must implement two properties,
// a `symbol`, which is of type `ValidSymbol`, and a length, which
// is of type `number`
export interface GenerateConfig {
    symbol: ValidSymbol,
    length: number,
}

// We define multiple function signatures for our `generateRandomId()`
// utility function. This allows us to benefit from the flexibility of
// JavaScript in its implementation, but also still give TypeScript the
// chance to type check our usage of it in all of its different variants.
export function generateRandomId(symbol: ValidSymbol, length: number): string
export function generateRandomId(options: GenerateConfig): string
export function generateRandomId(optionsOrSymbol: GenerateConfig | ValidSymbol, length?: number): string {
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36)
            .substr(2, length)
    }
    return optionsOrSymbol.symbol + Math.random().toString(36)
        .substr(2, optionsOrSymbol.length)
}

// We define our `Component` decorator factory as a function, which
// takes in a configuration object and returns another function which
// takes in the component class as its parameter.
export function Component(options: { id: string }) {
    return (target) => {
        target.id = options.id
    }
}