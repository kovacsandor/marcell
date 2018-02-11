export function createComponent(name) {
    // const, let ~ var
    // var-t nem használunk többé
    // legjobb gyakorlat, ha mindig const-ot használunk, kivéve, ha szeretnénk megváltoztatni az adott változót
    const element = document.createElement('div')
    element.innerHTML = ['Hello', name].join(` `)
    return element
}