import { inject, provide } from 'vue'
//сделано для того, что в случае исплользования переменной с одним названием они не перетерли друг друга
const symbol = Symbol('theme')

export function defineTheme(theme: 'dark' | 'light'){
    provide(symbol, theme)
}

export function useTheme(): 'dark' | 'light' {
    return inject(symbol) || 'light'
}