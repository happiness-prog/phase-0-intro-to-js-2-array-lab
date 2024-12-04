// Write your solution here!
let cats=['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(){
    cats.push('Ralph')
}
function destructivelyPrependCat(){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop(-1)
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function removeFirstCat(){
    cats.shift(0)
}

function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0, -1)
}

function removeFirstCat() {
    return cats.slice(1)
}