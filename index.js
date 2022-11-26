// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(name){
    cats.pop (name)
    return cats
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
    return cats
}
function appendCat(name){
    var newCats =[...cats, name]
    return newCats 
}
function prependCat(name){
    var newCats = [name, ...cats]
    return newCats
}

function removeLastCat(name){
    var newCats = cats.slice(0, cats.length -1)
    return newCats
    
}

function removeFirstCat(name){
    var newCats = cats.slice(1)
    return newCats
}