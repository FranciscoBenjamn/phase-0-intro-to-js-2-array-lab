let cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(a) {
cats.push(a)
}
function destructivelyPrependCat(a) {
cats.unshift(a)
}
function destructivelyRemoveLastCat(a) {
    cats.pop(a)
}
function destructivelyRemoveFirstCat(a) {
    cats.shift(a)
}
function appendCat(a) {
 const copyOfCats = [...cats];
 copyOfCats.push(a)
 return copyOfCats
}
function prependCat(a) {
    const copyOfCats = [...cats];
    copyOfCats.unshift(a)
    return copyOfCats
}
function removeLastCat(a) {
    const copyOfCats = [...cats];
    copyOfCats.pop(a)
    return copyOfCats
}
function removeFirstCat(a) {
    const copyOfCats = [...cats];
    copyOfCats.shift(a)
    return copyOfCats
}